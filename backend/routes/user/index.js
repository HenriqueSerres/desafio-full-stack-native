const express = require('express');
const userController = require('../../controllers/userController');
const validateUser = require('../../middlewares/userIsValid');
const validateToken = require('../../middlewares/tokenIsValid');

const userRouter = express.Router();

userRouter.get('/city', validateToken, userController.getAllUsersAtCity);
userRouter.get('/city/total', validateToken, userController.countAllUsersAtCity);
userRouter.get('/:id', validateToken, userController.getUserById);
userRouter.put('/:id', validateToken, userController.userUpDate);

module.exports = userRouter;