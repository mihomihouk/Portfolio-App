import React from "react";

//styles
import { TextField } from "@mui/material";

const Email = ({ value, onChange }) => {
  return (
    <>
      <TextField
        required
        fullWidth
        label="Email Address"
        name="email"
        autoComplete="email"
        helperText=""
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Email;
