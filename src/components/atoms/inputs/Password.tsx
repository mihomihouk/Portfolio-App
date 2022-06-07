import React from "react";

//styles
import { TextField } from "@mui/material";

const Password = ({ value, onChange }) => {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        helperText=""
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Password;
