import React,{ useState } from 'react'
import formatDistanceToNow from "date-fns/formatDistanceToNow"

//firebase 
import { auth, db } from "../../firebase/config"
import { doc, updateDoc, Timestamp } from "firebase/firestore"

//styles
import { Avatar, Box, List, ListItemAvatar, ListItemText, ListItem, Paper, Stack, Typography } from "@mui/material"

//components
import EditButton from "../atoms/buttons/EditButton"
import DeleteButton from "../atoms/buttons/DeleteButton"
import Detail from "../atoms/inputs/Detail"
import CancelButton from '../atoms/buttons/CancelButton'
import UpdateButton from '../atoms/buttons/UpdateButton'

function CommentCard(props) {

  const { document, isPending, error } = props

  const [isEditingComment, setIsEditingComment] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [editingCommentId, setEditingCommentId] = useState("")

  const user = auth.currentUser

  const handleEditComment = (id) => {
    setEditingCommentId(id)
    setIsEditingComment(true)
  }


  const handleDelete = async(id) => {

    const ref = doc(db, "discussions", document.id)
    const newComments = document.comments.filter(comment=> comment.id !== id)

    await updateDoc(ref, {
      comments: newComments
    })

  }

  const handleCancelComment = () => {
    setEditingCommentId("")
    setNewComment("")
    setIsEditingComment(false)
  }

  const handleUpdateComment = async() => {

    const ref = doc(db, "discussions", document.id)
    const newComments = document.comments.map(comment => (
      comment.id === editingCommentId ? {...comment, content: newComment, updatedAt: Timestamp.fromDate(new Date())} : comment 
    ))

    await updateDoc(ref, {
      comments: newComments
    })

    setEditingCommentId("")
    setNewComment("")
    setIsEditingComment(false)
  }

  return (
    <>
    {isPending && <Typography>Loading...</Typography>}
    {error&& <Typography>{error}</Typography>}
    {!isPending && document.comments.length ===0 && <Typography>No comments yet!</Typography>}
    {!isEditingComment ? (
      <List>
      {document.comments && document.comments.map(comment => (
      <ListItem key={comment.id}>
        <Paper
          elevation={3}
          sx={{height:"20%", width: "100%"}}
        >
          <Stack sx={{pl:1, width:"100%"}}>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>  
              <ListItemAvatar>
                <Avatar sx={{width:25, height:25}} src={comment.user.photoURL}/>
              </ListItemAvatar>
              <Box sx={{display:"flex"}}>
                <Box>
                  <EditButton onClick={() => handleEditComment(comment.id)}/>
                </Box>
                <Box>
                {user.uid == document.user.id && (
                  <DeleteButton onClick={() => handleDelete(comment.id)}/>
                )}
                  </Box>
              </Box>
            </Box>
            <ListItemText
              secondary={
                <>
                  <Typography variant="body2" component="span">{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}</Typography>
                </>
              }
              primary={
                <>
                  <Typography variant="body1" component="span">{comment.content}</Typography>
                </>
              }
            />
          </Stack>
        </Paper>
      </ListItem>
      ))} 
      </List>
    ):(
      <Stack spacing={2}>
        <Box>
          <Detail onChange={(e) => setNewComment(e.target.value)} rows={5}/> 
        </Box>
        <Box sx={{display:"flex", justifyContent: "flex-end"}}>
          <Box>
            <CancelButton onClick={handleCancelComment}/>
          </Box>
          <Box>
            <UpdateButton　onClick={() => handleUpdateComment(document.comments.id)}/>
          </Box>
        </Box>
      </Stack>
    ) 
    }
    </>
  )
}

export default CommentCard