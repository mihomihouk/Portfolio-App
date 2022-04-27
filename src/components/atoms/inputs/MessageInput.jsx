import React from "react";

//styles
import { TextField } from "@mui/material";

function MessageInput() {
  return (
    <>
      <TextField
        variant="standard"
        label="type your message"
        sx={{ width: 1 }}
      />
    </>
  );
}

export default MessageInput;
