import React,{useState} from 'react'
import { db } from "../../../firebase/config"

//firebase
import { doc, Timestamp, updateDoc } from "firebase/firestore"

//styles
import { Box, Modal, Stack } from "@mui/material"


//components
import Title from "../../atoms/inputs/Title"
import CloseButton from "../../atoms/buttons/CloseButton"
import Detail from '../../atoms/inputs/Detail'
import AddButton from "../../atoms/buttons/AddButton"
import CreateButton from '../../atoms/buttons/CreateButton';

function DiscussionModal(props) {
  const { document } = props

  const [open, setOpen] = useState(false)
  const [newComment, setNewComment] = useState("")

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setNewComment("")
    setOpen(false)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    const commentToAdd = {
      content: newComment,
      createdAt: Timestamp.fromDate(new Date()),
      id: Math.random()
    }

    const docRef = doc(db, "discussions", document.id)


    await updateDoc(docRef, {
      comments: [...document.comments, commentToAdd]
    })

    setNewComment("")
    setOpen(false)
  }
  
  return (
    <>
      <CreateButton
        onClick={handleOpen}
        title="New Comment"
      />
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box container sx={{
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
            <Stack spacing={2}>
              <Box sx={{display:"flex",justifyContent:"flex-end"}}>
                <CloseButton onClick={handleClose}/>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center"}} >
                <Detail rows={5} text="Comment" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
              </Box>
              <Box>
                <AddButton onClick={handleSubmit}/>
              </Box>
            </Stack>
        </Box>
      </Modal>
    </>
  )
}

export default DiscussionModal