import React,{useState} from 'react'

//styles
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Box, List,Typography, ListItem, ListItemText } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check'

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];
function TagSelector() {
  const [selectedEvent, setSelectedEvent] = useState("")
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  return (
    <>
      <Box>
        <LocalOfferIcon />
      </Box>
      <Box >
        <List sx={{display:"flex"}}>
        {labelsClasses.map((lblClass, i) => (
          <ListItem
            key={i}
            onClick={() => setSelectedLabel(lblClass)}
          > 
            <ListItemText variant="body2" component="span"
              sx={{bgcolor:`${lblClass}`, width:"24px", height:"24px", borderRadius:"100%", display:"flex", alignItems:"center", cursor: "pointer"}}
            >
              {selectedLabel === lblClass && (
                <Typography >
                  <CheckIcon size="sm" sx={{color:"white"}}/>
                </Typography>
              )}
            </ListItemText>
          </ListItem>
        ))}
        </List>
      </Box>

    </>
  )
}

export default TagSelector