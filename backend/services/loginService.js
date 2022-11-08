const { User } = require('../models');
const handleError = require('../utils/handleError');

const loginUser = async (first_name, email) => {
  if (!email || !first_name) {
    throw handleError('400', 'Some required fields are missing');
  }
  const user = await User.findOne({ where: { email } });
  if (!user || user.first_name !== first_name) {
    throw handleError('400', 'Invalid fields');
  }
  const userData = user.dataValues;
  const { ...tokenHeader } = userData;
  return tokenHeader;
};

module.exports = {
  loginUser,
};