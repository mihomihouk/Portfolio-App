import React from 'react'

//styles
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Button, Chip, Grid, List, ListItem, ListItemButton } from "@mui/material"

// const labelsClasses = [
//   "indigo",
//   "gray",
//   "green",
//   "blue",
//   "red",
//   "purple",
// ];

function TagSelector() {

  return (
    <>
      <Grid item xs={2}>
        <LocalOfferIcon />
      </Grid>
      <Grid item xs={10}>
        <List sx={{display:"flex", justifyContent:"space-between", width:1}}>
          <ListItem> 
            <ListItemButton>
              <Chip label="EF" sx={{bgcolor:"indigo"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Chip label="EY" sx={{bgcolor:"gray"}}/>
            </ListItemButton>
            </ListItem>
          <ListItem>
            <ListItemButton>
              <Chip label="L" sx={{bgcolor:"green"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
            <Chip label="M" sx={{bgcolor:"purple"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Chip label="N" sx={{bgcolor:"red"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Chip label="S" sx={{bgcolor:"blue"}}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>

    </>
  )
}

export default TagSelector