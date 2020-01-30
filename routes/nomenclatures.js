var express = require('express');
var router = express.Router();

const list = require('../controllers/list.controller.js')
const upload = require('../controllers/upload.controller.js')

/**
 * @swagger
 * definitions:
 *   Nomenclature:
 *    type: object
 *    required:
 *      - id
 *      - name
 *    properties:
 *      id:
 *        type: integer
 *        format: int64
 *      name:
 *        type: string
 *        example: "nomenclature name"
 *      cards:
 *        type: array
 *        items:
 *          type: object
 *          properties:
 *            originalname:
 *              type: string
 *              example: 1027-400x400.jpg
 *            key:
 *              type: string
 *              example: b036e5f4-0134-4590-b6b1-842b56018751
 *            location:
 *              type: string
 *              example: https://montessori-web.s3.amazonaws.com/b036e5f4-0134-4590-b6b1-842b56018751
 *
 */

/**
 * @swagger
 * /nomenclatures:
 *    get:
 *      description: This should return all nomenclatures
 *      produces:
 *        application/json
 *      responses:
 *        200:
 *          description: "sucessfull operation"
 *          schema:
 *            type: "array"
 *            items:
 *              $ref: "#/definitions/Nomenclature"
 *
 *
 */
router.get('/', list);

/**
 * @swagger
 * /nomenclatures:
 *    post:
 *      description: This is used to upload a new nomenclature
 */
router.post(
  '/',
  upload.middleware.array('photos', 20),
  upload.controller
)

/**
 * @swagger
 * /nomenclatures:
 *    put:
 *      description: Update existing nomenclature
 */

 /**
  * @swagger
  * /nomenclatures/{id}:
  *    get:
  *      description: Find by nomenclature ID
  *      parameters:
  *      - name: id
  *        in: path
  *        required: true
  *        type: string
  */

module.exports = router;
