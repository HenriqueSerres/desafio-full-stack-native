const userService = require('../services/userService');

const registerUser = async (req, res, next) => {
  try {
    const bodyContent = req.body;
    const newUser = await userService.registerUserAdm(bodyContent);
    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (_req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const findUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await userService.findUser(id);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const removeUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await userService.removeUser(id);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  findUser,
  removeUser,
  registerUser,
};