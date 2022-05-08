import React, { useEffect, useState } from "react";
import { useCollection } from "../src/hooks/useCollection";
import { useRecoilState } from "recoil";

//hooks
import { labelState } from "../src/context/LabelState";

//styles
import { Box, Grid, Stack, Typography } from "@mui/material";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

//components
import Header from "../src/components/organisms/Header";
import Sidebar from "../src/components/organisms/Sidebar";
import CalendarCreateModal from "../src/components/organisms/modals/CalendarCreateModal";
import CalendarEditModal from "../src/components/organisms/modals/CalendarEditModal";
import CalendarSidebar from "../src/components/organisms/CalendarSidebar";

//hooks
import { useModal } from "../src/hooks/useModal";

const Calendar = () => {
  const { documents, error, isPending } = useCollection("events");
  const [labels, setLabels] = useRecoilState(labelState);
  const [events, setEvents] = useState([]);
  const [eventToEdit, setEventToEdit] = useState("");
  const {
    handleOpenCreateModal,
    handleCloseCreateModal,
    openCreateModal,
    handleOpenEditModal,
    handleCloseEditModal,
    openEditModal,
  } = useModal();

  useEffect(() => {
    if (!documents) {
      return null;
    }
    const selectedLabels = labels
      .filter((label) => label.checked)
      .map((label) => label.color);
    const filteredEvents = documents.filter((item) => {
      return selectedLabels.includes(item.label.color);
    });

    const formattedEvents = filteredEvents.map((item) => ({
      id: item.id,
      title: `${item.user.displayName} : ${item.title}`,
      start: item.start.toDate(),
      end: item.end.toDate(),
      color: item.label.color,
      extendedProps: {
        userThumbnail: item.user.photoURL,
      },
      description: item.description,
      userID: item.user.id,
    }));
    setEvents(formattedEvents);
  }, [documents, labels]);

  //Click event created
  const handleEventClick = (EventClickArg) => {
    setEventToEdit(EventClickArg.event);
    handleOpenEditModal();
  };

  return (
    <>
      <CalendarCreateModal
        open={openCreateModal}
        handleOpen={handleOpenCreateModal}
        handleClose={handleCloseCreateModal}
      />
      <CalendarEditModal
        open={openEditModal}
        handleOpen={handleOpenEditModal}
        handleClose={handleCloseEditModal}
        eventToEdit={eventToEdit}
      />
      <Box>
        <Box>
          <Header />
        </Box>
        <Box>
          <Sidebar />
        </Box>
        <Grid
          container
          sx={{
            pt: 9,
            px: 4,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={2}>
            <CalendarSidebar
              documents={documents}
              labels={labels}
              setLabels={setLabels}
            />
          </Grid>
          <Grid item xs={10} sx={{ pl: 2 }}>
            <Stack>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleOpenCreateModal}
                editable={true}
                eventClick={handleEventClick}
                selectable={true}
                events={events}
                displayEventTime={false}
              />
              {error && <Typography>{error}</Typography>}
              {isPending && <Typography>Loading...</Typography>}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Calendar;
