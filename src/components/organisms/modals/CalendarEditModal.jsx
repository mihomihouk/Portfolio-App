import React from 'react'

//firebase 
import { db } from "../../../firebase/config"
import { doc, deleteDoc } from "firebase/firestore"

//styles
import { Grid, Typography, Box, Stack, Divider } from "@mui/material"
import Modal from '@mui/material/Modal'
import NotesIcon from '@mui/icons-material/Notes'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


//components
import EditButton from "../../atoms/buttons/EditButton"
import DeleteButton from "../../atoms/buttons/DeleteButton"
import CloseButton from "../../atoms/buttons/CloseButton"

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

function CalendarEditModal(props) {

  const { open, handleClose, eventToEdit } = props

  const handleDelete = () => {
    if (
      window.confirm(`Are you sure you want to delete "${eventToEdit.title}"?`)
    ) {
      const dbDelete = async(id) => {
        const ref = doc(db, "events", id)
        await deleteDoc(ref)
      }
      dbDelete(eventToEdit.id)
      eventToEdit.remove()
      handleClose()
    }
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Stack spacing={1} sx={{
          position: "absolute",
          top:"50%", left:"50%",
          transform:"translate(-50%,-50%)",
          width:"40%",
          height:"50%",
          bgcolor: "background.paper",
          border: "2px solid #000", 
          boxShadow: 24, 
          p:"3%",
          }}>
          <Box sx={{display:"flex",justifyContent:"flex-end"}}>
            <EditButton/>
            <DeleteButton onClick={handleDelete}/>
            <CloseButton onClick={handleClose}/>
          </Box>
            <Box >
              <Typography variant="h5" component="h3">{eventToEdit.title}</Typography>
            </Box>
            <Divider/>
            <Box fullWidth sx={{display: "flex",alignItems: "center"}}>
              <Grid container sx={{alignItems: "center"}}>
                <Grid item xs={2} >
                  <Typography>From</Typography>
                </Grid>
                <Grid item sx={{width:"100%"}} xs={10} >
                  <Typography>{new Date(eventToEdit.start).toString()}</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box fullWidth sx={{display: "flex",alignItems: "center"}}>
              <Grid container sx={{alignItems: "center"}}>
                <Grid item xs={2} >
                  <Typography>To</Typography>
                </Grid>
                <Grid item sx={{width:"100%"}} xs={10} >
                  <Typography>{new Date(eventToEdit.end).toString()}</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: "flex"}} >
              <Grid container sx={{alignItems: "center"}}>
                <Grid item xs={2} >
                  <NotesIcon/>
                </Grid>
                <Grid item xs={10} >
                  {/* <Typography>{eventToEdit.extendedProps.description}</Typography> */}
                </Grid>
              </Grid>
            </Box>
            <Grid container sx={{ display: "flex", alignItems: "center", width: "100%"}} >
              <Grid item xs={2} >
                <LocalOfferIcon />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2" component="span"
                  sx={{bgcolor:`${eventToEdit.backgroundColor}`, height:"24px", borderRadius:"5px", display:"flex", alignItems:"center", cursor: "pointer"}}
                >
                  {eventToEdit.label}
                </Typography>
              </Grid>        
            </Grid>
        </Stack>
      </Modal>
    </>
  )
}

export default CalendarEditModal
