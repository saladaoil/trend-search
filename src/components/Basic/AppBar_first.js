import React from 'react';
import './../Basic/AppBar.css';
import { Box, Text,} from '@chakra-ui/react';


const CustomAppBar = () => {
  return (
    <div className="custom-appbar">
      <div className="appbar-content">
        {/* Add your app bar content here, e.g., navigation items, logo, etc. */}
        <Box position='fixed'>
        <Text fontSize='3xl' as='b' >検索方法選択</Text>
        </Box>
        
      </div>
    </div>
  );
};

export default CustomAppBar;