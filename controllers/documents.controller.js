const documentsService = require("../services/documents.service");

exports.register = (req, res, next) => {
    // Validation area
    const data = {
        titulo: req.body.titulo,
        documento: req.body.documento,
        UsuarioId: req.body.UsuarioId,
        modificado_por: req.body.modificado_por,
    };

    documentsService.register(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: "Bad request" });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
};


exports.update = (req, res, next) => {
    // Validation area
    const data = {
        id : req.body.id,
        titulo: req.body.titulo,
        documento: req.body.documento,
        UsuarioId: req.body.UsuarioId,
        modificado_por: req.body.modificado_por,
    };

    documentsService.update(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: "Bad request" });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
};

exports.getAllDocuments = (req, res, next) => {
    const data = {};
    documentsService.getAllDocuments(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: "Bad request" });
        }

        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
};

exports.getDocumentById = (req, res, next) => {
    const data = {
        id:req.body.id,
    };
    documentsService.getDocumentById(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: "Bad request" });
        }

        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
};

exports.getDocumentByTitulo = (req, res, next) => {
    const data = {
        titulo: req.body.titulo,
    };
    documentsService.getDocumentByTitle(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: "Bad request" });
        }

        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
};

exports.deleteDocument = (req, res, next) => {
    const data = {
        id: req.query.id,
    };
    documentsService.deleteDocument(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: "Bad request" });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
};
