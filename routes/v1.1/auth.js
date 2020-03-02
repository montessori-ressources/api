var express = require('express')
var router = express.Router()

var passport = require('passport');
var { generateToken, sendToken } = require('../../services/token.service');

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
 *              $ref: "#/definitions/Nomenclature"
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

module.exports = router
