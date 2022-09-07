import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoDetails } from "../utils/constants"
import { timeAgo } from './../utils/relativeTime';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  const videoUrl = videoId ? `/video/${videoId}` : demoDetails.videoUrl;
  const imgUrl = snippet?.thumbnails?.high?.url;

  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoUrl}>

        <CardMedia 
          component="img" 
          image={imgUrl} alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
        
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: "106px" }}>

        <Link to={videoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title?.slice(0, 69)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoDetails.channelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle?.slice(0, 69)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>

        <Typography>
          {timeAgo(snippet?.publishTime)}
        </Typography>

      </CardContent>
    </Card>
  )
}

export default VideoCard