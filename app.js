var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
const strategies = require('./services/strategies.service')

// load .env
require('dotenv').config()

// load database
var mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/test',
  {useNewUrlParser: true, useUnifiedTopology: true}
);

var indexRouter = require('./routes')

var app = express()

// this allow to read from fontend the auth-tokem
var corsOptions = {
  exposedHeaders: 'x-auth-token'
}

app.use(cors(corsOptions))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// the Api doc

const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'Montessori Ressources',
      version: '1.0.0',
      description: 'Montessori Ressources',
    },
    //basePath: '/v1',
    components: {
      securitySchemes: {
        Bearer: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },

  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['./routes/*.js', './routes/*/*.js'],
};

const specs = swaggerJsdoc(options);

const swaggerUi = require('swagger-ui-express');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// setup auth strategies
strategies.setupStrategies()

app.use('/', indexRouter);

// error handling
app.use(function(error, req, res, next) {
  res.status(500).json({ message: error.message });
});

module.exports = app;
