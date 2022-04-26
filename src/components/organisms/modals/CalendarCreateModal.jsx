import React, {useState} from 'react'
import { auth, db } from "../../../firebase/config"

//firebase
import { addDoc, collection } from "firebase/firestore"

//styles
import { Grid, TextField, Typography, Box, Stack, List } from "@mui/material"
import Modal from '@mui/material/Modal'
import NotesIcon from '@mui/icons-material/Notes'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


//components
import Title from "../../atoms/inputs/Title"
import CloseButton from "../../atoms/buttons/CloseButton"
import AddButton from "../../atoms/buttons/AddButton"
import EventTime from "../../modules/EventTime"
import TagSelector from "../../modules/TagSelector"


const labelsClasses = [
  {color:"indigo", category: "Work"},
  {color:"gray", category: "Family"},
  {color:"green", category: "Friends"},
  {color:"blue", category: "Study"},
  {color:"red", category: "Hobby"},
  {color:"purple", category: "Other"},
];

function CalendarModal(props) {

  const { open, handleClose } = props
  const currentUser = auth.currentUser

  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [detail, setDetail] = useState("")
  const [label, setLabel] = useState()

 const handleClickClose = () => {
   handleClose()
   setTitle("")
   setStartDate("")
   setEndDate("")
   setDetail("")
   setLabel("")
 }

 const handleSubmit = async(e) => {
   e.preventDefault()

  const ref = collection(db, "events")

  const unsub = await addDoc(ref, {
    title, 
    description:detail,
    start:startDate,
    end:endDate,
    label,
    id: Math.random(),
    user:{
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      id: currentUser.uid
    }
  })

  handleClose()
  setTitle("")
  setStartDate("")
  setEndDate("")
  setDetail("")
  setLabel("")

  return () => unsub()
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
          height:"70%",
          bgcolor: "background.paper",
          border: "2px solid #000", 
          boxShadow: 24, 
          p:"3%",
          }}>
          <Box sx={{display:"flex",justifyContent:"flex-end"}}>
            <CloseButton onClick={handleClickClose}/>
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
              <Box sx={{ overflow: "scroll"}}>
                <List sx={{display:"flex"}}>
                  {labelsClasses.map((lblClass, i) => (
                    <TagSelector lblClass={lblClass} key={i} label={label} onClick={() => setLabel(lblClass)}/>
                  ))}
                </List>
              </Box>        
            </Box>
          <Box>
            <AddButton onClick={handleSubmit}/>
          </Box>
        </Stack>
      </Modal>
    </>
  )
}

export default CalendarModal