import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import AnnouncementIcon from '@mui/icons-material/Announcement';

import './TODO.css';


class App extends React.Component {
  
  constructor(props) {
  	super(props);
	this.state = {
		tasklistIds: [],
		tasklist: [],
		tasklistTime: []
	};
  }

  componentDidMount () {
	
	this.fetchData();
  }

  fetchData = () => {
	fetch('http://192.168.1.37:8080', { method: "GET" })
		.then(response => response.json())
        .then(data => this.createTasklist(data));
  }
  
  createTasklist = (list) => {

  	this.state.tasklistIds = [];
	this.state.tasklist = [];
	this.state.tasklistTime = [];
	
	if (list.length <= 0) {
		return;
	}

	for (let i = 0; i < list.length; i++) {
		this.state.tasklistIds.unshift(list[i]._id);
		this.state.tasklist.unshift(list[i].tasks);
		this.state.tasklistTime.unshift(list[i].time);
	}
	
	this.setState ({
		tasklistIds: this.state.tasklistIds,
		tasklist: this.state.tasklist,
		taskListTime: this.state.tasklistTime
	});
  }

  addTask = (task) => {
	
	fetch('http://192.168.1.37:8080', {
		method: "POST",
		body: '{"task":"' + task + '", "remove": "false"}'
	})
		.then(response => response.json())
		.then(data => this.fetchData());
  }

  deleteTask = (task) => {
	
	console.log(task);
	fetch('http://192.168.1.37:8080', {
		method: "POST",
		body: '{"task":"' + task + '", "remove": "true"}'
	})
		.then(response => response.json)
		.then(data => this.fetchData());
  }

   render() {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '150vh',
                    background: 'linear-gradient(#801ED9, #B86A00, #DDB7FF)'
                }}
            >
                <Paper elevation={3} sx={{ padding: '1rem' }}>
                    <Typography variant="h2" sx={{ backgroundColor: '#00112', padding: '0.5rem' }}>
                        To_Do
				<TaskForm onAddTask={this.addTask} />
				<TaskList list={this.state.tasklist} listTime={this.state.tasklistTime} onDeleteTask={this.deleteTask}/>
              <Typography sx={{ fontSize: '1.7rem', margin: '1rem 0' }}>
                        Tienes <strong style={{ color: '#F7FF00' }}>{this.state.tasklist.length}</strong> tareas pendientes
                    </Typography>
                </Paper>
            </Box>
        );
    }
}

export default App;
