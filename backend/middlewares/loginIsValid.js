const Joi = require('joi');

const LOGIN = Joi.object({
  first_name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
});

const loginIsValid = (req, _res, next) => {
  const { error } = LOGIN.validate(req.body);
  
  if (error) {
    next({ status: 400, message: error.details[0].message });
  }
  next();
};

module.exports = loginIsValid;