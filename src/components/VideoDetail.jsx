import { useState, useReact } from 'react'
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos, Loader } from './_index';
import { useEffect } from 'react';
import { fetchRelatedVideos, fetchVideoDetail } from '../utils/apiCall';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetail(id).then((video) => setVideoDetail(video));
    fetchRelatedVideos(id).then((video) => setVideos(video));

  }, [id])

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh" sx={{ pl: { md: '60px' } }}>
      <Stack direction={{ xs: "column", md: "row" }} gap={20}>

        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>

            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />

            <Typography color="text.primary" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>

            <Stack sx={{ direction: { xs: "column", md: "row" }, justifyContent: "space-between" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="text.primary" >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "text.primary", ml: "5px" }} />
                </Typography>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center" color="text.secondary">

                <Typography variant="body2">
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>


                <Typography variant="body2">
                  {parseInt(likeCount).toLocaleString()} likes
                  <ThumbUpIcon sx={{ ml: '5px', fontSize: '20px', mb: '-5px' }} />
                </Typography>

              </Stack>

            </Stack>
          </Box>
        </Box>

        <Box sx={{
          px: 2,
          py: { md: 1, xs: 5 },
          display: "flex",
          justifyContent: "center", 
          alignItems: "center", 
        }}>
          <Videos videos={videos} direction="column" />
        </Box>

      </Stack >
    </Box >
  )
}

export default VideoDetail