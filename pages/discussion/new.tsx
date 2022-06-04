import React from "react";
import { useRouter } from "next/router";

//firebase imports
import { db, auth } from "../../src/firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

//styles
import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

//components
import Header from "../../src/components/organisms/Header";
import Sidebar from "../../src/components/organisms/Sidebar";
import CancelButton from "../../src/components/atoms/buttons/CancelButton";
import CategorySelector from "../../src/components/atoms/selectors/CategorySelector";

//hooks
import useForm from "../../src/hooks/useForm";

const New = () => {
  const router = useRouter();

  const user = auth.currentUser;

  // call useForm
  const { formData, handleInputChange } = useForm({
    category: "",
    title: "",
    detail: "",
  });
  const { category, title, detail } = formData;

  //Add a new discussion doc
  const handleSubmit = async (e) => {
    e.preventDefault();

    const ref = collection(db, "discussions");

    await addDoc(ref, {
      title,
      detail,
      user: {
        id: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      category,
      createdAt: Timestamp.fromDate(new Date()),
      status: "Open",
      comments: [],
    });

    router.push("/discussion");
  };

  const handleCancel = () => {
    router.push("/discussion");
  };

  return (
    <>
      <Box>
        <Box>
          <Header />
        </Box>
        <Container
          maxWidth="lg"
          sx={{
            pt: 9,
            px: 8,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box>
            <Sidebar />
          </Box>
          <Stack spacing={2} sx={{ height: "100vh", pt: 3 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {"What's in your mind?"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <CategorySelector
                  onChange={handleInputChange}
                  category={category}
                />
              </Box>
              <Box sx={{ width: "70%" }}>
                <FormControl required size="small" sx={{ width: "100%" }}>
                  <Input
                    placeholder="Title"
                    onChange={handleInputChange}
                    name="title"
                  />
                </FormControl>
              </Box>
            </Box>
            <Box>
              <FormControl required sx={{ width: "100%" }}>
                <TextField
                  size="medium"
                  multiline
                  rows={7}
                  placeholder="Description"
                  variant="filled"
                  name="detail"
                  onChange={handleInputChange}
                />
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Box>
                <CancelButton onClick={handleCancel} />
              </Box>
              <Box>
                {!title || !category || !detail ? (
                  <Button
                    type="submit"
                    sx={{
                      color: "white",
                      bgcolor: "secondary.main",
                      fontWeight: "bold",
                    }}
                    disabled
                  >
                    Start Discussion
                  </Button>
                ) : (
                  <Button
                    type="submit"
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
                    onClick={handleSubmit}
                  >
                    Start Discussion
                  </Button>
                )}
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default New;
