import { useState } from 'react'
import { auth } from "../../firebase/config"

//styes
import { Avatar, CardHeader, CardContent, Card, Divider, ListItem, ListItemAvatar,ListItemText, List, Typography, MenuItem, Select, Button } from '@mui/material'
import lastDayOfWeek from 'date-fns/lastDayOfWeek'
import startOfWeek from 'date-fns/startOfWeek'
import format from 'date-fns/format'

//components
import EditButton from "../atoms/buttons/EditButton"

//hooks
import { useCollection } from "../../hooks/useCollection"
import { Box } from '@mui/system'
import CancelButton from '../atoms/buttons/CancelButton'

function RotaList() {
  
  const { documents, isPending, error } = useCollection("users")
  const [newCategory, setNewCategory] = useState("")
  const [isEditingRota, setIsEditingRota] = useState(false)
  const [isEditingArea, setIsEditingArea] = useState(false)
  
  const firstDay = format(startOfWeek(new Date(),{ weekStartsOn: 1 }), "dd")
  const lastDay = format(lastDayOfWeek(new Date(), { weekStartsOn: 1 }) , "dd MMM yyyy")
  const formattedCurrentWeek = `${firstDay} - ${lastDay}`
  console.log(firstDay)
  console.log(lastDay)

  return (
    <>
      <Card raised sx={{borderRadius:"25px"}}>
        <CardHeader
          title="This Week"
          subheader={formattedCurrentWeek}
          action={
            <EditButton onClick={() => setIsEditingRota(true)}/>
          }
        />
        <CardContent >
          <List >
          {error && <Typography>{error}</Typography>}
          {isPending && <Typography>...Loading</Typography>}
          {documents && documents.map((user) => (
            <>
              <ListItem key={user.id}>
              {!isEditingArea ? ( 
                <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                  <Box sx={{display:"flex", alignItems:"center"}}>
                    <Box sx={{pr:2}}>
                      <Avatar src={user.photoURL}/>
                    </Box>
                    <Box>
                        <Typography variant="body1">Corridor</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <EditButton onClick={()=>setIsEditingArea(true)}/>
                  </Box>
                </Box> ) : (
                <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                  <Box sx={{display:"flex", alignItems:"center"}}>
                    <Box sx={{pr:2}}>
                      <Avatar src={user.photoURL}/>
                    </Box>
                    <Box>
                      <Select
                        sx={{width:170, height: 30}}
                        value={newCategory}
                        displayEmpty
                        defaultValue="Area"
                        onChange={(e) => setNewCategory(e.target.value)} 
                      >
                        <MenuItem disabled value="">Area</MenuItem>
                        <MenuItem value="Corridor">Corridors</MenuItem>
                        <MenuItem value="Kitchen">Kitchen</MenuItem>
                        <MenuItem value="Dining Room<">Dining Room</MenuItem>
                        <MenuItem value="Toilet">Toilet</MenuItem>
                        <MenuItem value="Bathroom">Bathroom</MenuItem>
                      </Select>
                    </Box>
                  </Box>
                  <Box sx={{display:"flex"}}>
                    <Box >
                      <Button variant="contained" onClick={() => setIsEditingArea(false)}>save</Button>
                    </Box>
                    <Box sx={{pl:1}}>
                      <CancelButton onClick={() => setIsEditingArea(false)}/>
                    </Box>
                  </Box>
                </Box> 
              )}
              </ListItem>
              <Divider variant="inset" component="li"/>
            </>
          ))}
          </List>
        </CardContent>
      </Card>
    </>
  )
}

export default RotaList