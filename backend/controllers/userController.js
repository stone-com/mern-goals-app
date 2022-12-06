// Register a new User
// POST /api/users
const registerUser = (req, res) => {
  res.json({ message: 'Register User' });
};

// Authenticate a user
// POST /api/users/login
const loginUser = (req, res) => {
  res.json({ message: 'Login User' });
};

// Get user Data
// GET /api/users/me
const getMe = (req, res) => {
  res.json({ message: 'User data' });
};

module.exports = { registerUser, loginUser, getMe };
