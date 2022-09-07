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

        <CardMedia image={imgUrl} alt={snippet?.title}
          component="img" sx={{ width: 358, height: 180 }} />
        
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: "106px" }}>

        <Link to={videoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
            {snippet?.title?.slice(0, 35)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoDetails.channelUrl}>
          <Typography variant="subtitle2" color="text.secondary">
            {snippet?.channelTitle?.slice(0, 69)}
            <CheckCircle sx={{ fontSize: 12, color: 'text.secondary', ml: '5px' }} />
          </Typography>
        </Link>

        <Typography variant="body2" color="text.secondary">
          {timeAgo(snippet?.publishTime)}
        </Typography>

      </CardContent>
    </Card>
  )
}

export default VideoCard