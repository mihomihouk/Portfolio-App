import React, { useState } from "react";

//firebase
import { db, auth } from "../../../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

//styles
import {
  Avatar,
  Grid,
  Box,
  Divider,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";

//components
import EditButton from "../../atoms/buttons/EditButton";
import DeleteButton from "../../atoms/buttons/DeleteButton";
import CloseButton from "../../atoms/buttons/CloseButton";
import CalendarForm from "../../modules/CalendarForm";

//hooks
import useDatePicker from "../../../hooks/useDatepicker";
import useForm from "../../../hooks/useForm";
import { useUpdateDocument } from "../../../hooks/useUpdateDocument";

const CalendarEditModal = ({ open, handleClose, eventToEdit }) => {
  const user = auth.currentUser;

  const [isEditing, setIsEditing] = useState(false);

  const [label, setLabel] = useState();

  //call useForm
  const { formData, handleInputChange, resetForm } = useForm({
    title: "",
    detail: "",
  });

  const { title, detail } = formData;

  //call useUpdateDocument
  const { handleUpdate, error } = useUpdateDocument();

  //call useDatePicker
  const {
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    resetDates,
  } = useDatePicker();

  const handleDelete = () => {
    if (
      window.confirm(`Are you sure you want to delete "${eventToEdit.title}"?`)
    ) {
      const dbDelete = async (id) => {
        const ref = doc(db, "events", id);
        await deleteDoc(ref);
      };
      dbDelete(eventToEdit.id);
      eventToEdit.remove();
      handleClose();
    }
  };

  const handleClickClose = () => {
    setIsEditing(false);
    resetForm();
    resetDates();
    setLabel("");
    handleClose();
  };

  const handleSubmit = async () => {
    const docRef = doc(db, "events", eventToEdit.id);

    handleUpdate(docRef, {
      title,
      description: detail,
      start: startDate,
      end: endDate,
      label,
    });

    setIsEditing(false);
    resetForm();
    resetDates();
    setLabel("");
    handleClose();
  };

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
            overflow: "scroll",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: "3%",
          }}
        >
          {!isEditing && eventToEdit ? (
            <>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <EditButton onClick={() => setIsEditing(true)} />
                {user.uid === eventToEdit.extendedProps.userID && (
                  <DeleteButton onClick={handleDelete} />
                )}
                <CloseButton onClick={handleClose} />
              </Box>
              <Box sx={{ overflow: "scroll" }}>
                <Typography variant="h5" component="h3">
                  {eventToEdit.title}
                </Typography>
              </Box>
              <Divider />
              <Grid container sx={{ display: "flex", alignItems: "center" }}>
                <Grid item xs={2}>
                  <Typography>From</Typography>
                </Grid>
                <Grid item sx={{ width: "100%" }} xs={10}>
                  <Typography>
                    {new Date(eventToEdit.start).toString()}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ display: "flex", alignItems: "center" }}>
                <Grid item xs={2}>
                  <Typography>To</Typography>
                </Grid>
                <Grid item sx={{ width: "100%" }} xs={10}>
                  <Typography>
                    {new Date(eventToEdit.end).toString()}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ display: "flex", alignItems: "center" }}>
                <Grid item xs={2}>
                  <NotesIcon />
                </Grid>
                <Grid item xs={10} sx={{ overflow: "scroll" }}>
                  {eventToEdit && (
                    <Typography>
                      {eventToEdit.extendedProps.description}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Grid container sx={{ display: "flex", alignItems: "center" }}>
                <Grid item xs={2}>
                  <PersonIcon />
                </Grid>
                <Grid item xs={10}>
                  {eventToEdit && (
                    <Avatar
                      sx={{ width: "24px", height: "24px" }}
                      src={eventToEdit.extendedProps.userThumbnail}
                    />
                  )}
                </Grid>
              </Grid>
              <Grid
                container
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Grid item xs={2}>
                  <LocalOfferIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      bgcolor: `${eventToEdit.backgroundColor}`,
                      height: "24px",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    {eventToEdit.label}
                  </Typography>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <CalendarForm
                open={open}
                handleClose={handleClose}
                title={title}
                detail={detail}
                startDate={startDate}
                endDate={endDate}
                label={label}
                setLabel={setLabel}
                handleClickClose={handleClickClose}
                handleInputChange={handleInputChange}
                handleStartDateChange={handleStartDateChange}
                handleEndDateChange={handleEndDateChange}
                handleSubmit={handleSubmit}
              />
            </>
          )}
        </Stack>
      </Modal>
    </>
  );
};

export default CalendarEditModal;
