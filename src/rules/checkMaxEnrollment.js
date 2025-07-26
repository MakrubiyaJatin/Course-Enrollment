const { Enrollment } = require('../models');

module.exports = async (user, course) => {
  const enrolledMaxCount = process.env.ENROLLED_MAX_COUNT || 50;
  const enrolledCount = await Enrollment.count({
    where: { course_id: course.id }
  });

  if (enrolledCount >= enrolledMaxCount) {
    throw new Error('Course has reached maximum student limit (50).');
  }
};
