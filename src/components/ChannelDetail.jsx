import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from "./_index"
import { fetchChannel, fetchChannelVideos } from "../utils/apiCall"

const ChannelDetail = () => {
  const navigate = useNavigate();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  if (!id) {
    navigate("/");
  }

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchChannel(id);

      if (!data?.items) {
        navigate("/");
      }

      setChannelDetail(data?.items[0]);

      const videosData = await fetchChannelVideos(id);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

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