import { Button } from "@mui/material";
import React from "react";

const UpdateButton = (props) => {
  const { onClick } = props;

  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ fontWeight: "bold" }}
        onClick={onClick}
      >
        Update
      </Button>
    </>
  );
};

export default UpdateButton;
