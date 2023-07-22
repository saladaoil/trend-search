import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button, Center, Image, Stack } from '@chakra-ui/react';
import CustomAppBar from './AppBar_first';
import './help.css'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'


const homeUrl = process.env.PUBLIC_URL;

const Description = () => {
  const navigate = useNavigate();

  return (

    <Box>
      <CustomAppBar />

      <Center>
        <Box position='fixed' bottom='67%'>
          <Text fontSize='35px' width='260px'>
            <Text as='b'>検索方法を選択してください</Text>
          </Text>
        </Box>
      </Center>

      <Box position='fixed' bottom='48%' left='50%' transform='translateX(-50%)'>
        <Button height='60px' width='260px' colorscheme='twitter' onClick={() => navigate(`${homeUrl}/gender`)}>
          <Text as='b' fontSize='40px' >流行</Text><Text as='i' fontSize='30px' >から選ぶ</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='33%' left='50%' transform='translateX(-50%)'>
        <Button height='60px' width='260px' colorscheme='twitter' onClick={() => navigate(`${homeUrl}/preselect`)}>
          <Text as='b' fontSize='40px' >好み</Text><Text as='i' fontSize='30px' >から探す</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='3%' left='5%' >
        <Button height='50px' width='80px' colorscheme='twitter' onClick={() => navigate(`${homeUrl}/description1`)} variant='outline'>
          <Text as='b' fontSize='20px' > ◀ </Text><Text as='i' fontSize='20px' >戻る</Text>
        </Button>
      </Box>


      <Box position='fixed' bottom='20px' right='5%' >
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' bottom='20px' right='5%' >
              <button height='50px' width='80px' colorscheme='twitter' className="border-radius">
                <Text as='b' fontSize='20px' > ? </Text>
              </button>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton size='lg'/>
            <PopoverHeader><Text fontSize='35px'><b>ヘルプ</b></Text></PopoverHeader>
            <PopoverBody><Text fontSize='30px'>「流行」または「好み」を選択してください</Text></PopoverBody>
            <PopoverBody><Text fontSize='30px'>タップをすることによって選択できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/画面ごとの使い方/検索方法選択画面" target="_blank">
                <Button colorscheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  );
};

export default Description;
