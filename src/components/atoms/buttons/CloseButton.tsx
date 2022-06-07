import React from "react";

//styles
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const CloseButton = ({ onClick }) => {
  return (
    <>
      <IconButton disableRipple onClick={onClick}>
        <CloseIcon sx={{ color: "gray" }} />
      </IconButton>
    </>
  );
};

export default CloseButton;
