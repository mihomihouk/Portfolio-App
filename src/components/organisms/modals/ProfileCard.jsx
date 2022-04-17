import React from 'react'
import { useLogout } from "../../../hooks/useLogout"

//styles
import { Avatar, Box, Modal, Stack,Typography, Button } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout';


const ProfileCard = (props) => {

  const { logout } = useLogout()

  const { open, handleClose } = props

  return (
    <Modal
      open={open}
      onClose={handleClose}
      >
      <Stack spacing={1} sx={{
        position: "absolute",
        top:"35%", 
        left:"75%",
        transform:"translate(-50%,-50%)",
        width:"40%",
        height:"50%",
        bgcolor: "background.paper",
        border: "2px solid #000", 
        boxShadow: 24, 
        p:"3%"
      }}>
        <Box sx={{display: "flex", flexDirection:"column", textAlign: 'center'}}>
          <Box>
            <Avatar/>
          </Box>
          <Box>
            <Typography>User Name</Typography>
          </Box>
        </Box>
        <Box>
          <Button
           startIcon={<LogoutIcon />}
           color="error"
           sx={{
            color:"#f57f17", 
            borderRadius:"12px",
            px:2
           }}
           variant="outlined"
           onClick={logout}
          >
            Logout
          </Button>
        </Box>
      </Stack>
    </Modal>
  );
}
export default ProfileCard