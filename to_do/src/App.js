import React from 'react';
import './to_do.css';

import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Title from './Title';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

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
					display:'flex',
					justifyContent:'center',
					alignItems:'center',
					height:'100%',
					background:'linear-gradient(#e66465, #9198e5)',

					}}
				>
		<Paper elevation={3}>
		<Title text="ToDo-App" />
		<TaskForm onAddTask={this.addTask}  />
		<TaskList list={this.state.tasklist} onDeleteTask = {this.deleteTask}/>
		<p>Tienes<strong> {this.state.tasklist.length} </strong>tareas pendientes</p>
		</Paper>
		</Box>
  	);
	}
}

export default App;
