import React from "react";
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

//hooks
import useForm from "../src/hooks/useForm";
import { useThumbnail } from "../src/hooks/useThumbnail";

const Signup = () => {
  const { error, isPending, signup } = useSignup();

  const { formData, handleInputChange } = useForm({
    displayName: "",
    email: "",
    password: "",
  });

  const { displayName, email, password } = formData;

  const { thumbnail, handleFileChange, thumbnailError } = useThumbnail();

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
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
              <UserName value={displayName} onChange={handleInputChange} />
              <Email value={email} onChange={handleInputChange} />
              <Password value={password} onChange={handleInputChange} />
              <ProfileThumbnail
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFileChange(e)
                }
              />
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
};

export default Signup;
