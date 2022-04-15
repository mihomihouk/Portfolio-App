import React, {useState} from "react";
import CalendarModal from "../src/components/organisms/modals/CalendarModal"
import FullCalendar, { DateSelectArg } from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { db } from "../src/firebase/config"
import { useCollection } from "../src/hooks/useCollection"

//styles 
import { Box, Container } from "@mui/material"

//components
import Header from "../src/components/organisms/Header";
import Sidebar from "../src/components/organisms/Sidebar"
import { format } from "date-fns";


function Calendar() {

  const { documents } = useCollection("events")

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleDateClick = () => {
    handleOpen()

  }

  const handleEventDrop = () => {
   
  }
  
  const events = documents ? documents.map(item => (
    {
      title:item.title,
      start:item.start.toDate(),
      end:item.end.toDate(),
      color:item.label
    }
  )):null


  return (
    <>
      <CalendarModal open={open} handleOpen={handleOpen} handleClose={handleClose}/>
      <Box>
        <Box>
          <Header/> 
        </Box>
        <Container maxWidth="md" sx={{pt:9, width:"100%"}}>
          <Box >
            <Sidebar/>
          </Box>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
            editable={true}
            selectable={true}
            eventDrop={handleEventDrop}
            events={events}
            displayEventTime={false}
          />
         </Container> 
      </Box>
    </>
  );
  
}

export default Calendar