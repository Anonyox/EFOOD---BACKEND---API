const mysql = require('../../..//Contexto/requestCenter/mysql').pool;

//RETORNA USUARIO PESQUISADO
exports.getUserSearch = ((req, res, next) => {
    mysql.getConnection((error, conn)=>  {
        conn.query(
            'SELECT * FROM logins WHERE nome_user = ? AND senha_user = ?',
            [req.params.nome_user, req.params.senha_user],
            (error, Usuarios, field) => {
                conn.release();

                if (error) {
                    res.status(500).send({
                        error: error,
                        Usuario: null
                    });
                }

                res.status(200).send({
                   Usuarios,
                });
            }
        )
    }); 




});
