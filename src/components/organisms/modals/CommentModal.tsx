import React from "react";
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
import { useModal } from "../../../hooks/useModal";

const DiscussionModal = ({ document }) => {
  const user = auth.currentUser;

  const { formData, handleInputChange, resetForm } = useForm({
    newComment: "",
  });

  const { newComment } = formData;

  const { handleUpdate } = useUpdateDocument();

  const { handleOpenCreateModal, handleCloseCreateModal, openCreateModal } =
    useModal();

  const handleClose = () => {
    resetForm();
    handleCloseCreateModal();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
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

    resetForm();

    await handleUpdate(docRef, {
      comments: [...document.comments, commentToAdd],
    });

    handleCloseCreateModal();
  };

  return (
    <>
      <CreateButton onClick={handleOpenCreateModal} title="New Comment" />
      <Modal open={openCreateModal} onClose={handleClose}>
        <Box
          component="div"
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
