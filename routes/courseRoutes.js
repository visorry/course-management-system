const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Retrieve all courses
router.get('/', courseController.getAllCourses);

// Retrieve a specific course
router.get('/:id', courseController.getCourseById);

// Create a new course (for teachers only)
router.post('/', courseController.createCourse);

// Update a course (for teachers only)
router.put('/:id', courseController.updateCourse);

// Delete a course (for teachers only)
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
