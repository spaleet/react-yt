import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from './_index';
import { fetchVideos } from "../utils/apiCall";
import { useSearchParams } from "react-router-dom";

const SearchFeed = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q")

  const [selectedCategory, setSelectedCategory] = useState("js mastery");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [searchTerm])

  return (
    <Stack sx={{ flexDirection: { md: "row", sx: "column" } }}>

      <Box sx={{
        width: { md: '15%' },
        height: { sx: "auto", md: "92vh" },
        borderRight: "1px solid #3d3d3d",
        px: { md: 2, sx: 0 }
      }}>

        <Sidebar selected={selectedCategory} setCategory={setSelectedCategory} />

      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>

        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>

        <Videos videos={videos} />

      </Box>

    </Stack>
  )
}

export default SearchFeed