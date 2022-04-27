import React from "react";

//styles
import { TextField } from "@mui/material";

function Password(props) {
  const { value, onChange } = props;

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
}

export default Password;
