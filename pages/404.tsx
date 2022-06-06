//styles
import Link from "../src/Link";
import { Box, Button, Container, Typography } from "@mui/material";
import Header from "../src/components/organisms/Header";

const NotFound = () => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Container sx={{ pt: 30, px: 4, textAlign: "center" }}>
        <Typography variant="h3" component="h1">
          Not Found
        </Typography>
        <Typography mb={2}>
          The page you&apos;re looking for was not found.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Link href="/dashboard" sx={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              Return to home
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
