import React from "react";

//styles
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateButton = (props) => {
  const { onClick, title } = props;

  return (
    <>
      <Button
        startIcon={<AddIcon />}
        sx={{
          color: "white",
          bgcolor: "secondary.main",
          fontWeight: "bold",
          ":hover": {
            bgcolor: "white",
            color: "secondary.main",
            border: "2px gray solid",
          },
        }}
        onClick={onClick}
      >
        {title}
      </Button>
    </>
  );
};

export default CreateButton;
