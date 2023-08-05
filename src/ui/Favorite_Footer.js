import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {

  const footerStyle = {
    // フッターのスタイル
    height: "10%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    position: "fixed", // 画面の最下部に固定
    bottom: 0, // 画面下端に配置
    left: 0, // 左端に配置
    right: 0, // 右端に配置
    zIndex: 1,
  };

  return (
    <Box as="footer" style={footerStyle} colorScheme='twitter'>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
      </Text>
    </Box>
  );
};

export default Footer;