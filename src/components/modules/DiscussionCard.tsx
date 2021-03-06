import React from "react";
import { useRouter } from "next/router";

//firebase
import { auth, db } from "../../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

//styles
import { Avatar, Box, Paper, Typography } from "@mui/material";

//components
import EditButton from "../atoms/buttons/EditButton";
import DeleteButton from "../atoms/buttons/DeleteButton";

const DiscussionCard = ({ onClick, document }) => {
  const router = useRouter();

  const user = auth.currentUser;

  const handleDelete = async (id) => {
    const ref = doc(db, "discussions", id);
    await deleteDoc(ref);

    await router.push("/discussion");
  };

  return (
    <>
      {document && (
        <Paper elevation={3} sx={{ height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContext: "space-between",
              width: "100%",
              height: "30%",
            }}
          >
            <Box sx={{ pl: 1, pt: 1, width: "100%" }}>
              {document.user && (
                <Avatar
                  src={document.user.photoURL}
                  sx={{ width: 35, height: 35 }}
                />
              )}
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <EditButton onClick={onClick} />
              </Box>
              <Box>
                {document.user && user.uid === document.user.id && (
                  <DeleteButton onClick={() => handleDelete(document.id)} />
                )}
              </Box>
            </Box>
          </Box>
          <Box sx={{ p: 1, height: "70%" }}>
            <Typography>{document.detail}</Typography>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default DiscussionCard;
