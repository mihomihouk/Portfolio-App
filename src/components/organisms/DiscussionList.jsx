import React from 'react'
import Link from "next/link"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

//styles
import { Divider, List, ListItem, ListItemText, Paper, Typography} from "@mui/material"

function DiscussionList({discussions}) {

  return (
    <>
      <List sx={{height:"20%", width:"100%"}}>
        {discussions.map(item => (
          <ListItem key={item.id}>
            <Link href={`/discussion/${item.id}`}>
              <Paper sx={{height:"100%", width:"100%"}}>
                  <ListItemText>
                    <Typography variant="h5" component="h3" sx={{px:2}}>{item.title}</Typography>
                  </ListItemText>
                  <Divider/>
                  <ListItemText>
                    <Typography variant="body2" component="span" sx={{px:2}}>started {formatDistanceToNow(item.createdAt.toDate(), { addSuffix: true })}</Typography>
                  </ListItemText>
                </Paper>
            </Link>
          </ListItem>
       ))}
      </List>
    </>
  )
}

export default DiscussionList