const userService = require('../services/userService');
const generateToken = require('../utils/generateToken');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userService.createUser(req.body);
    console.log(newUser);
    if (newUser) {
      const token = generateToken(name, email, password);
      return res.status(201).json({ token });
    }    
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.user.data;
    await userService.deleteUserById(id);
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
};