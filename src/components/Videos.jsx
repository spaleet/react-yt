import { Stack, Box } from "@mui/material"
import {VideoCard, ChannelCard, Loader } from './_index';

const Videos = ({ videos, direction }) => {
    if(!videos?.length) return <Loader />;

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" 
            gap={2} sx={{ margin: {xl: "0px 16px", sm: 0} }}>

            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.channelId && <ChannelCard channel={item} />}
                    {item.id.videoId && <VideoCard video={item} />}
                </Box>
            ))}

        </Stack>
    )
}

export default Videos