import React from 'react';

import TaskItem from './TaskItem';
import List from '@mui/material/List';

class TaskList extends React.Component
{
	constructor (props){
		super(props);

			this.state = {
				items: this.props.list
			};
		}
		render(){
		console.log("render");
		const tasks = this.state.items.map(task => {
		return (
			<TaskItem text={task} onDeleteTask= {this.props.onDeleteTask} />
			);
		});
	return (
		<List>
		{tasks}
		</List>


		);

	}
}


export default TaskList;












