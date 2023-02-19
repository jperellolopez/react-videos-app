import React from 'react'
import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from './'

// Videos component. Receive an array of videos as a prop from the Feed component, create a card for every one
const Videos = ({videos, direction}) => {

  if(!videos?.length) return 'Cargando...'

  return (
  
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2} >
      {videos.map((item, idx) =>
        <Box key={idx}>
          {/*If the element is a video with a video id, render a video card component */}
          {item.id.videoId && <VideoCard video={item}/>}

          {/* If the element is a channel, render a channel card component. We dont pass any value to the 'margin' prop because we don't want to apply any value */}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      )}
    </Stack>
   
  )
}

export default Videos