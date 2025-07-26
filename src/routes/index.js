const express = require('express');
const router = express.Router();
const controller = require('../controllers/enrollmentController');
const userController = require('../controllers/userController');
const courseController = require('../controllers/courseController');

router.post('/api/enroll', controller.enroll);
router.get('/api/user/:id/courses', controller.getUserCourses);
router.get('/api/course/:id/students', controller.getCourseStudents);
router.post('/api/users', userController.createUser);
router.post('/api/courses', courseController.createCourse);

module.exports = router;
