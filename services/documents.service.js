const db = require("../config/db.config");

exports.register = (data, callback) => {
  db.query(
    `INSERT INTO documentos (titulo,documento,UsuarioId,modificado_por,fecha_creacion) VALUES (?, ?, ?, ?, ?)`,
    [data.titulo, data.documento, data.UsuarioId ,data.modificado_por ,new Date()],
    (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results);
    }
  );
};

exports.update = (data, callback) => {
    
    db.query(
      `UPDATE  documentos SET titulo = "${data.titulo }",
                            documento = "${data.documento}",
                            UsuarioId = ${data.UsuarioId},
                            modificado_por = ${data.modificado_por},
                            fecha_modificacion = ?
        WHERE  id = ? `,
        [new Date() , data.id],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, `Update successful`);
        }
    );
};

exports.getAllDocuments = (data, callback) => {
    db.query(
      `SELECT id,titulo,documento,UsuarioId,modificado_por FROM  documentos`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        }
        return callback(null, results)
      },
    )
}

exports.getDocumentById = (data, callback) => {
    db.query(
      `SELECT titulo,documento,UsuarioId,modificado_por FROM  documentos where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error)
        }
        return callback(null, results)
      },
    )
}

exports.getDocumentByTitle = (data, callback) => {
    console.log(data);
    db.query(
        `SELECT id,titulo,documento,UsuarioId,modificado_por FROM  documentos where titulo = '${data.titulo}'  `,
        [],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results)
        },
    )
}

exports.deleteDocument = (data, callback) => {
    db.query(
        `DELETE FROM documentos WHERE id = ?`,
        [data.id],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            if (results.affectedRows === 1) {
                return callback(null, `Document Deleted Successfully`);
            } else {
                return callback(new Error("Invalid post"));
            }
        }
    );
};
