import React from 'react'

//styles
import { Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material"

function Messages() {
  return (
    <>
      <List sx={{
        display: "flex",
        flexDirection: "column"}} 
      >
        <ListItem sx={{flexDirection:"row-reverse"}}>
          <Grid container item>
            <Grid container item>
              <Grid item>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
              </Grid>
              <Grid item>
                <ListItemText sx={{
                  maxWidth: "500px",
                  mb: "12px",
                  lineHeight: "24px",
                  p: "10px 20px",
                  borderRadius: "25px",
                  position: "relative",
                  color: "white",
                  textAlign: "center",
                  color: "white",
                  bgcolor: "#0b93f6",
                  alignSelf: "flex-end"}}
                >
                  Hey guys
                </ListItemText>
              </Grid>
            </Grid>
            <Grid item>
              <ListItemText>27 APR, 02:28PM</ListItemText>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container>
            <Grid container item>
              <Grid item>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
              </Grid>
              <Grid item>
                <ListItemText sx={{
                  maxWidth: "500px",
                  mb: "12px",
                  lineHeight: "24px",
                  p: "10px 20px",
                  borderRadius: "25px",
                  position: "relative",
                  color: "white",
                  textAlign: "center",
                  color: "black",
                  bgcolor: "#e5e5ea"
                  }}
                  >
                    Hey guys
                  </ListItemText>
              </Grid>
            </Grid>
            <Grid item>
              <ListItemText>27 APR, 02:28PM</ListItemText>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container>
            <Grid container item>
              <Grid item>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
              </Grid>
              <Grid item>
                <ListItemText
                  sx={{
                    maxWidth: "500px",
                    mb: "12px",
                    lineHeight: "24px",
                    p: "10px 20px",
                    borderRadius: "25px",
                    position: "relative",
                    color: "white",
                    textAlign: "center",
                    color: "black",
                    bgcolor: "#e5e5ea"
                    }}
                >What's up
                </ListItemText>
              </Grid>
            </Grid>
            <Grid item>
              <ListItemText>27 APR, 02:28PM</ListItemText>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </>
  )
}

export default Messages