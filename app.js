const express = require('express');
const app = express();

//routes
app.get('/', (req, res) => {
  res.send('Task Manager App');
});

//app.get('api/v1/tasks') - get all tasks
//app.post('api/v1/tasks') - create a new task
//app.get('api/v1/tasks/:id') - get a single task
//app.patch('api/v1/tasks/:id') - update a task
//app.delete('api/v1/tasks/:id') - delete a task

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
