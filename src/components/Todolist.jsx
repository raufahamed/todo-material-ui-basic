import React, { useEffect } from 'react'
import List from '@mui/material/List';
import { useState } from 'react';
import { Todoitem } from './Todoitem';
import TodoForm from './TodoForm';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


// const initialtodos = [
//     {id:1,text:"walk the dog",completed:false},
//     {id:2,text:"walk the cat",completed:false},
//     {id:3,text:"walk the fish",completed:false},
//     {id:4,text:"walk the chickens",completed:false}
// ]

const getInitialdata = ()=>{
   const data =  JSON.parse(localStorage.getItem('todos'));
   if(!data) return [];
   return data;
}
const Todolist = () => {
    const[todos,settodos] = useState(getInitialdata)
  
useEffect(()=>{

localStorage.setItem('todos',JSON.stringify((todos)))

},[todos])

    const removeTodo = (id) =>{

        settodos(prev => prev.filter(t => t.id !==id))
    }

    const toggleTodo = (id)=>{
         settodos(prev =>{
            return prev.map(todo =>{
                if(todo.id === id){
                    return {...todo,completed: !todo.completed}
                }else{
                    return todo;
                }
            })
        })       
    }

const addtodos = (text) => {

    settodos((prev) =>{

        return [...prev ,{text:text,id:crypto.randomUUID(), completed:false}];
    })
}
    return (
    
   <Box sx={

    {display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    m:"3" 
}
   }>
    <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
         Todos
          </Typography>
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {todos.map((todo) => (
        <Todoitem 
        todo={todo} 
        key={todo.id} 
        remove = {removeTodo}
        toggle = {()=> toggleTodo(todo.id)}
        />

   ))}
  <TodoForm addtodo = {addtodos} />
  </List>
   </Box>
  )
}

export default Todolist



