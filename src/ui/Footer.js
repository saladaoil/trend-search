import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const Footer = ({ goToPrevPage, goToNextPage, pageNumber, toy_dis, itemsPerPage }) => {
    const footerStyle = {
        // フッターのスタイル
        height: "80px",
        backgroundColor: "#1DA1F2",
        color: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        position: "fixed", // 画面の最下部に固定
        bottom: 0, // 画面下端に配置
        left: 0, // 左端に配置
        right: 0, // 右端に配置
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
