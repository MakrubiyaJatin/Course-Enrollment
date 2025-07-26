const { User, Course, Enrollment } = require('../models');
const validateRules = require('../rules');

exports.enroll = async (req, res) => {
  try {
    const { user_id, course_id } = req.body;
    const user = await User.findByPk(user_id);
    const course = await Course.findByPk(course_id);

    if (!user || !course) return res.status(404).json({ error: 'User or Course not found' });

    await validateRules(user, course);

    await Enrollment.create({ user_id, course_id, enrolled_at: new Date() });
    res.json({ message: 'Enrollment successful' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserCourses = async (req, res) => {
  const userId = req.params.id;
  const enrollments = await Enrollment.findAll({
    where: { user_id: userId },
    include: [{ model: Course, include: [{ model: User, as: 'instructor', attributes: ['name'] }] }]
  });

  const result = enrollments.map(e => ({
    title: e.Course.title,
    instructor: e.Course.instructor.name
  }));

  res.json(result);
};

exports.getCourseStudents = async (req, res) => {
  const courseId = req.params.id;
  const enrollments = await Enrollment.findAll({
    where: { course_id: courseId },
    include: [{ model: User, attributes: ['name', 'email'] }]
  });

  const result = enrollments.map(e => e.User);
  res.json(result);
};
