import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI.js'
import { useParams } from 'react-router-dom'

// the feed consists on the sidebar and the video feed on the main page
const SearchFeed = () => {

  // we get the search terms from the address bar with useparams
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([])

  // results updated when we change the searchterm (perform new search)
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm])


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Resultados para: <span style={{ color: '#F31503' }}>{searchTerm}</span>
      </Typography>

      {/* Videos component */}
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed