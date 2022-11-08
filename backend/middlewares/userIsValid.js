const Joi = require('joi');

const USER = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string(),
  email: Joi.string().email().required(),
  gender: Joi.string().required(),
  company: Joi.string().required(),
  city: Joi.string().required(),
  title: Joi.string()
});

const validateUser = (req, _res, next) => {
  const { error } = USER.validate(req.body);

  if (error) {
    next({ status: 400, message: error.details[0].message });
  }
  next();
};

module.exports = validateUser;