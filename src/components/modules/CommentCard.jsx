import React from 'react'
import formatDistanceToNow from "date-fns/formatDistanceToNow"


//styles
import { Avatar, Box, List, ListItemAvatar, ListItemText, ListItem, Paper, Stack, Typography } from "@mui/material"

//components
import EditButton from "../atoms/buttons/EditButton"
import DeleteButton from "../atoms/buttons/DeleteButton"

function CommentCard(props) {

  const { document, onClick } = props

  return (
    <>
     <List>
      {document.comments.map(comment => (
      <ListItem key={comment.id}>
        <Paper
          elevation={3}
          sx={{height:"20%", width: "100%"}}
        >
          <Stack sx={{pl:1, width:"100%"}}>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>  
              <ListItemAvatar>
                <Avatar sx={{width: 25, height: 25}}/>
              </ListItemAvatar>
              <Box sx={{display:"flex"}}>
                <Box>
                  <EditButton onClick={onClick}/>
                </Box>
                <Box>
                  <DeleteButton/>
                </Box>
              </Box>
            </Box>
            <ListItemText
              secondary={
                <>
                  <Typography variant="body2" component="span">{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</Typography>
                </>
              }
              primary={
                <>
                  <Typography variant="body1" component="span">{comment.content}</Typography>
                </>
              }
            />
          </Stack>
        </Paper>
      </ListItem>
      ))} 
     </List>
    </>
  )
}

export default CommentCard