import React,{ useState } from 'react'
import { useSignup } from "../src/hooks/useSignup"

//styles
import { Box, Grid, Paper, Typography } from '@mui/material' 

//components
import LoginButton from '../src/components/atoms/buttons/LoginButton'
import CopyRight from '../src/components/atoms/CopyRight'
import UserName from '../src/components/atoms/inputs/UserName'
import Password from '../src/components/atoms/inputs/Password'
import Email from '../src/components/atoms/inputs/Email'
import ProfileThumbnail from '../src/components/atoms/inputs/ProfileThumbnail' 

function Signup() {

  const { error, signup } = useSignup()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password)
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
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <UserName/>
              <Email value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Password value={password} onChange={(e) => setPassword(e.target.value)}/>
              <ProfileThumbnail/>
              <LoginButton action="Sign up" onClick={handleSubmit}/>
              {error && <Typography>{error}</Typography>}
              <CopyRight sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Signup