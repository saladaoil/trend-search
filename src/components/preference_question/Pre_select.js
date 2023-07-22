import React from 'react';
import { useDispatch } from "react-redux";
import { character, brand } from "../../actions";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import AppBarpre from './AppBar_pre';
import { Box, Text, Button, Center,} from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
import '../Basic/help.css'



// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Pre_select = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // キャラクターボタンがクリックされた時の処理
  const character_handleClick = () => {
    dispatch(character()); // characterアクションをdispatchする
    navigate(`${homeUrl}/pregender`); // 年齢選択のページに遷移する
  }

  // ブランドボタンがクリックされた時の処理
  const brand_handleClick = () => {
    dispatch(brand()); // brandアクションをdispatchする
    navigate(`${homeUrl}/pregender`); // 年齢選択のページに遷移する
  }

  return (
    <>
      <AppBarpre />

      <Center>
        <Box position='fixed' bottom='67%'>
          <Text fontSize='35px' width='260px' as='b'>
            探し方を選択<br />してください
          </Text>
        </Box>
      </Center>

      <Box position='fixed' bottom='48%' left='50%' transform='translateX(-50%)'>
      <Button height='60px' width='290px' colorscheme='twitter' onClick={() => character_handleClick()}>
          <Text as='b' fontSize='30px' >キャラクター</Text><Text as='i' fontSize='20px' >から探す</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='33%' left='50%' transform='translateX(-50%)'>
      <Button height='60px' width='290px' colorscheme='twitter' onClick={() => brand_handleClick()}>
        <Text as='b' fontSize='30px' >ブランド</Text><Text as='i' fontSize='20px' >から探す</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='19%' left='50%' transform='translateX(-50%)'>
      <Button height='60px' width='290px' colorscheme='twitter' onClick={() => brand_handleClick()}>
        <Text as='b' fontSize='30px' >すべて</Text><Text as='i' fontSize='20px' >から探す</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='20px' left='5%' >
        <Button height='50px' width='80px' colorscheme='twitter' onClick={() => navigate(`${homeUrl}/firstchoice`)} variant='outline'>
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
            <PopoverBody><Text fontSize='30px'>探し方を選択してください</Text></PopoverBody>
            <PopoverBody><Text fontSize='30px'>選択肢をタップすることで選択できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/画面ごとの使い方/好みから選ぶ/検索方法決定" target="_blank" rel="noopener noreferrer">
                <Button colorscheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
}

export default Pre_select;
