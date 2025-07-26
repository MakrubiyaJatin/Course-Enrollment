const { Course } = require('../models');

exports.createCourse = async (req, res) => {
  try {
    const { title, domain, is_public, instructor_id } = req.body;
    const course = await Course.create({ title, domain, is_public, instructor_id });
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
