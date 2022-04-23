import React from 'react'
import { useCollection } from "../../hooks/useCollection"

//styles

import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

//components
import HomeIcon from "../atoms/icons/HomeIcon"

function OnlineUsers() {
  const { documents, isPending, error } = useCollection("users")

  return (
    <>
     <Typography component="h2" variant="h5">Housemates</Typography>
      <List>
      {isPending && <Typography>...Loading</Typography>}
      {error && <Typography variant="body1" component="span">{error}</Typography>}
      {documents && documents.map(user => (
        <ListItem key={user.id} sx={{display:"flex"}}>
          <Grid container sx={{alignItems:"center"}}>
            <Grid item xs={3}>
              {user.online && <HomeIcon color="success"/>}
            </Grid>
            <Grid item xs={5}>
              <ListItemText>{user.displayName}</ListItemText>
            </Grid>
            <Grid item xs={4}>
              <ListItemAvatar>
                <Avatar src={user.photoURL} />    
              </ListItemAvatar>
            </Grid>
          </Grid>
          
        </ListItem>
      ))}
      </List>
    </>
  )
}

export default OnlineUsers