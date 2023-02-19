import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
// import from component index
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

// Main component of the application. This is imported to the src/index.js file and then injected on the root HTML element located on public/index.html. BrowserRouter must wrap all the app. Then we render the structure of the app: navbar, routes (with every individual route), etc. 
const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }} >
            <Navbar/>
            <Routes>
                {/* Base path will render the Feed component */}
                <Route path='/' exact element={<Feed />} />
                {/* Video path (with any possible id) will render the VideoDetail component */}
                <Route path='/video/:id' element={<VideoDetail />} />
                {/* Channel path (with any possible id) will render the ChannelDetail component */}
                <Route path='/channel/:id' element={<ChannelDetail />} />
                {/* Search path (with any possible term) will render the SearchFeed component */}
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
)


export default App