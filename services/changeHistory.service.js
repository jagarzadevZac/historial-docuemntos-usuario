const db = require("../config/db.config");

exports.register = (data, callback) => {
    db.query(
        `INSERT INTO historial_cambios (documentoId,fecha,fecha_server,UsuarioId) VALUES (?, ?, ?, ?)`,
        [data.documentoId, data.fecha,new Date() ,data.UsuarioId],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Registration successful`);
        }
    );
};


exports.getHistoryById = (data, callback) => {
    db.query(
        `SELECT u.nombre ,d.documento , h.fecha FROM historial_cambios h
        LEFT JOIN documentos d ON d.id = h.documentoId 
        LEFT JOIN  usuarios u ON u.id = h.UsuarioId
        WHERE h.documentoId = ?`,
        [data.id],
        (error, results, fields) => {
            if (error) {
            return callback(error)
            }
            return callback(null, results)
        },
    )
}