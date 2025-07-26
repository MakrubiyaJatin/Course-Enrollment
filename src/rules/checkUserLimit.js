const { Enrollment } = require('../models');

module.exports = async (user, course) => {
  const userEnrollmentMaxCount = process.env.USER_ENROLLMENT_MAX_COUNT || 5;
  const userEnrollments = await Enrollment.count({
    where: { user_id: user.id }
  });

  if (userEnrollments >= 5) {
    throw new Error('User is already enrolled in 5 courses.');
  }
};
