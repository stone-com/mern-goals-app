// Get goals
// GET /api/goals
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals!' });
};

// Set a Goal
// POST /api/goals
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field!');
  }
  res.status(200).json({ message: 'Set goal!' });
};

// Update a goal
// GET /api/goals/:id
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// Delete a goal
// GET /api/goals/:id
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};