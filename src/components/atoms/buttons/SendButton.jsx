import React from "react";

//styles
import SendIcon from "@mui/icons-material/Send";
import { Fab } from "@mui/material";

function SendButton() {
  return (
    <>
      <Fab>
        <SendIcon />
      </Fab>
    </>
  );
}

export default SendButton;
