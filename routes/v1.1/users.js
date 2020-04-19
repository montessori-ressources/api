var express = require('express')
var router = express.Router()

const list = require('../../controllers/users/list.controller.js')
const del = require('../../controllers/users/delete.controller.js')
const get = require('../../controllers/users/get.controller.js')
const put = require('../../controllers/users/put.controller.js')

var passport = require('passport');

const auth = require('../../services/auth.service.js')

/**
 * @swagger
 * definitions:
 *   User:
 *    type: object
 *    required:
 *      - _id
 *      - name
 *    properties:
 *      _id:
 *        type: integer
 *        format: int64
 */

/**
 * @swagger
 * /v1.1/users:
 *    get:
 *      tags: ["users"]
 *      description: This should return all users
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
  auth.checkIsInRole(auth.ROLES.admin),
  list)

/**
 * @swagger
 * /v1.1/users/{id}:
 *    delete:
 *      tags: ["users"]
 *      security:
 *        - Bearer: []
 *      description: This should delete one user
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
router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  auth.checkIsInRole(auth.ROLES.admin),
  del)

/**
 * @swagger
 * /v1.1/users/{id}:
 *    put:
 *      tags: ["users"]
 *      security:
 *        - Bearer: []
 *      description: Update existing user
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
 *          $ref: "#/definitions/User"
 *      responses:
 *        200:
 *          description: "successful operation"
 *
 */
 router.put('/:id',
    passport.authenticate('jwt', {session: false}),
    auth.checkIsInRole(auth.ROLES.admin),
    put)

 /**
  * @swagger
  * /v1.1/users/{id}:
  *    get:
  *      tags: ["users"]
  *      description: Find by user ID
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
router.get('/:id', 
  passport.authenticate('jwt', {session: false}),
  auth.checkIsInRole(auth.ROLES.admin),
  get)

module.exports = router
