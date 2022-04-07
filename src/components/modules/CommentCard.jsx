import React from 'react'

//styles
import { Avatar, Box, ListItemAvatar, ListItemText, ListItem, Paper } from "@mui/material"

//components
import EditButton from "../atoms/buttons/EditButton"
import DeleteButton from "../atoms/buttons/DeleteButton"

function CommentCard(props) {

  const { onClick } = props

  return (
    <>
      <ListItem>
        <Paper
          elevation={3}
          sx={{height:"20%", width: "100%"}}
        >
          <Box sx={{display:"flex", justifyContext:"space-between", width:"100%", height:"30%"}}>
            <Box sx={{pl: 1, pt:1, width: "100%"}}>
              <ListItemAvatar>
                <Avatar sx={{width: 25, height: 25}}/>
              </ListItemAvatar>
            </Box>
            <Box sx={{display:"flex"}}>
              <Box>
                <EditButton onClick={onClick}/>
              </Box>
              <Box>
                <DeleteButton/>
              </Box>
            </Box>
          </Box>
          <Box sx={{p:1, height: "70%"}}>
            <ListItemText>
              aaaaaaaaaaaaaaaaaaaaa
            </ListItemText>
          </Box>
        </Paper>
      </ListItem>
      
    </>
  )
}

export default CommentCard