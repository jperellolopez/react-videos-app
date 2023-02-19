import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const ChannelDetail = () => {

  // get access to the params on the address bar (channel id)
  const { id } = useParams()

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
   fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))

   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
  }, [id])
  

  return (
    <Box minHeight='95vh'>
      {/* Displays the top gradient and channel info */}
      <Box>
        <div
          style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(58,58,124,1) 35%, rgba(0,212,255,1) 100%)', zIndex:10, height:'300px' }}
        />
        {/* as we want to re-use the component but it requires different margin values depending if we are on the feed or on a profile page, we pass this value as a prop. When we use this component from other part (ie Videos component) and we do not pass the prop is not gonna get applied */}
         <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>

      {/* Displays the channel's videos */}
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm:'100px'} }} />
        <Videos videos={videos}/>
      </Box>

    </Box>
  )
}

export default ChannelDetail