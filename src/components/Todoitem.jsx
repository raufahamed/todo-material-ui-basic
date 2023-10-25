import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';

export const Todoitem = ({todo,remove,toggle}) => {
    const labelId = `checkbox-list-label-${todo.id}`;

    let removetodos = ()=> remove(todo.id)

    return (
    <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="comments"onClick={removetodos} >
        <DeleteIcon/>
      </IconButton>
    }
    disablePadding
  >
    <ListItemButton role={undefined} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.completed}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
          onChange={toggle}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={todo.text} />
    </ListItemButton>
  </ListItem>
  )
}
