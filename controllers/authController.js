const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { JWT_SECRET } = process.env;

// Register a new user
exports.register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword, role });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Authenticate a user
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
