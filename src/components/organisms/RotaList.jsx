import { useState } from 'react'

//styes
import { Avatar, CardHeader, CardContent, Card, Divider, ListItem, List, Typography } from '@mui/material'
import lastDayOfWeek from 'date-fns/lastDayOfWeek'
import startOfWeek from 'date-fns/startOfWeek'
import format from 'date-fns/format'

//components
import EditButton from "../atoms/buttons/EditButton"

//hooks
import { useCollection } from "../../hooks/useCollection"
import { Box } from '@mui/system'
import CancelButton from '../atoms/buttons/CancelButton'
import RotaEditModal from './modals/RotaEditModal'

function RotaList() {
  
  const { documents, isPending, error } = useCollection("users")
 
  const [rotaToEdit, setRotaToEdit] = useState("")
  const [openEditModal, setOpenEditModal] = useState(false)

  const firstDay = format(startOfWeek(new Date(),{ weekStartsOn: 1 }), "dd")
  const lastDay = format(lastDayOfWeek(new Date(), { weekStartsOn: 1 }) , "dd MMM yyyy")
  const formattedCurrentWeek = `${firstDay} - ${lastDay}`

  const handleOpenEditModal = () => {
    setOpenEditModal(true)
  }

  //Click to open edit modal
  const handleClickEdit = (targetUser) => {
    handleOpenEditModal(true)
    setRotaToEdit(targetUser)
  }

  const handleCloseEditModal = () => {
    setOpenEditModal(false)
    setRotaToEdit("")
  }
  
  return (
    <>
      <RotaEditModal open={openEditModal} handleClose={handleCloseEditModal} user={rotaToEdit}/>
      <Card raised sx={{borderRadius:"25px"}}>
        <CardHeader
          title="This Week"
          subheader={formattedCurrentWeek}
        />
        <CardContent >
          {error && <Typography>{error}</Typography>}
          {isPending && <Typography>...Loading</Typography>}
          <List>
          {documents && documents.map((user) => (
            <ListItem key={user.id}>
              <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                <Box sx={{display:"flex", alignItems:"center"}}>
                  <Box sx={{pr:2}}>
                    <Avatar src={user.photoURL}/>
                  </Box>
                  <Box>
                    {user.duty &&<Typography variant="body1">{user.duty}</Typography>}
                  </Box>
                </Box>
                <Box sx={{justifyContent:"flex-end"}}>
                  <EditButton onClick={() => handleClickEdit(user)}/>
                </Box>
              </Box> 
            </ListItem>
          ))}
          <Divider variant="inset" component="li"/>
          </List>
        </CardContent>
      </Card>
    </>
  )
}

export default RotaList