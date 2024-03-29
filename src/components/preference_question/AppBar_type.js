import React from 'react';
import './../Basic/AppBar.css';
import { Box, Text,} from '@chakra-ui/react';
import { useSelector,} from 'react-redux';

const AppBartype = () => {

  const genre = useSelector((state) => state.genre.genre);

  return (
    <div className="custom-appbar">
      <div className="appbar-content">
        <Box position='fixed'>
        <Text fontSize='25px'as='b'>
        {genre}の商品</Text>
        </Box>   
      </div>
    </div>
  );
};

export default AppBartype;