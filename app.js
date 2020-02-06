var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')

// load .env
require('dotenv').config()

// load database
var mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/test',
  {useNewUrlParser: true, useUnifiedTopology: true}
);

var nomRouter = require('./routes/nomenclatures')
var indexRouter = require('./routes/index')

var app = express()
app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// the Api doc

const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'Montessori Ressources',
      version: '1.0.0',
      description: 'Montessori Ressources',
    },
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

const swaggerUi = require('swagger-ui-express');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/nomenclatures', nomRouter);

app.use('/', indexRouter);

// error handling
app.use(function(error, req, res, next) {
  res.status(500).json({ message: error.message });
});

module.exports = app;
