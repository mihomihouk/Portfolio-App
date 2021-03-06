import React, { useState } from "react";
import { useLogin } from "../src/hooks/useLogin";

//styles
import { Box, Grid, Paper, Typography } from "@mui/material";

//components
import LoginButton from "../src/components/atoms/buttons/LoginButton";
import CopyRight from "../src/components/atoms/CopyRight";
import Password from "../src/components/atoms/inputs/Password";
import Email from "../src/components/atoms/inputs/Email";
import Link from "../src/Link";

//hooks
import useForm from "../src/hooks/useForm";

const Login = () => {
  const { error, isPending, login } = useLogin();

  const { formData, handleInputChange } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(email, password);
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
              Log in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Email value={email} onChange={handleInputChange} />
              <Password value={password} onChange={handleInputChange} />
              {!isPending && (
                <LoginButton
                  isPending={isPending}
                  action="Login"
                  onClick={handleSubmit}
                />
              )}
              {isPending && (
                <LoginButton isPending={isPending} action="Logging in" />
              )}
              {error && <Typography>{error}</Typography>}
              <Box sx={{ textAlign: "center" }}>
                <Link href="/signup" variant="body2">
                  <Typography variant="body2" component="span">
                    {"Don't have an account? Sign Up"}
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ mt: 2 }}>
                <CopyRight />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
