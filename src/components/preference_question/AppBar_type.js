import React from 'react';
import './../Basic/AppBar.css';
import { Box, Text,} from '@chakra-ui/react';
import { useDispatch, useSelector,} from 'react-redux';

const CustomAppBar = () => {
  const gender = useSelector((state) => state.gender);
  const type = useSelector((state) => state.genreType);
  const genre = useSelector((state) => state.genre.genre);

  return (
    <div className="custom-appbar">
      <div className="appbar-content">
        {/* Add your app bar content here, e.g., navigation items, logo, etc. */}
        <Box position='fixed'>
        <Text fontSize='25px'as='b'>
        {genre}の商品</Text>
        </Box> 

        

        
      </div>
    </div>
  );
};

export default CustomAppBar;