import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import TaskForm from './TaskForm';
import TaskList from './TaskList';

import './TODO.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasklistIds: [],
      tasklist: [],
      tasklistTime: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('http://192.168.1.121:7070', { method: 'GET' })
      .then(response => response.json())
      .then(data => this.createTasklist(data));
  };

  createTasklist = (list) => {
    this.setState({
      tasklistIds: list.map(item => item._id),
      tasklist: list.map(item => item.tasks),
      tasklistTime: list.map(item => item.time),
    });
  };

  addTask = (task) => {
    fetch('http://192.168.1.121:7070', {
      method: 'POST',
      body: JSON.stringify({ task: task, remove: false }),
    })
      .then(response => response.json())
      .then(data => this.fetchData());
  };

  deleteTask = (task) => {
    fetch('http://192.168.1.121:7070', {
      method: 'POST',
      body: JSON.stringify({ task: task, remove: true }),
    })
      .then(response => response.json())
      .then(data => this.fetchData());
  };

  render() {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '150vh',
          background: 'linear-gradient(#801ED9, #B86A00, #DDB7FF)',
        }}
      >
        <Paper elevation={3} sx={{ padding: '1rem' }}>
          <Typography variant="h2" sx={{ backgroundColor: '#00112', padding: '0.5rem' }}>
            To_Do
          </Typography>
          <TaskForm onAddTask={this.addTask} />
          <TaskList
            list={this.state.tasklist}
            listTime={this.state.tasklistTime}
            onDeleteTask={this.deleteTask}
          />
          <Typography sx={{ fontSize: '1.7rem', margin: '1rem 0' }}>
            Tienes <strong style={{ color: '#F7FF00' }}>{this.state.tasklist.length}</strong> tareas pendientes
          </Typography>
        </Paper>
      </Box>
    );
  }
}

export default App;
