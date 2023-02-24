import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Title from './Title';
import './App.css';

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

	render() {
	return (
    <main className="App">
		<Title text="ToDo-App" />
		<TaskForm onAddTask={this.addTask}  />
		<TaskList list={this.state.tasklist} />
		<p>Tienes<strong> {this.state.tasklist.length} </strong>tareas pendientes</p>
		</main>
  	);
	}
}

export default App;
