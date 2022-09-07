import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from "./_index"
import { fetchChannel, fetchChannelVideos } from "../utils/apiCall"

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchChannel(id).then((data) => setChannelDetail(data?.items[0]))

    fetchChannelVideos(id).then((data) => setVideos(data?.items))
  }, [id])

  return (
    <Box minHeight="95vh">

      <Box>
        <div style={{
          height: '160px',
          background: 'linear-gradient(90deg, rgb(0 99 247) 0%, rgb(206 3 125) 100%, rgb(0 154 255) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channel={channelDetail} marginTop="-110px" />
      </Box>

      <Box p={2} display="flex">

        <Box sx={{ mr: { sm: '100px' } }} />
        
        <Videos videos={videos} />

      </Box>

    </Box>
  )
}

export default ChannelDetail