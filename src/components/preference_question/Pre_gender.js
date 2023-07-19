import React from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import { boy, girl, all } from "../../actions";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import AppBar_genre from './AppBar_genre';
import { Box, Text, Button, Center, Image, Stack } from '@chakra-ui/react';
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
import '../Basic/help.css'



// ホームのURL
const homeUrl = process.env.PUBLIC_URL;





const Pre_gender = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const type = useSelector((state) => state.genreType);
  


  // 男のボタンがクリックされた時の処理
  const boy_handleClick = () => {
    dispatch(boy()); // boyアクションをdispatchする
    navigate(`${homeUrl}/pregenre`); // 年齢選択のページに遷移する
  }

  // 女のボタンがクリックされた時の処理
  const girl_handleClick = () => {
    dispatch(girl()); // girlアクションをdispatchする
    navigate(`${homeUrl}/pregenre`); // 年齢選択のページに遷移する
  }

  // 選択しないボタンがクリックされた時の処理
  const skip_handleClick = () => {
    dispatch(all()); // allアクションをdispatchする
    navigate(`${homeUrl}/pregenre`); // 年齢選択のページに遷移する
  }

  

  return (
    
    <>
      <AppBar_genre />

<Center>
        <Box position='fixed' bottom='67%'>
          <Text fontSize='35px' width='260px' as='b'>
          どちらを探して<br />いますか？
          </Text>
        </Box>
      </Center>


      <Box position='fixed' top='43%' left='10%'>
        <Button height='60px' width='140px' colorScheme='messenger' onClick={() => boy_handleClick()}>
          <Text as='b' fontSize='30px' >男子向け</Text>
        </Button>
      </Box>

      <Box position='fixed' top='43%' right='10%'>
        <Button height='60px' width='140px' colorScheme='red' onClick={() => girl_handleClick()}>
          <Text as='b' fontSize='30px' >女子向け</Text>
        </Button>
      </Box>

{/*
      <Box position='fixed' bottom='37%' left='50%' transform='translateX(-50%)'>
        <Button height='45px' width='150px' colorScheme='gray' onClick={() => skip_handleClick()}>
          <Text as='b' fontSize='25px' >選択しない</Text>
        </Button>
      </Box>
  */}

      <Box position='fixed' bottom='20px' left='5%' >
        <Button height='50px' width='80px' colorScheme='twitter' onClick={() => navigate(`${homeUrl}/preselect`)} variant='outline'>
          <Text as='b' fontSize='20px' > ◀ </Text><Text as='i' fontSize='20px' >戻る</Text>
        </Button>
      </Box>
      <Box position='fixed' bottom='20px' right='5%' >
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' bottom='20px' right='5%' >
              <button height='50px' width='80px' colorScheme='twitter' class="border-radius">
                <Text as='b' fontSize='20px' > ? </Text>
              </button>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
          <PopoverArrow />
            <PopoverCloseButton size='lg'/>
            <PopoverHeader><Text fontSize='35px'><b>ヘルプ</b></Text></PopoverHeader>
            <PopoverBody><Text fontSize='30px'>男子または女子向けの{type === 1 && "キャラクター"}{type === 2 && "ブランド"}か選択してください</Text></PopoverBody>
            <PopoverBody><Text fontSize='30px'>選択肢をタップすることで選択できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/画面ごとの使い方/好みから選ぶ/性別選択画面" target="_blank">
                <Button colorScheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>

    </>
  );
  
}

export default Pre_gender;