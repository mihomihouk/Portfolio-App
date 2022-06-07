import React from "react";

//styles
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const DeleteButton = ({ onClick }) => {
  return (
    <>
      <IconButton disableRipple onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default DeleteButton;
