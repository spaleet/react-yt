import { Stack, Box } from "@mui/material"
import {VideoCard, ChannelCard } from './_index';

const Videos = ({ videos }) => {

    

    return (
        <Stack 
            direction="row" flexWrap="wrap" justifyContent="center" 
            gap={2} sx={{ margin: {md: "0px 16px", sm: 0} }}>

            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channel={item} />}
                </Box>
            ))}

        </Stack>
    )
}

export default Videos