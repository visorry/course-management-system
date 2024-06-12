const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { authenticateUser, authorizeTeacher } = require('../middleware/authMiddleware');

// Retrieve all courses
router.get('/', authenticateUser, courseController.getAllCourses);

// Create a new course (for teachers only)
router.post('/', authenticateUser, authorizeTeacher, courseController.createCourse);

// Update a course (for teachers only)
router.put('/:id', authenticateUser, authorizeTeacher, courseController.updateCourse);

// Delete a course (for teachers only)
router.delete('/:id', authenticateUser, authorizeTeacher, courseController.deleteCourse);

module.exports = router;
