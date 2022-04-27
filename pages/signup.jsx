import React, { useState } from "react";
import { useSignup } from "../src/hooks/useSignup";

//styles
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

//components
import LoginButton from "../src/components/atoms/buttons/LoginButton";
import CopyRight from "../src/components/atoms/CopyRight";
import UserName from "../src/components/atoms/inputs/UserName";
import Password from "../src/components/atoms/inputs/Password";
import Email from "../src/components/atoms/inputs/Email";
import ProfileThumbnail from "../src/components/atoms/inputs/ProfileThumbnail";
import Link from "../src/Link";

function Signup() {
  const { error, isPending, signup } = useSignup();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState("");

  const handleFileChange = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Stack component="form" spacing={2} noValidate sx={{ mt: 2 }}>
              <UserName
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
              <Email value={email} onChange={(e) => setEmail(e.target.value)} />
              <Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ProfileThumbnail onChange={handleFileChange} />
              {thumbnailError && <Typography>{thumbnailError}</Typography>}
              {!isPending && (
                <LoginButton action="Sign up" onClick={handleSubmit} />
              )}
              {isPending && (
                <LoginButton isPending={isPending} action="Loading" />
              )}
              {error && <Typography>{error}</Typography>}
              <Box sx={{ textAlign: "center" }}>
                <Link href="/login" variant="body2">
                  <Typography variant="body2" component="span">
                    {"Already have an account? Log In"}
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ mt: 2 }}>
                <CopyRight />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Signup;
