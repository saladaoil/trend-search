import React from 'react';
import './../Basic/AppBar.css';
import { Box, Text,} from '@chakra-ui/react';


const AppBarpre = () => {
  return (
    <div className="custom-appbar">
      <div className="appbar-content">
        {/* Add your app bar content here, e.g., navigation items, logo, etc. */}
        <Box position='fixed'>
        <Text fontSize='3xl' as='b' >好みから探す</Text>
        </Box>
        

        
      </div>
    </div>
  );
};

export default AppBarpre ;