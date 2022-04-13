import React, {useState} from "react";
import CalendarModal from "../src/components/organisms/modals/CalendarModal"
import FullCalendar, { DateSelectArg } from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"

//styles 

import { Box, Container } from "@mui/material"

//components
import Header from "../src/components/organisms/Header";
import Sidebar from "../src/components/organisms/Sidebar"


function calendar() {

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleDateClick = (DateSelectArg) => {
    console.log(DateSelectArg)
    handleOpen()

  }

  return (
    <>
      {/* ここに新規作成用モーダル */}
      <CalendarModal open={open} handleOpen={handleOpen} handleClose={handleClose}/>
      <Box>
        <Box>
          <Header/> 
        </Box>
        <Container maxWidth="md" sx={{pt:9, width:"100%"}}>
          {/* <Box sx={{display:'flex', height:"100%", width:"100%"}}>  */}
            {/* メイン */}
            <Box >
              <Sidebar/>
            </Box>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialEvents={[{ title: "initial event", start: new Date() }]}
              dateClick={handleDateClick}
            />
            {/* 左のサイドバー */}
           {/* </Box>  */}
         </Container> 
      </Box>
    </>
  );
  
}

export default calendar