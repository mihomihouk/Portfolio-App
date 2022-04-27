import React from "react";
import { useLogout } from "../../../hooks/useLogout";
import { auth } from "../../../firebase/config";

//styles
import { Avatar, Box, Modal, Stack, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const ProfileCard = (props) => {
  const user = auth.currentUser;
  const { open, handleClose } = props;
  const { logout, isPending } = useLogout();

  return (
    <Modal open={open} onClose={handleClose}>
      <Stack
        spacing={4}
        sx={{
          position: "absolute",
          top: "35%",
          left: "75%",
          transform: "translate(-50%,-50%)",
          width: "40%",
          height: "50%",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: "3%",
          m: "auto",
          textAlign: "center",
        }}
      >
        <Box sx={{ mx: "auto" }}>
          {user && (
            <Avatar
              sx={{ width: "100px", height: "100px" }}
              src={user.photoURL}
            />
          )}
        </Box>
        <Box>
          {user && <Typography variant="h5">{user.displayName}</Typography>}
        </Box>
        <Box>
          {!isPending && (
            <Button
              startIcon={<LogoutIcon />}
              color="error"
              sx={{
                color: "primary",
                borderRadius: "12px",
                px: 2,
              }}
              variant="outlined"
              onClick={logout}
            >
              Logout
            </Button>
          )}
          {isPending && (
            <Button
              startIcon={<LogoutIcon />}
              color="error"
              sx={{
                color: "#f57f17",
                borderRadius: "12px",
                px: 2,
              }}
              variant="outlined"
              disabled
            >
              Logging out...
            </Button>
          )}
        </Box>
      </Stack>
    </Modal>
  );
};
export default ProfileCard;
