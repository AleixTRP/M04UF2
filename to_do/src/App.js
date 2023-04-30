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
 
              this.state =
              {
                  tasklist: []
                  };
 
         }
 
          componentDidMount () {
              fetch('http://10.40.1.19:8080')
              .then(response => response.json())
              .then(data => this.createTaskList(data));
          }
 
          createTaskList = (data) =>
          {
              if(data.length <= 0)
              {
              return;
 
             }
             for(let i = 0; i < data.length; i++)
              {
                      this.state.tasklist.push(data[i].item);
              }
 
                  this.setState({
                  tasklist: this.state.tasklist
                  });
          }
 
      addTask = (task) => {
      console.log(task);
 
          let item = {item: task};
 
          fetch('http://10.40.1.19:8080',{
              method: "POST",
              body:JSON.stringify(item)
         });
 
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
                                      background: 'linear-gradient(#801ED9, #B86AFF, #DDB7FF)'
                                  }}
                                  >
                              <Paper elevation={3} sx={{ padding: '1rem' }}>
                              <Typography variant="h2" sx={{ backgroundColor: '#E4E4E4', padding: '0.5rem' }}>
                              ToDo-App
                              </Typography>
                              <TaskForm onAddTask={this.addTask}/>
                              <TaskList list={this.state.tasklist} onDeleteTask={this.deleteTask} />
                             <Typography sx={{ fontSize: '1.5rem', margin: '1rem 0' }}>
                             Tienes <strong style={{ color: '#F7FF00' }}>{this.state.tasklist.length}</strong> tareas pendientes
                             </Typography>
 
                          </Paper>
             </Box>
         );
     }
 }






export default App;
