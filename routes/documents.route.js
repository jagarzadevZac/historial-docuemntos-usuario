const documentsController = require("../controllers/documents.controller");

var express = require("express");

var router = express.Router();

router.post("/crear", documentsController.register);
/**
 * @swagger
 * /documentos/crear:
 *   post:
 *      description: Crear documento
 *      tags:
 *          - documento
 *      parameters:
 *          - in: body
 *            name: documento
 *            description: informacion del documento
 *            schema:
 *              type: object
 *              required:
 *                 - titulo
 *                 - documento
 *                 - UsuarioId
 *                 - modificado_por
 *              properties:
 *                  titulo:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: libro
 *                  documento:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: react2012.pdf
 *                  UsuarioId:
 *                      type: integer
 *                      example: 142
 *                  modificado_por:
 *                      type: integer
 *                      example: 142
 * 
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put("/update", documentsController.update);
/**
 * @swagger
 * /documentos/update:
 *   put:
 *      description: Actualizar informacion de documento
 *      tags:
 *          - documento
 *      parameters:
 *          - in: body
 *            name: documento
 *            description: Informacion de documento
 *            schema:
 *              type: object
 *              required:
 *                 - titulo
 *                 - documento
 *                 - UsuarioId
 *                 - modificado_por
 *              properties:
 *                  id:
 *                      type: integer
 *                      example: 1073
 *                  titulo:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: libro
 *                  documento:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: react2012update.pdf
 *                  UsuarioId:
 *                      type: integer
 *                      example: 142
 *                  modificado_por:
 *                      type: integer
 *                      example: 142
 *                      
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/listar-documentos", documentsController.getAllDocuments);
/**
 * @swagger
 * /documentos/listar-documentos:
 *   get:
 *      description: Listar todos los documentos
 *      tags:
 *          - documento
 *      responses:
 *          '200':
 *              description: Successful operation
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/obtener-documento-id", documentsController.getDocumentById);
/**
 * @swagger
 * /documentos/obtener-documento-id:
 *   post:
 *      description: Obtener documento
 *      tags:
 *          - documento
 *      parameters:
 *          - in: body
 *            name: documento
 *            description: Informacion de documento
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

router.post("/obtener-documento-busqueda", documentsController.getDocumentByTitulo);
/**
 * @swagger
 * /documentos/obtener-documento-busqueda:
 *   post:
 *      description: Obtener documento por nombre o titulo
 *      tags:
 *          - documento
 *      parameters:
 *          - in: body
 *            name: documento
 *            description: Informacion de documento
 *            schema:
 *              type: object
 *              required:
 *                 - titulo
 *              properties:
 *                  titulo:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: test 1
 * 
 *      responses:
 *          '200':
 *              description: returns an object with user information
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
 
router.delete("/eliminar-documento", documentsController.deleteDocument);
/**
 * @swagger
 * /documentos/eliminar-documento:
 *   delete:
 *      description: Eliminar documento por id
 *      tags:
 *          - documento
 *      parameters:
 *          - in: query
 *            name: id
 *            type: integer
 *            description: Documento id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


 module.exports = router;