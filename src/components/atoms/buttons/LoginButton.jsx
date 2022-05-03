import React from "react";
import { Button } from "@mui/material";

const LoginButton = ({ isPending, action, onClick }) => {
  return (
    <>
      {isPending ? (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled
        >
          {action}
        </Button>
      ) : (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onClick}
        >
          {action}
        </Button>
      )}
    </>
  );
};

export default LoginButton;
