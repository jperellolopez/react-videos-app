import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

// component rendered when we click on a video from the feed. Contains the player, some data and some related videos on a right panel.
const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null)

  // videos loaded in the right panel
  const [videos, setVideos] = useState(null)

  // get the video id from address bar with useParams
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
  }, [id])


  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            {/* Video player */}
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            {/* Video title */}
            <Typography color='#FFF' variant='h5' fontWeight='bold' p={2}>
              {videoDetail?.snippet?.title}
            </Typography>

            {/* Channel name, view and like count */}
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>

              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} Visualizaciones
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} Favoritos
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* Right panel, with an extra prop to set the videos on the right side */}
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction='column' />
        </Box>
        
      </Stack>
    </Box>
  )
}

export default VideoDetail