const express = require('express');
const loginController = require('../../controllers/loginController');
const validateLogin = require('../../middlewares/loginIsValid')
const loginRouter = express.Router();

loginRouter.post('/', validateLogin, loginController.loginUser);

module.exports = loginRouter;