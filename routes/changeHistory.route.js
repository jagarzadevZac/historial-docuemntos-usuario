const changesHistoryController = require("../controllers/changeHistory.controller");

var express = require("express");

var router = express.Router();

router.post("/crear", changesHistoryController.register);
/**
 * @swagger
 * /historial/crear:
 *   post:
 *      description: Crear historial de docmuento
 *      tags:
 *          - historial
 *      parameters:
 *          - in: body
 *            name: historial
 *            description: Historial de documentos
 *            schema:
 *              type: object
 *              required:
 *                 - documentoId
 *                 - fecha
 *                 - UsuarioId
 *              properties:
 *                  documentoId:
 *                     type: integer
 *                     example: 1073
 *                  fecha:
 *                     type: string
 *                     minLength: 1
 *                     maxLength: 100
 *                     example: 03-12-2021
 *                  UsuarioId:
 *                     type: integer
 *                     example: 142
 *                  
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/obtener-historial-id", changesHistoryController.getHistoryById);
/**
 * @swagger
 * /historial/obtener-historial-id:
 *   post:
 *      description: Obtener historial de documento
 *      tags:
 *          - historial
 *      parameters:
 *          - in: body
 *            name: historial
 *            description: Informacion de historial de documento
 *            schema:
 *              type: object
 *              required:
 *                 - id
 *              properties:
 *                    id:
 *                      type: integer
 *                      example: 1073
 *           
 *      responses:
 *          '200':
 *              description: returns an object with user information
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;