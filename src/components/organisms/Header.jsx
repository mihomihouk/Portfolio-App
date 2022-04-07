import React from 'react'
import { useRecoilState } from "recoil"

//hooks
import { navbarState } from "../../hooks/NavbarState"

//styles
import { AppBar, Box, IconButton, Toolbar, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
  const [ open, setOpen ] = useRecoilState(navbarState)

  const handleDrawerToggle = () => {
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
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box sx={{justifyContent:"flex-end"}}>
                <IconButton color="inherit">
                  <Avatar />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
    </>
  )
}

export default Header