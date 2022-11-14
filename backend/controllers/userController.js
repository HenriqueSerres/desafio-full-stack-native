const userService = require('../services/userService');

const countAllUsersAtCity = async (req, res, next) => {
  try {
    const allUsers = await userService.countAllUsersAtCity();
    return res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

const getAllUsersAtCity = async (req, res, next) => {
  try {
    const { city } = req.params;
    const allUsers = await userService.getAllUsersAtCity(city);
    return res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const userUpDate = async (req, res, next) => {
  try {
    const { id } = req.params;    
    const { first_name, last_name, email, gender, company, city, title } = req.body;
    console.log({ first_name, last_name, email, gender, company, city, title });
    const user = await userService.userUpDate({ id, first_name, last_name, email, gender, company, city, title });
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  countAllUsersAtCity,
  getAllUsersAtCity,
  getUserById,
  userUpDate
};