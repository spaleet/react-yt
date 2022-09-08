import { Link } from "react-router-dom"
import { Box, Typography, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

const dummyPfp = "https://dergipark.org.tr/assets/app/images/buddy_sample.png"

const ChannelCard = ({ channel, marginTop }) => {

  const channelId = !channel?.id?.channelId ? channel?.id : channel?.id?.channelId;
  const pfpUrl = channel?.snippet?.thumbnails?.high?.url;
  const subscriberCount = parseInt(channel?.statistics?.subscriberCount).toLocaleString();

  return (
    <Box sx={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: 'none', borderRadius: '20px', height: '326px',
      width: { xl: "320px", md: '240px', sm: '100%', xs: '100%',  }, margin: 'auto', marginTop
    }}>

      <Link to={`/channel/${channelId}`}>

        <CardContent
          sx={{
            color: "text.primary", display: 'flex', flexDirection: 'column',
            justifyContent: 'center', textAlign: 'center'
          }}>

          <CardMedia
            image={pfpUrl || dummyPfp}
            alt={channel?.snippet?.title} component="img"
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2 }}
          />
          
          <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, ml: '5px' }}/>

          </Typography>

          {channel?.statistics?.subscriberCount && (
            <Typography color="text.secondary">
              {subscriberCount} Subscribers!
            </Typography>
          )}

        </CardContent>


      </Link>

    </Box>
  )
}

export default ChannelCard