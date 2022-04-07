import { useRouter } from "next/router"
import React,{useState} from "react"

//styles
import { Chip, Divider, Box, Typography, List, Stack, Container } from "@mui/material"
import LightbulbIcon from '@mui/icons-material/Lightbulb'

//components
import Header from "../../src/components/organisms/Header"
import EditButton from "../../src/components/atoms/buttons/EditButton"
import Sidebar from "../../src/components/organisms/Sidebar"
import DiscussionCard from "../../src/components/modules/DiscussionCard"
import CommentCard from "../../src/components/modules/CommentCard"
import CommentModal from "../../src/components/organisms/modals/CommentModal"
import Title from "../../src/components/atoms/inputs/Title"
import UpdateButton from "../../src/components/atoms/buttons/UpdateButton"
import CancelButton from "../../src/components/atoms/buttons/CancelButton"
import Detail from "../../src/components/atoms/inputs/Detail"
import CategorySelector from "../../src/components/atoms/selectors/CategorySelector"

const About = () => {
  const router = useRouter()

  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [isEditingDetail, setIsEditingDetail] = useState(false)
  const [isEditingComment, setIsEditingComment] = useState(false)
  
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value)
  }


  return(
    <>
      <Box>
        <Box>
          <Header/>
        </Box>
        <Container maxWidth="md" sx={{pt:9, px:8, display:"flex", flexDirection:"column", width:"100%"}}>
          <Box>
            <Sidebar/>
          </Box>
          <Stack spacing={1}>
            <Box sx={{display:"flex", justifyContent: "space-between", alignItems: "center", height:"10%"}}>
              <Box sx={{display:"flex", alignItems: "center"}}>
              {!isEditingTitle ? (
                <>
                  <Box>
                    <LightbulbIcon fontSize="large"/>
                  </Box>
                  <Box sx={{px:2}}>
                    <Typography variant="h4" component="h2">Title</Typography>
                  </Box>
                  <Box>
                    <EditButton onClick={()=>setIsEditingTitle(true)}/>
                  </Box>
                  
                </>
              ):
              (
                <>
                  <Stack spacing={1}>
                    <Box>
                      <CategorySelector onChange={handleChange} category={category}/>
                    </Box>
                    <Box sx={{display:"flex"}}>
                      <Box sx={{width:"100%"}}>
                        <Title size="small"/>
                      </Box>
                      <Box sx={{display: "flex",justifyContent:"flex-end",px:2}}>
                        <Box sx={{mr:2}}>
                          <UpdateButton onClick={()=>setIsEditingTitle(false)}/>
                        </Box>
                        <Box>
                          <CancelButton onClick={()=>setIsEditingTitle(false)}/>
                        </Box>
                      </Box>
                    </Box>
                  </Stack>
                </>
              )
              }
              </Box>
              <Box>
                <CommentModal/>
              </Box>
            </Box>
            {!isEditingDetail? (
              <>
                <Box sx={{height:"20%"}}>
                  <DiscussionCard onClick={()=>setIsEditingDetail(true)}/>
                </Box>
              </>
            ):(
              <>
                <Stack spacing={2}>
                  <Box>
                    <Detail rows={5}/> 
                  </Box>
                  <Box sx={{display:"flex", justifyContent: "flex-end"}}>
                    <Box>
                      <CancelButton onClick={()=>setIsEditingDetail(false)}/>
                    </Box>
                    <Box>
                      <UpdateButton　onClick={()=>setIsEditingDetail(false)}/>
                    </Box>
                  </Box>
                </Stack>
              </>
            )
            }
            <Divider variant="middle" sx={{pt:2}}>
              <Chip label="COMMENT" />
            </Divider>
            <Box container sx={{ pt: 3, height:"60%", width: "100%"}} >
              <List sx={{width: "100%"}}>
                {!isEditingComment ? (
                  <CommentCard onClick={()=>setIsEditingComment(true)}/>
                ):(
                  <Stack spacing={2}>
                    <Box>
                      <Detail rows={5}/> 
                    </Box>
                    <Box sx={{display:"flex", justifyContent: "flex-end"}}>
                      <Box>
                        <CancelButton onClick={()=>setIsEditingComment(false)}/>
                      </Box>
                      <Box>
                        <UpdateButton　onClick={()=>setIsEditingComment(false)}/>
                      </Box>
                    </Box>
                  </Stack>
                ) 
                }
              </List>
            </Box>
          </Stack>
          
        </Container>
      </Box>
    </>

  )

}

export default About