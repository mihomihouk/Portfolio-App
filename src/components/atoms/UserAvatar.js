//style
import { Avatar } from  "@mui/material"

const UserAvatar = (props) => {

  const { src, sx } = props
   return (
     <Avatar src={src} alt="user avatar" sx={{sx}}/>
   )
}
export default UserAvatar