import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { md: "row", sx: "column" } }}>

      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { md: 2, sx: 0 } }}>

        <Sidebar />

        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }} className="copyrights">
          Copyright 2022
        </Typography>

      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>

        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          New 
          <span style={{ color: '#F31503' }}> Videos!</span>
        </Typography>

      </Box>

    </Stack>
  )
}

export default Feed