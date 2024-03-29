import React from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import { boy, girl, } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Stack } from '@chakra-ui/react';
import "./styles.css";
import PregenderHeader from '../../ui/Pre_genderHeader';
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


const Pre_gender = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const type = useSelector((state) => state.genreType);

  // 男のボタンがクリックされた時の処理
  const boy_handleClick = () => {
    dispatch(boy()); // boyアクションをdispatchする
    navigate(`${homeUrl}/preselect`); // 年齢選択のページに遷移する
  }

  // 女のボタンがクリックされた時の処理
  const girl_handleClick = () => {
    dispatch(girl()); // girlアクションをdispatchする
    navigate(`${homeUrl}/preselect`); // 年齢選択のページに遷移する
  }

  return (
    <>
      <PregenderHeader/>
      <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">   
      <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="center" mt="20">
          お孫さんの性別選択
      </Text>
      <Stack spacing={['8', '8', '10']} mt="20" width="100%" maxW="400px">
        <Button onClick={() => boy_handleClick()} size="lg" colorscheme='messenger'>
          男の子
        </Button>
        <Button onClick={() => girl_handleClick()} size="lg" colorscheme='red'>
          女の子
        </Button>

      </Stack>
      </Flex>
      <Button onClick={() => navigate(`${homeUrl}/firstchoice`)} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} variant='outline' colorscheme='twitter' >
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

export default Pre_gender;