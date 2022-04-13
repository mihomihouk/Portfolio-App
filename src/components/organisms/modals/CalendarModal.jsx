import React from 'react'

//styles
import { Grid, TextField, Box, Stack } from "@mui/material"
import Modal from '@mui/material/Modal'
import NotesIcon from '@mui/icons-material/Notes'
import AccessTimeIcon from '@mui/icons-material/AccessTime'



//components
import Title from "../../atoms/inputs/Title"
import CloseButton from "../../atoms/buttons/CloseButton"
import AddButton from "../../atoms/buttons/AddButton"
import EventTime from "../../modules/EventTime"
import TagSelector from "../../modules/TagSelector"

function CalendarModal(props) {

  const { open, handleClose } = props

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Stack spacing={1.5} sx={{
          position: "absolute",
          top:"50%", left:"50%",
          transform:"translate(-50%,-50%)",
          width:"40%",
          height:"60%",
          bgcolor: "background.paper",
          border: "2px solid #000", 
          boxShadow: 24, 
          p:"3%",
          }}>
          <Box sx={{display:"flex",justifyContent:"flex-end"}}>
            <CloseButton/>
          </Box>
            <Box >
              <Title/>
            </Box>
            <Box fullWidth sx={{display: "flex",alignItems: "center"}}>
              <Grid container sx={{alignItems: "center"}}>
                <Grid item xs={1} >
                  <AccessTimeIcon/>
                </Grid>
                <Grid item sx={{width:"100%"}} xs={11} >
                  <EventTime />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: "flex",}} >
              <Grid container sx={{alignItems: "center"}}>
                <Grid item xs={1} >
                  <NotesIcon/>
                </Grid>
                <Grid item xs={11} >
                  <TextField 
                    label="Description"
                    multiline
                    fullWidth
                    maxRows={4}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center"}} >
              <TagSelector/>
            </Box>
          <Box>
            <AddButton/>
          </Box>
        </Stack>
      </Modal>
    </>
  )
}

export default CalendarModal