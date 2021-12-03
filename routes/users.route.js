const usersController = require("../controllers/users.controller");

var express = require("express");

var router = express.Router();

router.post("/crear", usersController.register);
/**
 * @swagger
 * /usuarios/crear:
 *   post:
 *      description: Used to register user
 *      tags:
 *          - usuario
 *      parameters:
 *          - in: body
 *            name: usuario
 *            description: Usuario data
 *            schema:
 *              type: object
 *              required:
 *                 - nombre
 *                 - emailId
 *                 - password
 *                 - ultimo_inicio_sesion
 *                 - tipo_usuario
 *              properties:
 *                  nombre:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Jesus
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: jesus@sample.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: abcd
 *                  ultimo_inicio_sesion:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 02-12-2021
 *                  tipo_usuario:
 *                     type: string
 *                     minLength: 1
 *                     maxLength: 45
 *                     example: admin
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.post("/login", usersController.login);
/**
 * @swagger
 * /usuarios/login:
 *   post:
 *      description: Used to login user
 *      tags:
 *          - usuario
 *      parameters:
 *          - in: body
 *            name: usuario
 *            description: informacion de usuario
 *            schema:
 *              type: object
 *              required:
 *                 - emailId
 *                 - password
 *              properties:
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: jesus@sample.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: abcd
 *      responses:
 *          '200':
 *              description: returns an object with user information
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.put("/update", usersController.updateUser);
/**
 * @swagger
 * /usuarios/update:
 *   put:
 *      description: Actualizar informacion de documento
 *      tags:
 *          - usuario
 *      parameters:
 *          - in: body
 *            name: usuario
 *            description: Informacion de usuario
 *            schema:
 *              type: object
 *              required:
 *                 - id
 *                 - ultimo_inicio_sesion
 *              properties:
 *                  id:
 *                   type: integer
 *                   example: 142
 *                  ultimo_inicio_sesion:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 03-12-2021
 *                      
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


module.exports = router;