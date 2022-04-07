import React,{useState} from 'react'

//styles
import { Box, Stack } from "@mui/material"
import Modal from '@mui/material/Modal';


//components
import Title from "../../atoms/inputs/Title"
import CloseButton from "../../atoms/buttons/CloseButton"
import Detail from '../../atoms/inputs/Detail'
import AddButton from "../../atoms/buttons/AddButton"
import EventTime from "../../modules/EventTime"
import TagSelector from "../../modules/TagSelector"
import CreateButton from '../../atoms/buttons/CreateButton';

function DiscussionModal() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleSubmit = () => setOpen(false)
  

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
              <Box item sx={{ display: "flex", alignItems: "center"}} >
                <Title/>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center"}} >
                <Detail rows={5}/>
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