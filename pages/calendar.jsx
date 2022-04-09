import React from "react";
// import EventModal from "./components/EventModal";

//styles 

import { Grid } from "@mui/material"

//components
import CalendarHeader from "../src/components/organisms/Calendar/CalendarHeader"
import CalendarSidebar from "../src/components/organisms/Calendar/CalendarSidebar"
import MainCalendar from "../src/components/organisms/Calendar/MainCalendar"
import Header from "../src/components/organisms/Header";
import Sidebar from "../src/components/organisms/Sidebar"


function calendar() {

  return (
    <>
      {/* ここに新規作成用モーダル */}
      {/* <EventModal /> */}
      <Grid container>
        <Grid >
          <Header/> 
        </Grid>
        <Grid container sx={{pt:9}}>
          <Grid container item sx={{alignItems:"center", display: "flex", justifyContent: "space-between", px: "20px", width: "60%"}}> 
            <CalendarHeader />
          </Grid>
          <Grid container item sx={{display:'flex', pl:2}}>
            {/* メイン */}
            <Grid item xs={2} >
              <Sidebar/>
            </Grid>
            <Grid container item xs={8} sx={{height:"100vh", display: "flex", flexDirection: "column"}}>
              <MainCalendar/>
            </Grid>
            {/* 左のサイドバー */}
            <Grid item xs={4}>
              <CalendarSidebar />
            </Grid>
          </Grid> 
        </Grid>
      </Grid>
    </>
  );
  
}

export default calendar