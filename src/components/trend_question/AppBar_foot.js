import React from 'react';
import './../Basic/AppBar.css';
import { Box, Text,} from '@chakra-ui/react';


const CustomAppBar = () => {
  return (
    <div className="custom-appbar-foot">
      <div className="appbar-content">
        {/* Add your app bar content here, e.g., navigation items, logo, etc. */}
        <Box position='fixed'>
        </Box>        
      </div>
    </div>
  );
};

export default CustomAppBar;