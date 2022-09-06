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
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channel={channelDetail} marginTop="-93px" />
      </Box>


    </Box>
  )
}

export default ChannelDetail