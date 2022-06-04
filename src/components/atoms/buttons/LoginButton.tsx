import React from "react";
import { Button } from "@mui/material";
interface LoginButtonProps {
  isPending?: boolean;
  action?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LoginButton = ({ isPending, action, onClick }: LoginButtonProps) => {
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
