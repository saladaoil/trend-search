import React from 'react';
import { Box, Button,Text,Center } from '@chakra-ui/react';

const Footer = ({ goToPrevPage, goToNextPage, pageNumber, toy_dis, itemsPerPage }) => {
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
      };
    

  return (
    <Box as="footer" style={footerStyle} colorscheme='twitter'>
      {pageNumber > 1 && (
        <Button onClick={goToPrevPage} size="sm"variant='outline' colorscheme='twitter'>
          前のページ
        </Button>
      )}
      
      {pageNumber === 1 && (
        <Button size="sm"variant='outline'colorscheme='blackAlpha'>
      前のページ
      </Button>
      )}

      <Center>
      <Box>
        <Text>{pageNumber}/{Math.ceil(toy_dis.length / itemsPerPage)}</Text>
      </Box>
      </Center>


      {pageNumber < Math.ceil(toy_dis.length / itemsPerPage) && (
        <Button onClick={goToNextPage} size="sm"variant='outline'colorscheme='twitter'>
          次のページ
        </Button>

        
      )}

{pageNumber === Math.ceil(toy_dis.length / itemsPerPage) && (
        <Button size="sm"variant='outline'colorscheme='blackAlpha'>
次のページ
      </Button>
      )}


    </Box>
  );
};

export default Footer;
