const express = require('express');
const userController = require('../../controllers/userController');
const validateToken = require('../../middlewares/tokenIsValid');
const userIvalid = require('../../middlewares/userIsValid');

const userRouter = express.Router();

userRouter.get('/city/:city', validateToken, userController.getAllUsersAtCity);
userRouter.get('/city', validateToken, userController.countAllUsersAtCity);
userRouter.get('/user/:id', validateToken, userController.getUserById);
userRouter.put('/user/:id', validateToken, userIvalid, userController.userUpDate);

module.exports = userRouter;