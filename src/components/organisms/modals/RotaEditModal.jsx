import { useState } from 'react'
import { db } from "../../../firebase/config"
import { doc, updateDoc } from "firebase/firestore"

//styles
import { Avatar, Box, Button, MenuItem, Modal, Select, Stack } from "@mui/material"
import CloseButton from '../../atoms/buttons/CloseButton'
import CancelButton from '../../atoms/buttons/CancelButton'

function RotaEditModal(props) {

  const { open, handleClose, user } = props
  const [newCategory, setNewCategory] = useState("")

  const handleSaveRota = async() => {
    try{
      const docRef = doc(db, "users", user.id)
      const unsub = await updateDoc(docRef, {
        duty: newCategory
      })
      handleClose()
      return () =>  unsub()
    }catch(error){
      console.error(error)
      handleClose()
    }
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Stack spacing={2} 
          sx={{
            position: "absolute",
            top:"50%", left:"50%",
            transform:"translate(-50%,-50%)",
            width:"40%",
            overflow:"scroll",
            bgcolor: "background.paper",
            border: "2px solid #000", 
            boxShadow: 24, 
            p:"3%"
          }}
        >
            <Box sx={{display:"flex",justifyContent:"flex-end"}}>
              <CloseButton onClick={handleClose}/>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
              <Box sx={{pr:2}}>
                <Avatar src={user.photoURL} sx={{width:"40px", height:"40px"}}/>
              </Box>
              <Box>
                <Select
                  sx={{width:170, height: 30}}
                  value={newCategory}
                  displayEmpty
                  defaultValue="Area"
                  onChange={(e) => setNewCategory(e.target.value)} 
                >
                  <MenuItem disabled value="">Area</MenuItem>
                  <MenuItem value="Corridor">Corridors</MenuItem>
                  <MenuItem value="Kitchen">Kitchen</MenuItem>
                  <MenuItem value="Dining Room">Dining Room</MenuItem>
                  <MenuItem value="Toilet">Toilet</MenuItem>
                  <MenuItem value="Bathroom">Bathroom</MenuItem>
                </Select>
              </Box>
            </Box>
            <Box sx={{display:"flex", justifyContent:"flex-end"}}>
              <Box sx={{pl:1}}>
                <CancelButton onClick={handleClose}/>
              </Box>
              <Box>
                {!newCategory ? (
                <Button variant="contained" disabled>save</Button>
                ) : (
                  <Button variant="contained" onClick={handleSaveRota}>save</Button>
                )}
              </Box>
            </Box>
          </Stack>
      </Modal>
    </>
  )
}

export default RotaEditModal