import React from 'react'

//styles

import { Avatar, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from '@mui/material'

//components
import HomeIcon from "../atoms/icons/HomeIcon"

function OnlineUsers() {
  return (
    <>
     <Typography component="h2" variant="h5">All Users</Typography>
      <List>
      {["EdF", "EdY", "Liam", "Miho", "Nuala", "Sophie"].map(user => (
        <ListItem key={user} >
          <ListItemIcon>
            <HomeIcon color="success"/>
          </ListItemIcon>
          <ListItemText>{user}</ListItemText>
          <ListItemAvatar>
            <Avatar />    
          </ListItemAvatar>
        </ListItem>
      ))}
      </List>
    </>
  )
}

export default OnlineUsers