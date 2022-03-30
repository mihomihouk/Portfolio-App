import React from 'react'

//styles
import { Grid } from "@mui/material"

//components
import Header from '../src/components/organisms/Header'
import Sidebar from '../src/components/organisms/Sidebar'
import MessageFeed from '../src/components/organisms/MessageFeed'
import OnlineUsers from '../src/components/organisms/OnlineUsers'


function chat() {
  return (
    <>
      <Grid container>
        <Header/>
      </Grid>
      <Grid container sx={{ display:"flex", height:1 }}> 
        <Grid item xs={2} >
          <Sidebar/>
        </Grid>
        <Grid container item direction="column" xs={8} sx={{py:8,height:1}}>
          <MessageFeed/>
        </Grid>
        <Grid item xs={2} pt={10}>
          <OnlineUsers/>
        </Grid>
      </Grid>
    </>
  )
}

export default chat