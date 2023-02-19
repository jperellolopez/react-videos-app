import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

// sidebar component. Receives the selected category value and the set selected category function as props from the Feed component
const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack direction='row' sx={{ overflowY: 'auto', height: {sx: 'auto', md: '95%'}, flexDirection: {md: 'column'} }}>
    
    {/* Button: shorthand if (without else). Spans: ternary operator */}
    {categories.map((category) => (
        
        <button
            onClick={() => setSelectedCategory(category.name)}
            className='category-btn'
            style={{ background: category.name === selectedCategory && '#FC1503', color: 'white' }}
            key={category.name}
            
        >
            <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
            <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
        </button>
    ))}

    </Stack>
  )
}

export default Sidebar