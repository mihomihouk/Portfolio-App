import React, { useState } from 'react'
import { useLogin } from "../src/hooks/useLogin"

//styles
import { Box, Grid, Link, Paper, Typography } from '@mui/material' 

//components
import LoginButton from '../src/components/atoms/buttons/LoginButton'
import CopyRight from '../src/components/atoms/CopyRight'
import Password from '../src/components/atoms/inputs/Password'
import Email from '../src/components/atoms/inputs/Email'


function Login() {

  const { login, error } = useLogin()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }
  
  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" >
              Log in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Email/>
              <Password/>
              <LoginButton action="Login" onClick={handleSubmit}/>
              {error && <Typography>{error}</Typography>}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <CopyRight sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Login