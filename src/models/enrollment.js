'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // An enrollment belongs to a user
      Enrollment.belongsTo(models.User, { foreignKey: 'user_id' });

      // An enrollment belongs to a course
      Enrollment.belongsTo(models.Course, { foreignKey: 'course_id' });
    }
  }
  Enrollment.init({
    user_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    enrolled_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Enrollment',
  });
  return Enrollment;
};