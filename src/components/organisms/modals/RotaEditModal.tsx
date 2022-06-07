import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

//styles
import {
  Avatar,
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  Stack,
} from "@mui/material";
import CloseButton from "../../atoms/buttons/CloseButton";
import CancelButton from "../../atoms/buttons/CancelButton";

//hooks
import useForm from "../../../hooks/useForm";

const RotaEditModal = ({ open, handleClose, user }) => {
  // call useForm
  const { formData, handleInputChange } = useForm({
    category: "",
  });
  const { category } = formData;

  const handleSaveRota = async () => {
    try {
      const docRef = doc(db, "users", user.id);
      await updateDoc(docRef, {
        duty: category,
      });
      handleClose();
    } catch (error) {
      console.error(error);
      handleClose();
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Stack
          spacing={2}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "40%",
            overflow: "scroll",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: "3%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <CloseButton onClick={handleClose} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ pr: 2 }}>
              <Avatar
                src={user.photoURL}
                sx={{ width: "40px", height: "40px" }}
              />
            </Box>
            <Box>
              <Select
                sx={{ width: 170, height: 30 }}
                value={category}
                displayEmpty
                defaultValue="Area"
                onChange={handleInputChange}
                name="category"
              >
                <MenuItem disabled value="">
                  Area
                </MenuItem>
                <MenuItem value="Corridor">Corridors</MenuItem>
                <MenuItem value="Kitchen">Kitchen</MenuItem>
                <MenuItem value="Dining Room">Dining Room</MenuItem>
                <MenuItem value="Toilet">Toilet</MenuItem>
                <MenuItem value="Bathroom">Bathroom</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box sx={{ pl: 1 }}>
              <CancelButton onClick={handleClose} />
            </Box>
            <Box>
              {!category ? (
                <Button variant="contained" disabled>
                  save
                </Button>
              ) : (
                <Button variant="contained" onClick={handleSaveRota}>
                  save
                </Button>
              )}
            </Box>
          </Box>
        </Stack>
      </Modal>
    </>
  );
};

export default RotaEditModal;
