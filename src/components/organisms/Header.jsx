import React from 'react'

//styles
import { AppBar, IconButton, Toolbar, Typography, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Header = (props) => {
  const { pageTitle, handleDrawerToggle} = props

  return (
    <>
      <AppBar position="absolute" >
          <Toolbar>
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
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {pageTitle}
            </Typography>
            <IconButton color="inherit">
              <Avatar />
            </IconButton>
          </Toolbar>
        </AppBar>
    </>
  )
}

export default Header