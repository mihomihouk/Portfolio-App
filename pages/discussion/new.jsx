import React,{useState} from 'react'
import { useRouter } from "next/router"

//styles
import { Box, Button, Container, Stack, Typography } from '@mui/material'

//components
import Header from '../../src/components/organisms/Header'
import Sidebar from '../../src/components/organisms/Sidebar'
import Title from '../../src/components/atoms/inputs/Title'
import Detail from '../../src/components/atoms/inputs/Detail'
import CancelButton from '../../src/components/atoms/buttons/CancelButton'
import CategorySelector from "../../src/components/atoms/selectors/CategorySelector"

function New() {

  const [category, setCategory] = useState('')

  const router = useRouter()

  const handleChange = (event) => {
    setCategory(event.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push("/discussion")
  }

  return (
    <>
      <Box>
        <Box>
          <Header/>
        </Box>
        <Container maxWidth="lg" sx={{pt:9, px:8, display:"flex", flexDirection:"column", width:"100%"}}>
          <Box>
            <Sidebar/>
          </Box>
          <Stack spacing={2} sx={{height: "100vh", pt:3}} >
            <Box>
              <Typography variant="h5" sx={{fontWeight:"bold"}}>What's in your mind?</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <Box> 
                <CategorySelector onChange={handleChange} category={category}/>
              </Box>
              <Box sx={{width:"70%"}}>
                <Title size={"small"}/>
              </Box>
            </Box>
            <Box>
              <Detail size="large" rows={7}/>
            </Box>
            <Box sx={{display:"flex", justifyContent:"flex-end"}}>
              <Box>
                <CancelButton onClick={handleClick} />
              </Box>
              <Box>
                <Button
                  sx={{
                  color:"white", 
                  bgcolor: "#f57f17",
                  fontWeight:"bold", 
                  ":hover":{ bgcolor:"#ffb04c"}
                  }}
                  onClick={handleClick}
                >
                  Start Discussion
                </Button>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default New