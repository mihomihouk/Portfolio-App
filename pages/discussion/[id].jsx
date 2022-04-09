import { useRouter } from "next/router"
import React,{useState} from "react"
import { useDocument } from "../../src/hooks/useDocument"
import { db } from "../../src/firebase/config"

//firebase
import { doc, updateDoc } from "firebase/firestore"

//styles
import { Chip, Divider, Box, Typography, List, Stack, Container, FormControl, Input } from "@mui/material"
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import CampaignIcon from '@mui/icons-material/Campaign'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'

//components
import Header from "../../src/components/organisms/Header"
import EditButton from "../../src/components/atoms/buttons/EditButton"
import Sidebar from "../../src/components/organisms/Sidebar"
import DiscussionCard from "../../src/components/modules/DiscussionCard"
import CommentCard from "../../src/components/modules/CommentCard"
import CommentModal from "../../src/components/organisms/modals/CommentModal"
import UpdateButton from "../../src/components/atoms/buttons/UpdateButton"
import CancelButton from "../../src/components/atoms/buttons/CancelButton"
import Detail from "../../src/components/atoms/inputs/Detail"
import CategorySelector from "../../src/components/atoms/selectors/CategorySelector"



const DiscussionIcon = ({document}) => {
  switch (document.category){
    case 1:
      return <CampaignIcon fontSize="large"/>;
    case 2:
      return <TipsAndUpdatesIcon fontSize="large"/>;
    case 3:
      return <QuestionMarkIcon fontSize="large"/>;
    default:
      return null;
  }
}


const About = () => {
  const router = useRouter()
  const { id } = router.query

  const { error, document } = useDocument("discussions", id)

  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [isEditingDetail, setIsEditingDetail] = useState(false)
  const [isEditingComment, setIsEditingComment] = useState(false)
  
  const [newTitle, setNewTitle] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [newDetail, setNewDetail] = useState('')

  if (error) {
    return <Typography>{error}</Typography>
  }
  if (!document) {
    return <Typography>Loading...</Typography>
  }

  const handleChangeCategory = (event) => {
    setNewCategory(event.target.value)
  }

  const handleUpdateTitle = async(e) => {
    e.preventDefault()

    const docRef = doc(db, "discussions", id)

    await updateDoc(docRef, {
      title: newTitle,
      category: newCategory
    })

    setIsEditingTitle(false)

    setNewTitle("")
    setNewCategory("")
  }

  const handleCancelTitle = () => {
    setNewTitle("")
    setNewCategory("")
    setIsEditingTitle(false)
  }

  const handleUpdateDetail = async(e) => {
    e.preventDefault()
    
    const docRef = doc(db, "discussions", id)

    await updateDoc(docRef, {
      detail: newDetail
    })
    
    setNewDetail("")
    setIsEditingDetail(false)
  }

  const handleCancelDetail = () => {
    setNewDetail("")
    setIsEditingDetail(false)

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
              <Box sx={{display:"flex", alignItems: "center", width: "70%"}}>
              {!isEditingTitle ? (
                <>
                  <Box>
                    <DiscussionIcon document={document}/>
                  </Box>
                  <Box sx={{px:2}}>
                    <Typography variant="h4" component="h2">{document.title}</Typography>
                  </Box>
                  <Box>
                    <EditButton onClick={()=>setIsEditingTitle(true)}/>
                  </Box>
                  
                </>
              ):
              (
                <>
                  <Stack spacing={1} sx={{width:"100%"}}>
                    <Box>
                      <FormControl
                        required
                      >
                        <CategorySelector onChange={handleChangeCategory} category={newCategory}/>
                      </FormControl>
                    </Box>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                      <Box sx={{width:"100%"}}>
                        <FormControl
                          required
                          size="small"
                          sx={{width:"100%"}}
                        >
                            <Input
                              placeholder="Title"
                              onChange={(e) => setNewTitle(e.target.value)}
                            />
                        </FormControl>
                      </Box>
                      <Box sx={{display: "flex",justifyContent:"flex-end",px:2}}>
                        <Box sx={{mr:2}}>
                          <UpdateButton onClick={handleUpdateTitle}/>
                        </Box>
                        <Box>
                          <CancelButton onClick={handleCancelTitle}/>
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
                  <DiscussionCard onClick={()=>setIsEditingDetail(true)} document={document}/>
                </Box>
              </>
            ):(
              <>
                <Stack spacing={2}>
                  <Box>
                    <Detail rows={5} onChange={(e) => setNewDetail(e.target.value)}/> 
                  </Box>
                  <Box sx={{display:"flex", justifyContent: "flex-end"}}>
                    <Box>
                      <CancelButton onClick={handleCancelDetail}/>
                    </Box>
                    <Box>
                      <UpdateButton　onClick={handleUpdateDetail}/>
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