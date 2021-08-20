//#region IMPORTS AND VARS
const express = require('../EFOOD - BACKEND - API/Zip/node_modules/express');
const app = express();

const morgan = require('../EFOOD - BACKEND - API/Zip/node_modules/morgan');
const bodyParser = require('../EFOOD - BACKEND - API/Zip/node_modules/body-parser');

const rotaPedidos = require('./Models/Pedido-Module/routers/pedido-router-routers');
const rotaLogins = require('./Models/Login-Module/routers/login-router-routers');
//#endregion

//#region USINGS
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); // apenas dados simples
app.use(bodyParser.json()); // json de entrada no body
//#endregion

//#region VALIDATORS
app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header(
        'Acces-Control-Allow-Header',
        'Origin, X-Requrested-With, Content-Type, Accept, Authorization'
     );

    if (req.method === 'OPTIONS'){
        res.header('Acces-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE GET');
        return res.status(200).send({});
    }

    next();
});
//#endregion

//#region ROUTES
app.use('/pedidos', rotaPedidos);
app.use('/logins', rotaLogins);
//#endregion



// QUANDO NÃO ENCONTRA ROTA, ENTRA AQUI 
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro : {
            mensagem: error.message
        }
    })
});

module.exports = app;