import React from "react";

//styles
import {
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  Stack,
  List,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import NotesIcon from "@mui/icons-material/Notes";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

//components
import Title from "../atoms/inputs/Title";
import CloseButton from "../atoms/buttons/CloseButton";
import AddButton from "../atoms/buttons/AddButton";
import EventTime from "./EventTime";
import TagSelector from "./TagSelector";

const labelsClasses = [
  { color: "indigo", category: "Work" },
  { color: "gray", category: "Family" },
  { color: "green", category: "Friends" },
  { color: "blue", category: "Study" },
  { color: "red", category: "Hobby" },
  { color: "purple", category: "Other" },
];

const CalendarForm = ({
  open,
  handleClickClose,
  title,
  detail,
  startDate,
  endDate,
  label,
  setLabel,
  handleInputChange,
  handleStartDateChange,
  handleEndDateChange,
  handleSubmit,
}) => {
  return (
    <>
      <Modal open={open} onClose={handleClickClose}>
        <Stack
          spacing={1}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "40%",
            height: "70%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: "3%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <CloseButton onClick={handleClickClose} />
          </Box>
          <Box>
            <Title title={title} onChange={handleInputChange} />
          </Box>
          <Box
            component="div"
            sx={{ width: "100%", display: "flex", alignItems: "center" }}
          >
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={2}>
                <Typography>From</Typography>
              </Grid>
              <Grid item sx={{ width: "100%" }} xs={10}>
                <EventTime onChange={handleStartDateChange} date={startDate} />
              </Grid>
            </Grid>
          </Box>
          <Box
            component="div"
            sx={{ width: "100%", display: "flex", alignItems: "center" }}
          >
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={2}>
                <Typography>To</Typography>
              </Grid>
              <Grid item sx={{ width: "100%" }} xs={10}>
                <EventTime onChange={handleEndDateChange} date={endDate} />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={1}>
                <NotesIcon />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  label="Description"
                  name="detail"
                  fullWidth
                  value={detail}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <LocalOfferIcon />
            </Box>
            <Box sx={{ overflow: "scroll" }}>
              <List sx={{ display: "flex" }}>
                {labelsClasses.map((lblClass, i) => (
                  <TagSelector
                    lblClass={lblClass}
                    key={i}
                    label={label}
                    onClick={() => setLabel(lblClass)}
                  />
                ))}
              </List>
            </Box>
          </Box>
          <Box>
            {!title || !startDate || !endDate || !detail || !label ? (
              <Button type="submit" fullWidth variant="contained" disabled>
                ADD
              </Button>
            ) : (
              <AddButton onClick={handleSubmit} />
            )}
          </Box>
        </Stack>
      </Modal>
    </>
  );
};

export default CalendarForm;
