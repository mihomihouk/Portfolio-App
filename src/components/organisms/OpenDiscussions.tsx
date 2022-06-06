import React from "react";

//styles
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Link from "../../Link";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

//hooks
import { useCollection } from "../../hooks/useCollection";
import DiscussionIcon from "../atoms/DiscussionIcon";

const CalendarCard = () => {
  const { documents, error, isPending } = useCollection(
    "discussions",
    ["createdAt", "desc"],
    3,
    ["status", "==", "Open"]
  );

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 1,
          }}
        >
          <Typography variant="h5" component="h2">
            Open Discussions
          </Typography>
          <Link href="/discussion" sx={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "gray", color: "white", fontWeight: "bold" }}
              endIcon={<KeyboardArrowRightIcon />}
            >
              {"View"}
            </Button>
          </Link>
        </Box>
        <Card raised sx={{ borderRadius: "25px" }}>
          <CardContent>
            {isPending && <Typography>Loading...</Typography>}
            {error && <Typography>{error}</Typography>}
            {!isPending && !documents && (
              <Typography>No projects yet!</Typography>
            )}
            {documents && (
              <List sx={{ height: "20%", width: "100%" }}>
                {documents.map((item) => (
                  <ListItem
                    key={item.id}
                    sx={{ opacity: item.status === "Settled" && 0.4 }}
                  >
                    <Paper sx={{ height: "100%", width: "100%" }}>
                      <ListItemText>
                        <Box
                          sx={{ display: "flex", pl: 1, alignItems: "center" }}
                        >
                          <DiscussionIcon document={item} />
                          <Typography
                            variant="h5"
                            component="h3"
                            sx={{ px: 2 }}
                          >
                            {item.title}
                          </Typography>
                        </Box>
                      </ListItemText>
                      <Divider />
                      <ListItemText>
                        <Typography
                          variant="body2"
                          component="span"
                          sx={{ px: 2 }}
                        >
                          {item.user.displayName} started{" "}
                          {formatDistanceToNow(item.createdAt.toDate(), {
                            addSuffix: true,
                          })}
                        </Typography>
                      </ListItemText>
                    </Paper>
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CalendarCard;
