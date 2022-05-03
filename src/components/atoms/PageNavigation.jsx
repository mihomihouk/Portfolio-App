//styles
import Link from "../../Link";
import { Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const PageNavigation = ({ path }) => {
  return (
    <Box display="flex" pt={2}>
      <Box mr={2}>
        <Link href={path}>
          <ArrowBackIosNewIcon size="lg" />
        </Link>
      </Box>
      <Typography>Discussion List</Typography>
    </Box>
  );
};

export default PageNavigation;
