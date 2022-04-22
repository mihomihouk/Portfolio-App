
import React from 'react'
import { auth } from "../src/firebase/config"

//styles
import { Grid } from '@mui/material'

//components
import Header from '../src/components/organisms/Header'
import RotaList from '../src/components/organisms/RotaList'
import Sidebar from '../src/components/organisms/Sidebar'
import OnlineUsers from '../src/components/organisms/OnlineUsers'

const Dashboard = () => {
  const user = auth.currentUser

  return (
    <>
      <Header />
      <Grid container sx={{display:'flex'}}>
        <Grid   
          item 
          component="nav"
          xs={2}
          sx={{ flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Sidebar/>
        </Grid>
        <Grid item container xs={8} sx={{ flexGrow: 1, p: 3, my: 15, display: 'flex', justifyContent:"center"}}>
          <RotaList/>
        </Grid>
        <Grid item xs={2} pt={10}>
          {user && <OnlineUsers/>}
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard