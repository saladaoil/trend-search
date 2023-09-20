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
    navigate(`${homeUrl}/pregenre`); 
  }

  // ブランドボタンがクリックされた時の処理
  const brand_handleClick = () => {
    dispatch(brand()); // brandアクションをdispatchする
    navigate(`${homeUrl}/pregenre`);
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
      <Button onClick={() => navigate(`${homeUrl}/pregender`)} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} variant='outline' colorscheme='twitter'>
        戻る
      </Button>

      <Box position='fixed' bottom='5%' right='5%' >
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' bottom='5%' right='5%' >
              <button height='50px' width='80px' colorscheme='twitter' className="border-radius">
                <Text as='b' fontSize='20px' > ? </Text>
              </button>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton size='lg'/>
            <PopoverHeader><Text fontSize='3xl'><b>ヘルプ</b></Text></PopoverHeader>
            <PopoverBody><Text fontSize='3xl'>お孫さんの性別を回答してください</Text></PopoverBody>
            <PopoverBody><Text fontSize='3xl'>タップをすることによって選択できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/流行から選ぶ/性別選択画面" target="_blank">
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
