import React from 'react'

//styes
import { Avatar, CardHeader, CardContent, Card, Divider, Grid, ListItem, ListItemAvatar,ListItemText, CardActionArea, IconButton, Typography, List } from '@mui/material'

function RotaList() {
  return (
    <>
      <Card raised sx={{ width: "80%" }}>
        <CardActionArea>
        <CardHeader
          title="This Week"
          subheader="4 - 10 April 2022"
        />
          <CardContent sx={{ width:1 }}>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText>Vacuum Corridors</ListItemText>
              </ListItem>
              <Divider variant="inset" component="li"/>
              <ListItem>
                <ListItemAvatar>
                    <Avatar/>
                </ListItemAvatar>
                <ListItemText>Vacuum Corridors</ListItemText>
              </ListItem>
              <Divider variant="inset" component="li"/>
              <ListItem>
                <ListItemAvatar>
                    <Avatar/>
                </ListItemAvatar>
                <ListItemText>Vacuum Corridors</ListItemText>
              </ListItem>
              <Divider variant="inset" component="li"/>
              <ListItem>
                <ListItemAvatar>
                    <Avatar/>
                </ListItemAvatar>
                <ListItemText>Vacuum Corridors</ListItemText>
              </ListItem>
              <Divider variant="inset" component="li"/>
              <ListItem>
                <ListItemAvatar>
                    <Avatar/>
                </ListItemAvatar>
                <ListItemText>Vacuum Corridors</ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default RotaList