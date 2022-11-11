const { User } = require('../models');
const handleError = require('../utils/handleError');

const countAllUsersAtCity = async () => {
  const allUsers = await User.findAll();
  const allCities = allUsers.map((user) => user.city)
  const cities = [...new Set(allCities)]
  const totalUsersAtCity =  cities.map(async (city) => {
    const { count } = await User.findAndCountAll({
      where: {
        city
      },
    });
    const totalUsers = { city, customers_total: count }
    return totalUsers;
  })
  
  return Promise.all(totalUsersAtCity);
  
};

const getAllUsersAtCity = async (city) => {
  const allUsers = await User.findAll({ where: { city } });
  
  return allUsers;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw handleError('404', 'User does not exist');
  return user;
};

const userUpDate = async ({ id, first_name, last_name, email, gender, company, city, title }) => {
  const user = await User.findOne({ where: { id } });
  if (user.dataValues.id !== Number(id)) {
    throw handleError('401', 'Unauthorized user');
  }
  await User.update(
    { first_name, last_name, email, gender, company, city, title },
    { where: { id } },
  );
    const editedUser = await getUserById(id);
    return editedUser;
};

module.exports = {
  countAllUsersAtCity,
  getAllUsersAtCity,
  getUserById,
  userUpDate
};