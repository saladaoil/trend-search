import React from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import { character, brand } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Stack } from '@chakra-ui/react';
import "./styles.css";
import Header from '../../ui/Header';
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
  Box
} from '@chakra-ui/react'
import '../Basic/help.css'

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Pre_select = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const type = useSelector((state) => state.genreType);

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
      <Header text="好みから探す"/>
      <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">   
      <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="center" mt="20">
          探し方を選択してください
      </Text>
      <Stack spacing={['8', '8', '10']} mt="20" width="100%" maxW="400px">
        <Button onClick={() => character_handleClick()} size="lg">
          キャラクターから探す
        </Button>
        <Button onClick={() => brand_handleClick()} size="lg">
          ブランドから探す
        </Button>
      </Stack>
      </Flex>
      <Button onClick={() => navigate(`${homeUrl}/firstchoice`)} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} variant='outline' colorScheme='twitter'>
        戻る
      </Button>

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

export default Pre_select;
