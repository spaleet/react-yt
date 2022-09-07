import { Link } from "react-router-dom"
import { Box, Typography, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

const dummyPfp = "https://dergipark.org.tr/assets/app/images/buddy_sample.png"

const ChannelCard = ({ channel, marginTop }) => {

  const pfpUrl = channel?.snippet?.thumbnails?.high?.url;

  return (
    <Box sx={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: 'none', borderRadius: '20px', height: '326px',
      width: { md: '320px', xs: '365px' }, margin: 'auto', marginTop
    }}>

      <Link to={`/channel/${channel?.id?.channelId}`}>

        <CardContent
          sx={{
            color: "#fff", display: 'flex', flexDirection: 'column',
            justifyContent: 'center', textAlign: 'center'
          }}>

          <CardMedia
            image={pfpUrl || dummyPfp}
            alt={channel?.snippet?.title} component="img"
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          
          <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />

          </Typography>

          {channel?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers!
            </Typography>
          )}

        </CardContent>


      </Link>

    </Box>
  )
}

export default ChannelCard