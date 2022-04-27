import { useEffect, useState } from "react";

//styles
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Link from "../../Link";

//hooks
import { useCollection } from "../../hooks/useCollection";

function CalendarCard() {
  const { documents, error, isPending } = useCollection("events");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!documents) {
      return null;
    }

    const events = documents.map((item) => ({
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
    setEvents(events);
  }, [documents]);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 1,
          }}
        >
          <Typography variant="h5" component="h2">
            Events
          </Typography>
          <Link href="/calendar" sx={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "gray", color: "white", fontWeight: "bold" }}
              endIcon={<KeyboardArrowRightIcon />}
            >
              {"View"}
            </Button>
          </Link>
        </Box>
        <Card raised sx={{ borderRadius: "25px" }}>
          <CardContent>
            {error && <Typography>{error}</Typography>}
            {isPending && <Typography>...Loading</Typography>}
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              displayEventTime={false}
              headerToolbar={{
                left: "",
                center: "",
                right: "",
              }}
            />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default CalendarCard;
