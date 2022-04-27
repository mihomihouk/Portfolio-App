import React from "react";

//styles
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

function DeleteButton(props) {
  const { onClick } = props;
  return (
    <>
      <IconButton disableRipple onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    </>
  );
}

export default DeleteButton;
