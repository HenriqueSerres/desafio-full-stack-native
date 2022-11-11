const loginService = require('../services/loginService');

const loginUser = async (req, res, next) => {
  try {
    const { first_name, email } = req.body;    
    const result = await loginService.loginUser(first_name, email);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
};