import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoDetails } from "../utils/constants"

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  const videoUrl = videoId ? `/video/${videoId}` : demoDetails.videoUrl;
  const imgUrl = snippet?.thumbnails?.high?.url;

  return (
    <Card>
      <Link to={videoUrl}>

        <CardMedia image={imgUrl} alt={snippet?.title} sx={{width: 358, height: 180}} />
      
      </Link>
    
      <CardContent sx={{backgroundColor: '#1e1e1e', height: "106px"}} />
    </Card>
  )
}

export default VideoCard