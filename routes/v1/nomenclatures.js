var express = require('express')
var router = express.Router()

const list = require('../../controllers/list.controller.js')
const upload = require('../../controllers/upload.controller.js')
const del = require('../../controllers/delete.controller.js')
const get = require('../../controllers/get.controller.js')
const put = require('../../controllers/put.controller.js')

/**
 * @swagger
 * definitions:
 *   Nomenclature:
 *    type: object
 *    required:
 *      - _id
 *      - name
 *    properties:
 *      _id:
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
 * /v1/nomenclatures:
 *    get:
 *      tags: ["nomenclatures"]
 *      description: This should return all nomenclatures
 *      produces:
 *        application/json
 *      responses:
 *        200:
 *          description: "successful operation"
 *          schema:
 *            type: "array"
 *            items:
 *              $ref: "#/definitions/Nomenclature"
 *
 *
 */
router.get('/', list)

/**
 * @swagger
 * /v1/nomenclatures:
 *    post:
 *      tags: ["nomenclatures"]
 *      description: This is used to upload a new nomenclature
 *      consumes:
 *        - multipart/form-data
 *      parameters:
 *        - in: formData
 *          name: photos
 *          type: array
 *          items:
 *            type: string
 *            format: binary
 *      responses:
 *        200:
 *          description: "successful operation"
 *          schema:
 *            type: "object"
 *            properties:
 *              msg:
 *                type: string
 *                example: "nomenclature xxx created"
 */
router.post(
  '/',
  upload.middleware.array('photos', 20),
  upload.controller
)

/**
 * @swagger
 * /v1/nomenclatures/{id}:
 *    delete:
 *      tags: ["nomenclatures"]
 *      description: This should delete one nomenclature
 *      produces:
 *        application/json
 *      parameters:
 *      - name: "id"
 *        in: "path"
 *        required: true
 *      responses:
 *        200:
 *          description: "successful operation"
 *          schema:
 *            type: "object"
 *            properties:
 *              msg:
 *                type: string
 *                example: "object xxx deleted"
 *
 */
router.delete('/:id', del)

/**
 * @swagger
 * /v1/nomenclatures/{id}:
 *    put:
 *      tags: ["nomenclatures"]
 *      description: Update existing nomenclature
 *      parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        type: string
 *      - name: body
 *        in: body
 *        required: true
 *        type: object
 *        schema:
 *          $ref: "#/definitions/Nomenclature"
 *      responses:
 *        200:
 *          description: "successful operation"
 *
 */
 router.put('/:id', put)

 /**
  * @swagger
  * /v1/nomenclatures/{id}:
  *    get:
  *      tags: ["nomenclatures"]
  *      description: Find by nomenclature ID
  *      parameters:
  *      - name: id
  *        in: path
  *        required: true
  *        type: string
  *      responses:
  *        200:
  *          description: "successful operation"
  *          schema:
  *            $ref: "#/definitions/Nomenclature"
  *
  */
router.get('/:id', get)

module.exports = router
