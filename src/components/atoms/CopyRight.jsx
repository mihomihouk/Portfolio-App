import React from "react";

//styles
import { Typography, Link } from "@mui/material";

const CopyRight = () => {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/mihomihouk">
          miho
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
};

export default CopyRight;
