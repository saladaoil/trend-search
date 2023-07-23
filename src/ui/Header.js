// Header.js

import React from 'react';
import { Box, Text} from '@chakra-ui/react';

const Header = () => {
  return (
      <Box as="header" bg="red" py="4" color="white" mt="0">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          TrendSearch
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
