const getAllTasks = (req, res) => {
  res.send('Get all tasks');
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ action: 'getTask', id: req.params.id });
};

const updateTask = (req, res) => {
  res.json({ action: 'updateTask', id: req.params.id });
};

const deleteTask = (req, res) => {
  res.json({ action: 'deleteTask', id: req.params.id });
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
