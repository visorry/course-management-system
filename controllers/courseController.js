const { Course } = require('../models');

// Retrieve all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Retrieve a specific course
exports.getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new course (for teachers only)
exports.createCourse = async (req, res) => {
    try {
        // Extract course data from request body
        const { name, description, teacherId } = req.body;
        // Create new course
        const course = await Course.create({ name, description, teacherId });
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a course (for teachers only)
exports.updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        await course.update({ name, description });
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a course (for teachers only)
exports.deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByPk(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        await course.destroy();
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
