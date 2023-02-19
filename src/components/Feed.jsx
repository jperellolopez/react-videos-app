import {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Sidebar, Videos} from './'
import {fetchFromAPI} from '../utils/fetchFromAPI.js'

// the feed consists on the sidebar and the video feed on the main page
const Feed = () => {

  // useState to change between categories
  const [selectedCategory, setSelectedCategory] = useState('Nuevo')
  const [videos, setVideos] = useState([])

  // useEffect to call the fetch function as soon as we select a new category
  // this new category will be added to the url and will perform a search returning an array with videos data
  useEffect(() => {
   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory])
  

  return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row"} }} >
      <Box sx={{ height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}} >

        {/* Sidebar component. Sends the selected category as a prop to the component */}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          CopyRight 2023
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          <span style={{ color: '#F31503' }}>Categoría: </span> {selectedCategory}
        </Typography>

        {/* Videos component */}
        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed