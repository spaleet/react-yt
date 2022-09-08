import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from './_index';
import { fetchVideos } from "../utils/apiCall";
import { useSearchParams } from "react-router-dom";

const SearchFeed = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  
  const setSelectedCategory = (categoryName) => {
    setSearchParams({ q: categoryName })
  }

  useEffect(() => {
    fetchVideos(`search?part=snippet&q=${searchParams.get("q")}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [searchParams.get("q")])

  return (
    <Stack sx={{ flexDirection: { md: "row", sx: "column" } }}>

      <Box sx={{
        width: { md: '15%' },
        height: { sx: "auto", md: "92vh" },
        borderRight: "1px solid #3d3d3d",
        px: { md: 2, sx: 0 }
      }}>

        <Sidebar setCategory={setSelectedCategory} />

      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>

        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          Search Results for <span style={{ color: "#FC1503" }}>{searchParams.get("q")}</span> videos
        </Typography>

        <Videos videos={videos} />

      </Box>

    </Stack>
  )
}

export default SearchFeed