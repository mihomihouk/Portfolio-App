import React, {  useState } from 'react'
import { useRecoilState } from "recoil"

//hooks
import { navbarState } from "../../context/NavbarState"

//styles
import { AppBar, Box, IconButton, Toolbar, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

//components
import ProfileCard from "../organisms/modals/ProfileCard"

const Header = () => {

  

  const [ open, setOpen ] = useRecoilState(navbarState)
  const [openProfileCard, setOpenProfileCard] = useState(false)

  const handleProfileCardOpen = () => setOpenProfileCard(true)
  const handleProfileCardClose = () => setOpenProfileCard(false)

  const handleNavbarToggle = () => {
    setOpen (!open)
  }


  return (
    <>
      <AppBar position="absolute" >
          <Toolbar>
            <Box sx={{display:"flex", alignItems:"center", width:"100%"}}>
              <Box sx={{width:"100%"}}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{
                    marginRight: '36px'
                  }}
                  onClick={handleNavbarToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box sx={{justifyContent:"flex-end"}}>
                <IconButton color="inherit" onClick={handleProfileCardOpen}>
                  <Avatar />
                </IconButton>
              </Box>
              <ProfileCard open={openProfileCard} handleClose={handleProfileCardClose}/>
            </Box>
          </Toolbar>
        </AppBar>
    </>
  )
}

export default Header