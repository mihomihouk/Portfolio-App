import React from 'react'
import { useLogout } from "../../../hooks/useLogout"
import { useRecoilValue } from "recoil"

//contexts
import { userState } from "../../../context/userState"

//styles
import { Box, Modal, Stack,Typography, Button } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout'
import UserAvatar from "../../../components/atoms/UserAvatar"

const ProfileCard = (props) => {

  const user = useRecoilValue(userState)
  const { open, handleClose } = props
  const { logout, isPending } = useLogout()
  console.log(UserAvatar)

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
            {user && <UserAvatar src={user.photoURL}/>}
          </Box>
          <Box>
            {user && <Typography>{user.displayName}</Typography>}
          </Box>
        </Box>
        <Box>
          {!isPending &&<Button
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
          </Button>}
          {isPending &&<Button
            startIcon={<LogoutIcon />}
            color="error"
            sx={{
              color:"#f57f17", 
              borderRadius:"12px",
              px:2
            }}
            variant="outlined"
            disabled
          >
            Logging out...
          </Button>}
          
        </Box>
      </Stack>
    </Modal>
  );
}
export default ProfileCard