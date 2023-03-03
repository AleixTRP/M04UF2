import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

class TaskItem extends React.Component

{
	constructor(props)
	{
		super(props);
		  this.state = 
			{
				open:false
				};
		}
			openDialog = () =>
			{
				this.setState ({
					open:true
				});
			}

			closeDialog = () =>
			{
				this.setState({
					open:false
					
					});
				}

		removeTask = () => 
		{
				this.props.onDeleteTask(this.props.num_task);
				this.closeDialog();
		}
		 
		render() 
		{
		return (
		
				<ListItem>
					<ListItemText primary={this.props.text} />
						<Tooltip onClick={this.openDialog} title="Borrar">
							<IconButton>
								<DeleteIcon />
									</IconButton>
								</Tooltip>
							<Dialog open={this.state.open}>
						<DialogContent>
							<DialogContentText>
								¿Quieres Borrar?
							</DialogContentText>
					</DialogContent>
						<DialogActions>
							<Button color="secondary" onClick={this.closeDialog} >Borrar</Button>
							<Button variant="contained" color="error" onClick={this.removeTask}>Descartar</Button>
					</DialogActions>
				</Dialog>
			</ListItem>
			);
		}
	}


export default TaskItem;












