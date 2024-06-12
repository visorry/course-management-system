const { Progress } = require('../models');

// Retrieve progress for a specific user
exports.getUserProgress = async (req, res) => {
    try {
        const { userId } = req.params;
        const userProgress = await Progress.findAll({ where: { userId } });
        res.json(userProgress);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update progress for a specific user
exports.updateUserProgress = async (req, res) => {
    try {
        const { userId } = req.params;
        const { courseId, completedLessons } = req.body;
        // Check if progress entry already exists
        let userProgress = await Progress.findOne({ where: { userId, courseId } });
        if (!userProgress) {
            // Create new progress entry if it doesn't exist
            userProgress = await Progress.create({ userId, courseId, completedLessons });
        } else {
            // Update existing progress entry
            await userProgress.update({ completedLessons });
        }
        res.json(userProgress);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
