import React,{useState} from 'react'
import { useRouter } from "next/router"

//firebase imports
import { db } from "../../src/firebase/config"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

//styles
import { Box, Button, Container, FormControl, Input, Stack, TextField, Typography } from '@mui/material'

//components
import Header from '../../src/components/organisms/Header'
import Sidebar from '../../src/components/organisms/Sidebar'
import CancelButton from '../../src/components/atoms/buttons/CancelButton'
import CategorySelector from "../../src/components/atoms/selectors/CategorySelector"


function New() {
  const router = useRouter()

  const [newTitle, setNewTitle] = useState("")
  const [newDetail, setNewDetail] = useState("")
  const [newCategory, setNewCategory] = useState("")


  const handleSubmit = async(e) => {
    e.preventDefault()

    const ref = collection(db, "discussions")

    try { 
      await addDoc(ref, {
      title: newTitle, 
      detail: newDetail,
      category: newCategory,
      createdAt: serverTimestamp()
      })

      setNewTitle("")
      setNewDetail("")
      setNewCategory("")
      router.push("/discussion")

    } catch(err) {
      console.log(err)
    }

  }

  const handleCancel = () => {
    setNewTitle("")
    setNewDetail("")
    setNewCategory("")
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
                <CategorySelector onChange={(e) => setNewCategory(e.target.value)} category={newCategory}/>
              </Box>
              <Box sx={{width:"70%"}}>
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
            </Box>
            <Box>
              <FormControl 
                required
                size="large"
                sx={{width:"100%"}}
                >
                <TextField
                  multiline
                  rows={7}
                  placeholder="Description"
                  variant="filled"
                  onChange={(e) => setNewDetail(e.target.value)}
                />
              </FormControl>
            </Box>
            <Box sx={{display:"flex", justifyContent:"flex-end"}}>
              <Box>
                <CancelButton onClick={handleCancel} />
              </Box>
              <Box>
                <Button
                  type="submit"
                  sx={{
                  color:"white", 
                  bgcolor: "#f57f17",
                  fontWeight:"bold", 
                  ":hover":{ bgcolor:"#ffb04c"}
                  }}
                  onClick={handleSubmit}
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