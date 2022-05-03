import React from "react";

//styles
import { TextField } from "@mui/material";

const MessageInput = () => {
  return (
    <>
      <TextField
        variant="standard"
        label="type your message"
        sx={{ width: 1 }}
      />
    </>
  );
};

export default MessageInput;
