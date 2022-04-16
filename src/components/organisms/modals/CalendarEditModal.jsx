import React, { useState } from 'react'

//firebase 
import { db } from "../../../firebase/config"
import { doc, deleteDoc, updateDoc } from "firebase/firestore"

//styles
import { Grid, Box, Divider, Modal, List, Stack, TextField, Typography } from "@mui/material"
import NotesIcon from '@mui/icons-material/Notes'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'

//components
import Title from "../../atoms/inputs/Title"
import EditButton from "../../atoms/buttons/EditButton"
import DeleteButton from "../../atoms/buttons/DeleteButton"
import CloseButton from "../../atoms/buttons/CloseButton"
import AddButton from '../../atoms/buttons/AddButton'
import TagSelector from '../../modules/TagSelector'
import EventTime from '../../modules/EventTime'

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

  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [detail, setDetail] = useState("")
  const [label, setLabel] = useState()

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

  const handleCloseEdit = () => {
    setIsEditing(false)
    setTitle("")
    setStartDate("")
    setEndDate("")
    setDetail("")
    setLabel("")
  }

  const handleUpdate = async() => {

    const docRef = doc(db, "events", eventToEdit.id)

    await updateDoc(docRef, {
      title, 
      description:detail,
      start:startDate,
      end:endDate,
      label
    })

    setIsEditing(false)
    setTitle("")
    setStartDate("")
    setEndDate("")
    setDetail("")
    setLabel("")
    handleClose()
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {!isEditing ? (
        <Stack spacing={1} sx={{
          position: "absolute",
          top:"50%", left:"50%",
          transform:"translate(-50%,-50%)",
          width:"40%",
          height:"50%",
          bgcolor: "background.paper",
          border: "2px solid #000", 
          boxShadow: 24, 
          p:"3%"
          }}>
          <Box sx={{display:"flex",justifyContent:"flex-end"}}>
            <EditButton onClick={() => setIsEditing(true)}/>
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
        ) : (
          <Stack spacing={1} sx={{
            position: "absolute",
            top:"50%", left:"50%",
            transform:"translate(-50%,-50%)",
            width:"40%",
            height:"70%",
            bgcolor: "background.paper",
            border: "2px solid #000", 
            boxShadow: 24, 
            p:"3%",
            }}>
            <Box sx={{display:"flex",justifyContent:"flex-end"}}>
              <CloseButton onClick={handleCloseEdit}/>
            </Box>
            <Box >
              <Title title={title} onChange={(e) => setTitle(e.target.value)}/>
            </Box>
            <Box fullWidth sx={{display: "flex",alignItems: "center"}}>
              <Grid container sx={{alignItems: "center"}}>
                <Grid item xs={2} >
                  <Typography>From</Typography>
                </Grid>
                <Grid item sx={{width:"100%"}} xs={10} >
                  <EventTime onChange={(newValue)=> setStartDate(newValue)} date={startDate}/>
                </Grid>
              </Grid>
            </Box>
            <Box fullWidth sx={{display: "flex",alignItems: "center"}}>
              <Grid container sx={{alignItems: "center"}}>
                <Grid item xs={2} >
                  <Typography>To</Typography>
                </Grid>
                <Grid item sx={{width:"100%"}} xs={10} >
                  <EventTime onChange={(newValue)=> setEndDate(newValue)} date={endDate}/>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: "flex"}} >
              <Grid container sx={{alignItems: "center"}}>
                <Grid item xs={1} >
                  <NotesIcon/>
                </Grid>
                <Grid item xs={11} >
                  <TextField 
                    label="Description"
                    fullWidth
                    value={detail} 
                    onChange={(e) => setDetail(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center"}} >
              <Box>
                <LocalOfferIcon />
              </Box>
              <Box >
                <List sx={{display:"flex"}}>
                {labelsClasses.map((lblClass, i) => (
                  <TagSelector lblClass={lblClass} key={i} label={label} onClick={() => setLabel(lblClass)}/>
                ))}
                </List>
              </Box>        
            </Box>
            <Box>
              <AddButton onClick={handleUpdate}/>
            </Box>
          </Stack>
        )}
      </Modal>
    </>
  )
}

export default CalendarEditModal