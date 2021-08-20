const mysql = require('../../..//Contexto/requestCenter/mysql').pool;

//RETORNA TODOS OS PEDIDOS
exports.getAllPedidos = ((req, res, next) => {
    mysql.getConnection((error, conn)=>  {
        conn.query(
            'SELECT * FROM pedidos',
            (error, Pedidos, field) => {
                conn.release();

                if (error) {
                    res.status(500).send({
                        error: error,
                        Usuario: null
                    });
                }

                res.status(200).send({
                   Pedidos,
                });
            }
        )
    }); 
});