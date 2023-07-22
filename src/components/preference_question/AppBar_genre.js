import React from 'react';
import './../Basic/AppBar.css';
import { Box, Text,} from '@chakra-ui/react';
import { useSelector,} from 'react-redux';




const AppBargenre = () => {
  const type = useSelector((state) => state.genreType);

  return (
    <div className="custom-appbar">
      <div className="appbar-content">
        {/* Add your app bar content here, e.g., navigation items, logo, etc. */}
        <Box position='fixed'>
        <Text fontSize='3xl' as='b' >{type === 1 && "キャラクター"}{type === 2 && "ブランド"}から探す</Text>
        </Box>
        

        
      </div>
    </div>
  );
};

export default AppBargenre;