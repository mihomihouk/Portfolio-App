import React from "react";

//styles
import { TextField } from "@mui/material";

function Detail(props) {
  const { size, rows, text, value, onChange } = props;

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
}

export default Detail;
