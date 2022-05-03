import React from "react";
import Link from "next/link";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

//styles
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

//components
import DiscussionIcon from "../atoms/DiscussionIcon";

const DiscussionList = ({ discussions, error, isPending }) => {
  return (
    <>
      {isPending && <Typography>Loading...</Typography>}
      {error && <Typography>{error}</Typography>}
      {!isPending && discussions.length === 0 && (
        <Typography>No projects yet!</Typography>
      )}
      {discussions && (
        <List sx={{ height: "20%", width: "100%" }}>
          {discussions.map((item) => (
            <ListItem
              key={item.id}
              sx={{ opacity: item.status === "settled" && 0.4 }}
            >
              <Link href={`/discussion/${item.id}`}>
                <Paper sx={{ height: "100%", width: "100%" }}>
                  <ListItemText>
                    <Box sx={{ display: "flex", pl: 1, alignItems: "center" }}>
                      <DiscussionIcon document={item} />
                      <Typography variant="h5" component="h3" sx={{ px: 2 }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </ListItemText>
                  <Divider />
                  <ListItemText>
                    <Typography variant="body2" component="span" sx={{ px: 2 }}>
                      {item.user.displayName} started{" "}
                      {formatDistanceToNow(item.createdAt.toDate(), {
                        addSuffix: true,
                      })}
                    </Typography>
                  </ListItemText>
                </Paper>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default DiscussionList;
