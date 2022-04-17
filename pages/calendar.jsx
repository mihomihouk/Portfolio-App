import React, {useEffect, useState} from "react";
import { useCollection } from "../src/hooks/useCollection"
import { useRecoilState } from "recoil"

//hooks
import { labelState } from "../src/hooks/LabelState"

//styles 
import { Box, Grid } from "@mui/material"
import FullCalendar, { EventClickArg} from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"

//components
import Header from "../src/components/organisms/Header";
import Sidebar from "../src/components/organisms/Sidebar"
import CalendarCreateModal from "../src/components/organisms/modals/CalendarCreateModal"
import CalendarEditModal from "../src/components/organisms/modals/CalendarEditModal"
import CalendarSidebar from "../src/components/organisms/CalendarSidebar";


function Calendar() {

  const { documents } = useCollection("events")
  const [ labels, setLabels ] = useRecoilState(labelState)
  const [events, setEvents] = useState([])

  const [openCreateModal, setOpenCreateModal] = useState(false)
  const handleOpenCreateModal = () => setOpenCreateModal(true)
  const handleCloseCreateModal = () => setOpenCreateModal(false)

  const [openEditModal, setOpenEditModal] = useState(false)
  const handleOpenEditModal = () => setOpenEditModal(true)
  
  const [eventToEdit,setEventToEdit] = useState("")

  useEffect(() => {
    if(!documents){
      return null
    }
    const selectedLabels =labels.filter(label => label.checked).map(label => label.color)
    const filteredEvents = documents.filter(item => {
      return selectedLabels.includes(item.label)
    })
    const formattedEvents = filteredEvents.map(item => (
      {
        id:item.id,
        title:item.title,
        start:item.start.toDate(),
        end:item.end.toDate(),
        color:item.label,
        description:item.description
      }
    ))
    setEvents(formattedEvents)
  },[documents, labels])


  //Click date to open modal
  const handleDateClick = () => {
    handleOpenCreateModal()
  }

  //Click event created
  const handleEventClick = ( EventClickArg ) => {
    setEventToEdit(EventClickArg.event)
    handleOpenEditModal()
  }

  const handleCloseEditModal = () => {
    setOpenEditModal(false)
    setEventToEdit("")
  }


  return (
    <>
      <CalendarCreateModal open={openCreateModal} handleOpen={handleOpenCreateModal} handleClose={handleCloseCreateModal}/>
      <CalendarEditModal open={openEditModal} handleOpen={handleOpenEditModal} handleClose={handleCloseEditModal} eventToEdit={eventToEdit}/>
      <Box>
        <Box>
          <Header/> 
        </Box>
        <Box>
            <Sidebar labels={labels} setLabels={setLabels}/>
          </Box>
        <Grid container sx={{pt:9, px:4, width:"100%", display:"flex", alignItems:"center"}}>
          <Grid item xs={2}>
            <CalendarSidebar documents={documents}/>
          </Grid>
          <Grid item xs={10} sx={{pl:2}}>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              dateClick={handleDateClick}
              editable={true}
              eventClick={handleEventClick}
              selectable={true}
              events={events}
              displayEventTime={false}
            />
          </Grid>
         </Grid> 
      </Box>
    </>
  );
  
}

export default Calendar