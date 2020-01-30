const Nomenclature = require('../models/nomenclature.model');


module.exports = (req, res, next) => {
  Nomenclature.find((err, docs) => {
    if (err) {
      return next(err)
    }
    res.json(docs)
  })
  // var nomenclatures = [
  //   {id: 0, name: "nomenclature 1", cards:[
  //     {id:1, file:"https://montessori-web.s3.eu-central-1.amazonaws.com/Aretha+Franklin.jpg", description:"1"},
  //     {id:2, file:"s3path", description:"2"},
  //     {id:3, file:"https://montessori-web.s3.eu-central-1.amazonaws.com/Aretha+Franklin.jpg", description:"3"},
  //     {id:4, file:"s3path", description:"4"},
  //     {id:5, file:"https://montessori-web.s3.eu-central-1.amazonaws.com/Aretha+Franklin.jpg", description:"5"},
  //     {id:6, file:"s3path", description:"6"},
  //   ]},
  //   {id: 7, name: "nomenclature 2", cards:[
  //     {id:8, file:"https://montessori-web.s3.eu-central-1.amazonaws.com/Aretha+Franklin.jpg", description:"7"},
  //     {id:9, file:"https://montessori-web.s3.eu-central-1.amazonaws.com/Aretha+Franklin.jpg", description:"8"},
  //     {id:10, file:"https://montessori-web.s3.eu-central-1.amazonaws.com/Aretha+Franklin.jpg", description:"9"},
  //     {id:11, file:"https://montessori-web.s3.eu-central-1.amazonaws.com/Aretha+Franklin.jpg", description:"10"},
  //     {id:12, file:"https://montessori-web.s3.eu-central-1.amazonaws.com/Aretha+Franklin.jpg", description:"11"},
  //     {id:13, file:"https://montessori-web.s3.eu-central-1.amazonaws.com/Aretha+Franklin.jpg", description:"12"},
  //   ]},
  // ]
  // res.json(nomenclatures);
}
