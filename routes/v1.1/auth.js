var express = require('express')
var router = express.Router()

var passport = require('passport');
var { generateToken, sendToken } = require('../../services/token.service');

/**
 * @swagger
 * definitions:
 *   User:
 *    type: object
 *    required:
 *      - _id
 *      - facebookId
 *    properties:
 *      _id:
 *        type: integer
 *        format: int64
 *      facebookId:
 *        type: string
 *      email:
 *        type: string
 *      name:
 *        type: string
 */


/**
 * @swagger
 * /v1.1/auth/facebook:
 *    post:
 *      tags: ["auth"]
 *      description: Auth against facebook
 *      produces:
 *        application/json
 *      parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        type: object
 *        properties:
 *          access_token:
 *            type: string
 *            example: ALONGSTRING
 *      responses:
 *        200:
 *          description: "successful operation"
 *          schema:
 *            type: "array"
 *            items:
 *              $ref: "#/definitions/User"
 *
 *
 */
router.post('/facebook',
    passport.authenticate('facebook-token', {session: false}),
    (req, res, next) => {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        req.auth = {
            id: req.user.id
        };

        next();
    }, generateToken, sendToken);

/**
 * @swagger
 * /v1.1/auth/google:
 *    post:
 *      tags: ["auth"]
 *      description: Auth against google
 *      produces:
 *        application/json
 *      parameters:
 *      - name: body
 *        in: body
 *        required: true
 *        type: object
 *        properties:
 *          access_token:
 *            type: string
 *            example: ALONGSTRING
 *      responses:
 *        200:
 *          description: "successful operation"
 *          schema:
 *            type: "array"
 *            items:
 *              $ref: "#/definitions/User"
 *
 *
 */
router.post('/google',
    passport.authenticate('google-token', {session: false}),
    (req, res, next) => {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        req.auth = {
            id: req.user.id
        };

        next();
    }, generateToken, sendToken);

/**
 * @swagger
 * /v1.1/auth/:
 *    get:
 *      tags: ["auth"]
 *      description: get user info and check the auth
 *      security:
 *        - Bearer: []
 *      produces:
 *        application/json
 *      responses:
 *        200:
 *          description: "successful operation"
 *          schema:
 *            type: "array"
 *            items:
 *              $ref: "#/definitions/User"
 *
 *
 */
router.get('/',
  passport.authenticate('jwt', {session: false}),
  (req, res, next) => {
    return res.status(200).send(JSON.stringify(req.user));
  })

module.exports = router
