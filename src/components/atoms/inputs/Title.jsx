import React from "react";

//styles
import { TextField } from "@mui/material";

const Title = ({ title, size, onChange }) => {
  return (
    <>
      <TextField
        size={size}
        required
        fullWidth
        label="Title"
        name="title"
        value={title}
        autoFocus
        onChange={onChange}
      />
    </>
  );
};

export default Title;
