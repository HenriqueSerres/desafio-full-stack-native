const User = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
		first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
		email: DataTypes.STRING,
    gender: DataTypes.STRING,
    company: DataTypes.STRING,
		city: DataTypes.STRING,
    title: DataTypes.STRING,
	}, {
		timestamps: false,
    tableName: 'users'
	});

	return User;
};

module.exports = User;
