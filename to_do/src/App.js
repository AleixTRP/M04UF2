import React from 'react';
import './to_do.css';

import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Title from './Title';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
//import './App.css';

class App extends React.Component {
	
	constructor(props){
		super(props);

			this.state = {
				tasklist: ["Lista", "ZZZ"]
				};

		}

	addTask = (task) => {
	console.log(task);

		this.state.tasklist.unshift(task);

		this.setState({
			tasklist: this.state.tasklist
		});
	
	}

	deleteTask = (task_num) =>
	{
		this.state.tasklist.splice(task_num,1);

		this.setState({
			tasklist: this.state.tasklist

			});

	}

	render() {
	return (
    <Box
						sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									height: '100%',															
									background: 'linear-gradient(#e66465, #9198e5)'
								}}
								>																															
							<Paper elevation={3} sx={{ padding: '1rem' }}>
							<Typography variant="h2" sx={{ backgroundColor: '#fff', padding: '0.5rem' }}>
							ToDo-App
							</Typography>
							<TaskForm onAddTask={this.addTask}/>
							<TaskList list={this.state.tasklist} onDeleteTask={this.deleteTask} />
							<Typography sx={{ fontSize: '1.5rem', margin: '1rem 0' }}>
							Tienes <strong style={{ color: '#e66465' }}>{this.state.tasklist.length}</strong> tareas pendientes
							</Typography>
						</Paper>	
			</Box>
		);
	}
}






export default App;
