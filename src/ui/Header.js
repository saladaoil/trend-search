import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Header = ({ text }) => {
  return (
    <Box as="header" bg="#1DA1F2" py="3" color="white" position="fixed" top="0" left="0" right="0" zIndex="1">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        {text}
      </Text>
    </Box>
  );
};

export default Header;


// import React from 'react';
// import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import './styles.css';


// const Header = () => {
// return (
// <AppBar position="fixed">
// <Toolbar>
// <Typography variant="h6" className="header-title">TrendSearch</Typography>
// </Toolbar>
//  </AppBar>
// );
// };

// export default Header;
