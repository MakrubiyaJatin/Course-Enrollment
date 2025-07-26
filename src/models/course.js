'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // A course belongs to one instructor
      Course.belongsTo(models.User, {
        foreignKey: 'instructor_id',
        as: 'instructor',
      });

      // A course can have many enrollments
      Course.hasMany(models.Enrollment, { foreignKey: 'course_id' });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    domain: DataTypes.STRING,
    is_public: DataTypes.BOOLEAN,
    instructor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};