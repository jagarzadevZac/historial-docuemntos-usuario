const db = require("../config/db.config");

exports.register = (data, callback) => {
  db.query(
    `INSERT INTO usuarios (nombre, emailId, password,ultimo_inicio_sesion,tipo_usuario) VALUES (?, ?, ?, ?, ?)`,
    [data.nombre, data.emailId, data.password ,data.ultimo_inicio_sesion ,data.tipo_usuario],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, `Registration successful`);
    }
  );
};


exports.login = (data, callback) => {
    db.query(
      `SELECT id,nombre,emailId FROM usuarios WHERE emailId = ? AND password = ?`,
      [data.emailId, data.password],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        if (results.length > 0) {
          return callback(null, results);
        } else {
          return callback("Invalid credentials");
        }
      }
    );
};

exports.updateUser = (data, callback) => {
    db.query(
      `UPDATE usuarios SET ultimo_inicio_sesion  = "${data.inicio_sesion}" WHERE id = ?`,
      [data.userId],
      (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        if (results.affectedRows === 1) {
            return callback(null, `Update Successful`);
        } else {
            return callback(new Error("Invalid post"));
        }
      }
    );
};
