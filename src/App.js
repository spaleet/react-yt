import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Box from '@mui/material/Box';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components/_index";

const App = () => (
    <BrowserRouter>

        <Box sx={{ backgroundColor: '#181818' }}>
            <Navbar />

            <Routes>
                <Route exact path="/" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/v/:id" element={<VideoDetail />} />

                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/c/:id" element={<ChannelDetail />} />
                <Route exact path="/channel" element={<Navigate to="/" />} />

                <Route path="/search" element={<SearchFeed />} />
            </Routes>
        </Box>


    </BrowserRouter>
);

export default App