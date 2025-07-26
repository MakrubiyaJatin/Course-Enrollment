'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // A user can enroll in many courses
      User.hasMany(models.Enrollment, { foreignKey: 'user_id' });

      // A user can be an instructor for many courses
      User.hasMany(models.Course, { foreignKey: 'instructor_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    domain: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};