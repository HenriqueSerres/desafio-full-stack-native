const express = require('express');
const userController = require('../../controllers/userController');
const validateUser = require('../../middlewares/userIsValid');
const validateToken = require('../../middlewares/tokenIsValid');

const userRouter = express.Router();

userRouter.get('/', validateToken, userController.getAllUsers);
userRouter.get('/city', validateToken, userController.getAllUsersAtCity);
userRouter.get('/city/total', validateToken, userController.countAllUsersAtCity);
userRouter.post('/', validateUser, userController.createUser);
userRouter.delete('/:id', validateToken, userController.deleteUserById);
userRouter.get('/:id', validateToken, userController.getUserById);
userRouter.put('/:id', validateToken, userController.userUpDate);

module.exports = userRouter;