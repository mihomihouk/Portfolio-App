import React from 'react'
import { useRouter } from "next/router"
import { useCollection } from "../../src/hooks/useCollection"

//styles
import { Container, Box, Stack } from '@mui/material'

//components
import Header from '../../src/components/organisms/Header'
import CategoryFilter from "../../src/components/atoms/filters/CategoryFilter"
import StatusFilter from "../../src/components/atoms/filters/StatusFilter"
import CreateButton from "../../src/components/atoms/buttons/CreateButton"
import Searchbar from "../../src/components/atoms/Searchbar"
import DiscussionList from "../../src/components/organisms/DiscussionList"
import Sidebar from "../../src/components/organisms/Sidebar"


function index() {

  const router = useRouter()

  const { documents: discussions } = useCollection("discussions")


  const handleClick = (e) => {
    e.preventDefault()
    router.push("/discussion/new")
  }


  return (
    <>
      <Box>
        <Box>
          <Header/>
        </Box>
        <Container maxWidth="lg" sx={{pt:10, px:8, display:"flex", flexDirection:"column", width:"100%"}}>
          <Box>
            <Sidebar/>
          </Box>
          <Stack spacing={1}>
            <Box sx={{display:"flex", justifyContent: "space-between", aligns: "center", height:"10%"}} >
              <Box sx={{display:"flex"}}>
                <Box sx={{px: 1}}>
                  <CategoryFilter/>
                </Box>
                <Box>
                  <StatusFilter/>
                </Box>
              </Box>
              <Box>
                <CreateButton
                  title="New Discussion"
                  onClick={handleClick}
                /> 
              </Box>
            </Box>
            <Box sx={{height:"10%"}}>
              <Searchbar/>
            </Box>
            <Box sx={{height: "80%"}}>
              {discussions && <DiscussionList discussions={discussions}/>}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default index