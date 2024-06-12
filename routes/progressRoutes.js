const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');

// Retrieve progress for a specific user
router.get('/:userId', progressController.getUserProgress);

// Update progress for a specific user
router.post('/:userId', progressController.updateUserProgress);

module.exports = router;
