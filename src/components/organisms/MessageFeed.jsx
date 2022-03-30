import React from 'react'

//styles
import { Grid, Divider } from "@mui/material"

//components
import Messages from '../modules/Messages'
import MessageInput from '../atoms/inputs/MessageInput'
import SendButton from '../atoms/buttons/SendButton'

function MessageFeed() {
  return (
    <>
      <Grid item sx={{height:"80vh"}}>
        <Messages/>
      </Grid>
      <Divider />
      <Grid container item sx={{height:"20vh"}}>
        <Grid item xs={11}>
          <MessageInput/>
        </Grid>
        <Grid item xs={1}>
          <SendButton/>
        </Grid>
      </Grid>
    </>
  )
}

export default MessageFeed