import React, { useState } from 'react'
import { IconButton, InputAdornment, ListItem, TextField } from '@mui/material'
import { Create } from '@mui/icons-material'
const TodoForm = ({addtodo}) => {
const[text,settext] = useState('')
const handlechange = (e)=>{

    settext(e.target.value)
}

const handlesubmit =(evt) => {
 evt.preventDefault();
 addtodo(text)
 settext('')
}

return (
<ListItem>
<form onSubmit={handlesubmit}>
<TextField 
id="outlined-basic" 
label="Add Todo" 
variant="outlined" 
onChange={handlechange}
value={text}
InputProps={{

endAdornment  :(
    <InputAdornment position="end" type="submit">
    <IconButton
      aria-label="toggle password visibility"
      
      edge="end"
    >
    <Create/>
    </IconButton>
  </InputAdornment>
)  
}}

/>
</form>

</ListItem> 

)
}

export default TodoForm


