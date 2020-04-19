var passport = require('passport');
var User = require('../models/user.model');
var FacebookTokenStrategy = require('passport-facebook-token');
var GoogleTokenStrategy = require('passport-google-token').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;


const setupStrategies = () => {
    // facebook strategy is used to validate the login
    passport.use(new FacebookTokenStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    },
    function (accessToken, refreshToken, profile, done) {
      // create or update User model with the user received via FB.
      User.findOrCreate({ facebookId: profile.id},
        {
          email: profile._json.email,
          name: profile.displayName,
          picture: profile._json.picture
        }, (err, user) => {
        return done(err, user)
      })
    }))

    // google strategy is used to validate the login
    passport.use(new GoogleTokenStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    function (accessToken, refreshToken, profile, done) {
      // create or update User model with the user received via Google.
      User.findOrCreate({ googleId: profile.id},
        {
          email: profile._json.email,
          name: profile.displayName,
          picture: profile._json.picture
        }, (err, user) => {
        return done(err, user)
      })
    }))

    // the JWT is used to auth on endpoint (after the login)
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : process.env.SESSION_SECRET
    },
    (jwtPayload, cb) => {
      // find the user in User model related to the JWT.
      return User.findById(jwtPayload.id)
          .then(user => {
              return cb(null, user)
          })
          .catch(err => {
              return cb(err)
          })
        }
    ))
}

module.exports = {
  setupStrategies: setupStrategies,
}
