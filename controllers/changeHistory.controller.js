const changesHistoryService =require("../services/changeHistory.service");

exports.register = (req, res, next) => {
    // Validation area
    const data = {
        documentoId: req.body.documentoId,
        fecha: req.body.fecha,
        UsuarioId: req.body.UsuarioId,
    };

    changesHistoryService.register(data, (error, results) => {
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


exports.getHistoryById = (req, res, next) => {
    // Validation area
    const data = {
        id: req.body.id,
    };

    changesHistoryService.getHistoryById(data, (error, results) => {
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