const express = require('../../../Zip/node_modules/express');
const router = express.Router();
const PedidoController = require('../controllers/pedido-controller-controllers');

//ROTAS
router.get('/', PedidoController.getAllPedidos);

module.exports = router;