import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from './_index';
import { fetchVideos } from "../utils/apiCall";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("js mastery");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { md: "row", sx: "column" } }}>

      <Box sx={{ 
        width: { md: '15%'},
        height: { sx: "auto", md: "92vh" }, 
        borderRight: "1px solid #3d3d3d", 
        px: { md: 2, sx: 0 } }}>

        <Sidebar selected={selectedCategory} setCategory={setSelectedCategory} />

      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>

        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          {selectedCategory}
          <span style={{ color: '#F31503' }}> Videos!</span>
        </Typography>

        <Videos videos={videos} />

      </Box>

    </Stack>
  )
}

export default Feed