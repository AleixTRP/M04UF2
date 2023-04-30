import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 class TaskForm extends React.Component
   {
  
          constructor(props){
             super(props);
                  this.state= {
 
                  task: ""
                  };
          }
          render(){
          return (
          <form>
         <p><TextField variant="standard" input tpye="text" value={this.state.task} onChange={event => {
 
          this.setState({
              task:event.target.value
 
              });
          }}
      placeholder="Escribe tu nueva tarea" sx = {{ margin: 3 }} />
          <Button variant="contained" type="button" sx = {{ position: 'relative', top: '23px', right: '20px'}}onClick={() =>{
           if (this.state.task.trim() === "") {
               this.setState({
                  task: ""
                  });
                  return;
             }
 
          this.props.onAddTask(this.state.task);
 
          this.setState({
              task:""
              });

          }}>Añadir</Button></p>
         </form>
 
 
         );
 
     }
 
  }
 
  export default TaskForm;












