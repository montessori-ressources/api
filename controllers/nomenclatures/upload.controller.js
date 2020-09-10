var multer = require('multer')
var multerS3 = require('multer-s3')
var uuidv4 = require('uuid/v4')
var aws = require('aws-sdk')
var querystring = require('querystring')
var s3 = new aws.S3()
const Nomenclature = require('../../models/nomenclature.model');

exports.middleware = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET,
    metadata: function (req, file, cb) {
      cb(null, {originalname: querystring.escape(file.originalname)});
    },
    key: function (req, file, cb) {
      let uuid = uuidv4()
      cb(null, uuid)
    }
  })
})

exports.controller = (req, res, next) => {
  let nomenclature = new Nomenclature
  nomenclature.name = 'New Nomenclature'
  if(req.body.name) {
    nomenclature.name = req.body.name
  }
  nomenclature.author = req.user.name
  nomenclature.cards = req.files
  nomenclature.save((err) => {
    if(err)
      return next(err)
    res.send('Successfully uploaded ' + req.files.length + ' files!')
  })
}
