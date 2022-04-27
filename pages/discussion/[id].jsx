import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDocument } from "../../src/hooks/useDocument";
import { db } from "../../src/firebase/config";

//firebase
import { doc, updateDoc } from "firebase/firestore";

//styles
import {
  Button,
  Chip,
  Divider,
  Box,
  Typography,
  List,
  Stack,
  Container,
  FormControl,
  Input,
} from "@mui/material";

//components
import Header from "../../src/components/organisms/Header";
import EditButton from "../../src/components/atoms/buttons/EditButton";
import Sidebar from "../../src/components/organisms/Sidebar";
import DiscussionCard from "../../src/components/modules/DiscussionCard";
import CommentCard from "../../src/components/modules/CommentCard";
import CommentModal from "../../src/components/organisms/modals/CommentModal";
import UpdateButton from "../../src/components/atoms/buttons/UpdateButton";
import CancelButton from "../../src/components/atoms/buttons/CancelButton";
import Detail from "../../src/components/atoms/inputs/Detail";
import CategorySelector from "../../src/components/atoms/selectors/CategorySelector";
import DiscussionIcon from "../../src/components/atoms/DiscussionIcon";

const About = () => {
  const router = useRouter();
  const { id } = router.query;

  const { document, isPending, error } = useDocument("discussions", id);

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDetail, setIsEditingDetail] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDetail, setNewDetail] = useState("");

  const [open, setOpen] = useState(true);

  const handleChangeCategory = (event) => {
    setNewCategory(event.target.value);
  };

  const handleUpdateTitle = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "discussions", id);

    await updateDoc(docRef, {
      title: newTitle,
      category: newCategory,
    });

    setIsEditingTitle(false);

    setNewTitle("");
    setNewCategory("");
  };

  const handleCancelTitle = () => {
    setNewTitle("");
    setNewCategory("");
    setIsEditingTitle(false);
  };

  const handleUpdateDetail = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "discussions", id);

    await updateDoc(docRef, {
      detail: newDetail,
    });

    setNewDetail("");
    setIsEditingDetail(false);
  };

  const handleCancelDetail = () => {
    setNewDetail("");
    setIsEditingDetail(false);
  };

  const handleCloseDiscussion = async (e) => {
    e.preventDefault();

    setOpen(!open);

    const docRef = doc(db, "discussions", id);

    await updateDoc(docRef, {
      status: "settled",
    });
  };

  const handleReopenDiscussion = async (e) => {
    e.preventDefault();

    setOpen(!open);

    const docRef = doc(db, "discussions", id);

    await updateDoc(docRef, {
      status: "open",
    });
  };

  return (
    <>
      <Box>
        <Box>
          <Header />
        </Box>
        <Container
          maxWidth="md"
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
          {isPending && <Typography>Loading...</Typography>}
          {error && <Typography>{error}</Typography>}
          {document && (
            <Stack spacing={1}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "10%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {!isEditingTitle ? (
                    <>
                      <Box>
                        <DiscussionIcon document={document} />
                      </Box>
                      <Box sx={{ px: 2 }}>
                        <Typography variant="h4" component="h2">
                          {document.title}
                        </Typography>
                      </Box>
                      <Box>
                        <EditButton onClick={() => setIsEditingTitle(true)} />
                      </Box>
                    </>
                  ) : (
                    <>
                      <Stack spacing={1} sx={{ width: "100%" }}>
                        <Box>
                          <FormControl required>
                            <CategorySelector
                              onChange={handleChangeCategory}
                              category={newCategory}
                            />
                          </FormControl>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box sx={{ width: "100%" }}>
                            <FormControl
                              required
                              size="small"
                              sx={{ width: "100%" }}
                            >
                              <Input
                                placeholder="Title"
                                onChange={(e) => setNewTitle(e.target.value)}
                              />
                            </FormControl>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              px: 2,
                            }}
                          >
                            <Box sx={{ mr: 2 }}>
                              <UpdateButton onClick={handleUpdateTitle} />
                            </Box>
                            <Box>
                              <CancelButton onClick={handleCancelTitle} />
                            </Box>
                          </Box>
                        </Box>
                      </Stack>
                    </>
                  )}
                </Box>
                <Box>
                  <CommentModal document={document} />
                </Box>
              </Box>
              {!isEditingDetail ? (
                <>
                  <Box sx={{ height: "20%" }}>
                    <DiscussionCard
                      onClick={() => setIsEditingDetail(true)}
                      document={document}
                    />
                  </Box>
                </>
              ) : (
                <>
                  <Stack spacing={2}>
                    <Box>
                      <Detail
                        rows={5}
                        onChange={(e) => setNewDetail(e.target.value)}
                      />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Box>
                        <CancelButton onClick={handleCancelDetail} />
                      </Box>
                      <Box>
                        <UpdateButton onClick={handleUpdateDetail} />
                      </Box>
                    </Box>
                  </Stack>
                </>
              )}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {open ? (
                  <Button onClick={handleCloseDiscussion}>
                    Close This Discussion
                  </Button>
                ) : (
                  <Button onClick={handleReopenDiscussion}>
                    Reopen This Discussion
                  </Button>
                )}
              </Box>
              <Divider variant="middle" sx={{ pt: 2 }}>
                <Chip label="COMMENT" />
              </Divider>
              <Box container sx={{ pt: 3, height: "60%", width: "100%" }}>
                <List sx={{ width: "100%" }}>
                  <CommentCard
                    document={document}
                    error={error}
                    isPending={isPending}
                  />
                </List>
              </Box>
            </Stack>
          )}
        </Container>
      </Box>
    </>
  );
};

export default About;
