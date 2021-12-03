const usersService = require("../services/users.service");

exports.register = (req, res, next) => {
    // Validation area
    const data = {
        nombre: req.body.nombre,
        emailId: req.body.emailId,
        password: req.body.password,
        ultimo_inicio_sesion: req.body.ultimo_inicio_sesion,
        tipo_usuario: req.body.tipo_usuario
    };

    usersService.register(data, (error, results) => {
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


exports.login = (req, res, next) => {
    // Validation area
    const data = {
        emailId: req.body.emailId,
        password: req.body.password,
    };

    usersService.login(data, (error, results) => {
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

exports.updateUser = (req, res, next) => {
    const data = {
        userId: req.body.id,
        inicio_sesion: req.body.ultimo_inicio_sesion,
    };
    usersService.updateUser(data, (error, results) => {
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


