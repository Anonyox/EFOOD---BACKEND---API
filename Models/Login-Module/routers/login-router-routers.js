const express = require('../../../Zip/node_modules/express');
const router = express.Router();
const LoginController = require('../controllers/login-controller-controllers');

//ROTAS
router.get('/user/:nome_user/:senha_user', LoginController.getUserSearch);

module.exports = router;