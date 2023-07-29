import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Header = ({ text }) => {
  return (
    <Box as="header" bg="#1DA1F2" py="3" color="white" w="100%" position="fixed" top="0">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        {text}
      </Text>
    </Box>
  );
};

export default Header;
