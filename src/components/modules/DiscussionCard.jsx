import React from 'react'

//styles
import { Avatar, Box,  Paper, Typography } from "@mui/material"

//components
import EditButton from "../atoms/buttons/EditButton"
import DeleteButton from "../atoms/buttons/DeleteButton"

function DiscussionCard(props) {

  const { onClick, document } = props

  return (
    <>
      <Paper
        elevation={3}
        sx={{height:"100%"}}
      >
        <Box sx={{display:"flex", justifyContext:"space-between", width:"100%", height:"30%"}}>
          <Box sx={{pl: 1, pt:1, width: "100%"}}>
            <Avatar sx={{width: 30, height: 30}}/>
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
          <Typography>
            {document.detail}
          </Typography>
        </Box>
      </Paper>
    </>
  )
}

export default DiscussionCard