import React from 'react';
import { useDispatch } from "react-redux";
import { boy, girl, all } from "../../actions";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import AppBar from './AppBar_trend';
import { Box, Text, Button, Center, Image, Stack } from '@chakra-ui/react';
import '../Basic/help.css'
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

const Gender = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 男のボタンがクリックされた時の処理
  const boy_handleClick = () => {
    dispatch(boy());            // Reduxストアのgenderに1,3,4,"男"を取得する （数字はresultのfilterで比較する時に使用）
    navigate(`${homeUrl}/age`); // 年齢選択のページに遷移する
  }

  // 女のボタンがクリックされた時の処理
  const girl_handleClick = () => {
    dispatch(girl());           // Reduxストアのgenderに2,3,4,"女"を取得する （数字はresultのfilterで比較する時に使用）
    navigate(`${homeUrl}/age`); // 年齢選択のページに遷移する
  }

  // 選択しないボタンがクリックされた時の処理
  const skip_handleClick = () => {
    dispatch(all());            // Reduxストアのgenderに0,0,0,"選択なし"を取得する （数字はresultのfilterで比較する時に使用）
    navigate(`${homeUrl}/age`); // 年齢選択のページに遷移する
  }

  return (
    <>
      <AppBar />

      <Center>
        <Box position='fixed' bottom='67%'>
          <Text fontSize='35px' width='260px' as='b'>
          お孫さんの性別を<br />選択してください
          </Text>
        </Box>
      </Center>


      <Box position='fixed' bottom='48%' left='10%'>
        <Button height='60px' width='140px' colorScheme='messenger' onClick={() => boy_handleClick()}>
          <Text as='b' fontSize='35px' >男</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='48%' right='10%'>
        <Button height='60px' width='140px' colorScheme='red' onClick={() => girl_handleClick()}>
          <Text as='b' fontSize='35px' >女</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='37%' left='50%' transform='translateX(-50%)'>
        <Button height='45px' width='150px' colorScheme='gray' onClick={() => skip_handleClick()}>
          <Text as='b' fontSize='25px' >選択しない</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='20px' left='5%' >
        <Button height='50px' width='80px' colorScheme='twitter' onClick={() => navigate(`${homeUrl}/firstchoice`)} variant='outline'>
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
            <PopoverBody><Text fontSize='30px'>お孫さんの性別を回答してください</Text></PopoverBody>
            <PopoverBody><Text fontSize='30px'>タップをすることで選択できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/画面ごとの使い方/流行から選ぶ/性別選択画面" target="_blank">
                <Button colorScheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
}

export default Gender;



// import React from 'react'
// import { useDispatch} from "react-redux"
// import { boy, girl, all} from "../actions"
// import { useNavigate } from "react-router-dom"
// import { Button } from "@mui/material";


// import Header from './Header';
// import Footer from './Footer';

// import 男 from "./images/男.png"
// import 女 from "./images/女.png"
// import 選択しない from "./images/選択しない.png"


// const homeUrl = process.env.PUBLIC_URL;

// const Gender = () => {

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const boy_handleClick = () => {
//     dispatch(boy());
//     navigate(`${homeUrl}/age`);
//   }
//   const girl_handleClick = () => {
//     dispatch(girl());
//     navigate(`${homeUrl}/age`);
//   }
//   const skip_handleClick = () => {
//     dispatch(all());
//     navigate(`${homeUrl}/age`);
//   }

//   return (
//     <>
//       <Header />
//       <br></br>
//       <br></br>
//       <br></br>
//       <h1>性別選択</h1>
//       <h2>選択されているもの</h2>
//       <br></br>
//         <img  onClick={() => boy_handleClick()} style={{ fontSize: '1em' }} src={男} alt="アイコン" className="genderQ" />
//         <img  onClick={() => boy_handleClick()} style={{ fontSize: '1em' }} src={女} alt="アイコン" className="genderQ" />
//         <br></br>
//         <br></br>

//         <img  onClick={() => boy_handleClick()} style={{ fontSize: '1em' }} src={選択しない} alt="アイコン" className="genderQ" />
//       <h2>孫の性別選択</h2>
//         <Button onClick={() => boy_handleClick()} style={{ fontSize: '1em' }}>男子</Button>
//         <Button onClick={() => girl_handleClick()} style={{ fontSize: '1em' }}>女子</Button>
//         <Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>
//     </>
//     );
// }


// //<Button onClick={() => girl_handleClick()} style={{ fontSize: '1em' }}>女子</Button>
// //<Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>

// export default Gender;