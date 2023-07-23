import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const Footer = ({ goToPrevPage, goToNextPage, pageNumber, toy_dis, itemsPerPage }) => {
  const footerStyle = {
    // フッターのスタイル
    height: "100px", // 適切な高さを設定
    backgroundColor: "#1DA1F2",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  };

  return (
    <Box as="footer" style={footerStyle}>
      {pageNumber > 1 && (
        <Button onClick={goToPrevPage} size="md">
          前のページ
        </Button>
      )}

      {pageNumber < Math.ceil(toy_dis.length / itemsPerPage) && (
        <Button onClick={goToNextPage} size="md">
          次のページ
        </Button>
      )}
    </Box>
  );
};

export default Footer;
