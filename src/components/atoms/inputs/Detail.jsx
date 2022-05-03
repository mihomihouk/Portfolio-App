import React from "react";

//styles
import { TextField } from "@mui/material";

const Detail = ({ size, rows, text, value, onChange }) => {
  return (
    <>
      <TextField
        size={size}
        label={text}
        multiline
        rows={rows}
        fullWidth
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Detail;
