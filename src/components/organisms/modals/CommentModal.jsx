import React, { useState } from "react";
import { auth, db } from "../../../firebase/config";

//firebase
import { doc, Timestamp } from "firebase/firestore";

//styles
import { Box, Modal, Stack } from "@mui/material";

//components
import CloseButton from "../../atoms/buttons/CloseButton";
import Detail from "../../atoms/inputs/Detail";
import AddButton from "../../atoms/buttons/AddButton";
import CreateButton from "../../atoms/buttons/CreateButton";

//hooks
import useForm from "../../../hooks/useForm";
import { useUpdateDocument } from "../../../hooks/useUpdateDocument";

const DiscussionModal = ({ document }) => {
  const [open, setOpen] = useState(false);

  const user = auth.currentUser;

  //call useForm hook
  const { formData, handleInputChange, resetForm } = useForm({
    newComment: "",
  });

  const { newComment } = formData;

  //call useUpdateDocument hook
  const { handleUpdate, updateError } = useUpdateDocument();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    resetForm();
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      content: newComment,
      createdAt: Timestamp.fromDate(new Date()),
      id: Math.random(),
      user: {
        id: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
      },
    };

    const docRef = doc(db, "discussions", document.id);

    await handleUpdate(docRef, {
      comments: [...document.comments, commentToAdd],
    });

    resetForm();
    setOpen(false);
  };

  return (
    <>
      <CreateButton onClick={handleOpen} title="New Comment" />
      <Modal open={open} onClose={handleClose}>
        <Box
          container
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "40%",
            height: "60%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            p: "3%",
            justifyContent: "space-between",
          }}
        >
          <Stack spacing={2}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <CloseButton onClick={handleClose} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Detail
                rows={5}
                text="Comment"
                name="newComment"
                value={newComment}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <AddButton onClick={handleSubmit} />
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default DiscussionModal;
