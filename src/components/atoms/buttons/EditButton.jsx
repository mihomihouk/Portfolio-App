import React from "react";

//styles
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

const EditButton = (props) => {
  const { onClick } = props;

  return (
    <>
      <IconButton disableRipple onClick={onClick}>
        <EditIcon />
      </IconButton>
    </>
  );
};

export default EditButton;
