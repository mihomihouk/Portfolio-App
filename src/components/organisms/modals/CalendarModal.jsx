import React,{useState} from 'react'

//styles
import { Button, TextField, Grid } from "@mui/material"
import Modal from '@mui/material/Modal';
import NotesIcon from '@mui/icons-material/Notes';


//components
import Title from "../../atoms/inputs/Title"
import CloseButton from "../../atoms/buttons/CloseButton"
import Detail from '../../atoms/inputs/Detail'
import AddButton from "../../atoms/buttons/AddButton"
import EventTime from "../../modules/EventTime"
import TagSelector from "../../modules/TagSelector"

function CalendarModal() {
const [open, setOpen] = useState(false)
const handleOpen = () => setOpen(true)
const handleClose = () => setOpen(false)

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Grid container sx={{
          position: "absolute",
          top:"50%", left:"50%",
          transform:"translate(-50%,-50%)",
          width:"40%",
          height:"60%",
          bgcolor: "background.paper",
          border: "2px solid #000", 
          boxShadow: 24, 
          display:"flex", 
          flexDirection:"column",
          p:"3%",
          justifyContent:"space-between"
          }}>
          <Grid item sx={{display:"flex",justifyContent:"flex-end", height: "10%"}}>
            <CloseButton/>
          </Grid>
          <Grid container item sx={{height: "80%", display:"flex", flexDirection:"column"}}>
            <Grid item sx={{height: "25%", display: "flex", alignItems: "center"}} >
              <Title/>
            </Grid>
            <Grid item sx={{height: "25%", display: "flex", alignItems: "center"}}>
              <EventTime />
            </Grid>
            <Grid item sx={{height: "25%",  display: "flex", alignItems: "center"}} >
              <Grid item xs={2}>
                <NotesIcon/>
              </Grid>
              <Grid item xs={10}>
                <TextField 
                  label="Description"
                  multiline
                  maxRows={4}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container item sx={{height: "25%",  display: "flex", alignItems: "center"}} >
              <TagSelector/>
            </Grid>
          </Grid>
          <Grid item sx={{height: "10%"}}>
            <AddButton/>
          </Grid>
        </Grid>
      </Modal>
    </>
  )
}

export default CalendarModal