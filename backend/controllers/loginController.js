const loginService = require('../services/loginService');
const generateJWT = require('../utils/generateToken');

const loginUser = async (req, res, next) => {
  try {
    const { first_name, email } = req.body;    
    const result = await loginService.loginUser(first_name, email);
    const token = generateJWT(result)
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
};