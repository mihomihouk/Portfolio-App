import Link from '../src/Link'

//styles
import { AppBar, Button, Container,Stack, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system"


export default function Home() {
  return (
   <>
    <Box sx={{bgcolor:"primary.main"}}>
      <Box>
        <AppBar position="absolute" >
          <Toolbar>
            <Box sx={{display:"flex", justifyContent:"flex-end",alignItems:"center", width:"100%"}}>
              <Box sx={{px:2}}>
                <Link href="/login" sx={{textDecoration:"none"}}>
                  <Button color="secondary">Login</Button>
                </Link>
              </Box>
              <Box>
                <Link href="/signup" sx={{textDecoration:"none"}}>
                  <Button color="secondary" sx={{
                    bgcolor:"white", 
                    '&:hover':{ 
                      bgcolor:"primary",
                      border: "2px white solid"
                    }
                  }}
                  >Signup</Button>
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg" sx={{pt:9, px:4, height:"100vh" }}>
        <Box sx={{py:20, height:"100%"}}>
          <Stack>
            <Box sx={{m:"auto"}}>
              <Typography variant="h1" fontWeight="bold" color="secondary">tadaima</Typography>
            </Box>
            <Box sx={{m:"auto"}}>
              <Typography variant="h4" color="white">Share Events and Discuss with your Housemates.</Typography>
            </Box>
            <Box sx={{m:"auto"}}>
              <Typography variant="h4" color="white">For Better Life. <Typography variant="h4" component="span" color="secondary">For Lovely Home.</Typography></Typography>
            </Box>
          </Stack>
        </Box>
      </Container> 
    </Box>
   </>
  )
}
