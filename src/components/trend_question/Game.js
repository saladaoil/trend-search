import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { game_Yes, game_No, resetVehicle, resetCraft, resetDoll, resetStuffedtoy, resetVideogame, resetOther, resetSport } from "../../actions"
import { useNavigate } from "react-router-dom"
import "./styles.css";
import AppBar from './AppBar_trend';
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

const Game = () => {

  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();

  // Reduxストアからステートを取得する
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age); 

  // 遷移先URLのマッピング
  const navigateUrls = {
    0: {
      幼稚園: `${homeUrl}/vehicle`, 
      低学年: `${homeUrl}/vehicle`, 
      中学年: `${homeUrl}/craft`,
      高学年: `${homeUrl}/craft`,
      選択なし: `${homeUrl}/vehicle`
    },
    1: {
      幼稚園: `${homeUrl}/vehicle`,
      低学年: `${homeUrl}/vehicle`, 
      中学年: `${homeUrl}/craft`, 
      高学年: `${homeUrl}/craft`, 
      選択なし: `${homeUrl}/vehicle` 
    },
    2: {
      幼稚園: `${homeUrl}/doll`, 
      低学年: `${homeUrl}/doll`, 
      中学年: `${homeUrl}/stuffedtoy`, 
      高学年: `${homeUrl}/stuffedtoy`, 
      選択なし: `${homeUrl}/doll`, 
    },
  };

    // 「はい」ボタンがクリックされた時の処理
  const game_Yes_handleClick = () => {
    dispatch(game_Yes()); // Reduxストアのgameに1とはい（ゲームの好み）を取得する （1はresultのfilterで比較する時に使用）
    navigate(`${homeUrl}/videogame`); // ビデオゲームのページに遷移
  }

    // 「いいえ」ボタンがクリックされた時の処理
  const game_No_handleClick = () => {
    dispatch(game_No()); // Reduxストアのgameに2といいえ（ゲームの好み）を取得する （2はresultのfilterで比較する時に使用）
    // 遷移先URLを判断し、適切なページに遷移
    const navigateUrl = navigateUrls[gender[0]][age[2]] || navigateUrls[gender[0]];
    navigate(navigateUrl);
  }

  // コンポーネントがアンマウントされるときに実行されるクリーンアップ関数
  useEffect(() => {
    return () => {
      dispatch(resetVideogame())   // Reduxストアのvideogameをリセットする
      dispatch(resetVehicle());    // Reduxストアのvehicleをリセットする
      dispatch(resetCraft());      // Reduxストアのcraftをリセットする
      dispatch(resetDoll());       // Reduxストアのdollをリセットする
      dispatch(resetStuffedtoy()); // Reduxストアのstuffedtoyをリセットする
      dispatch(resetOther())       // Reduxストアのotherをリセットする
      dispatch(resetSport())       // Reduxストアのsportをリセットする
    };
  }, [dispatch]);

  return (
    <>      <AppBar />

<Center>
  <Box position='fixed' bottom='67%'>
    <Text fontSize='35px' width='260px' as='b'>
    ゲームは<br />好きですか?
    </Text>
  </Box>
</Center>


<Box position='fixed' bottom='48%' left='10%'>
  <Button height='60px' width='140px' colorScheme='twitter' onClick={() => game_Yes_handleClick()}>
    <Text as='b' fontSize='35px' >はい</Text>
  </Button>
</Box>

<Box position='fixed' bottom='48%' right='10%'>
  <Button height='60px' width='140px' colorScheme='twitter' onClick={() => game_No_handleClick()}>
    <Text as='b' fontSize='35px' >いいえ</Text>
  </Button>
</Box>
      <br/>
      <Box position='fixed' bottom='20px' left='5%' >
        <Button height='50px' width='80px' colorScheme='twitter' onClick={() => navigate(`${homeUrl}/exercise`)} variant='outline'>
          <Text as='b' fontSize='20px' > ◀ </Text><Text as='i' fontSize='20px' >戻る</Text>
        </Button>
      </Box>
            <Box position='fixed' bottom='20px' left='50%' transform='translateX(-50%)'>
        <Popover>
          <PopoverTrigger>
            <Button height='50px' width='90px' colorScheme='twitter' variant='outline'>
              <Text as='i' fontSize='20px' >選択中</Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>選択中</PopoverHeader>
            <PopoverBody>性別：{gender[3]}</PopoverBody>
            <PopoverBody>学年：{age[2]}</PopoverBody>
          </PopoverContent>
        </Popover>
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
            <PopoverBody><Text fontSize='30px'>質問の回答を選択肢から選んでください</Text></PopoverBody>
            <PopoverBody><Text fontSize='30px'>タップをすることによって選択できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/画面ごとの使い方/流行から選ぶ/質問画面" target="_blank">
                <Button colorScheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>

    </>
  );
}

export default Game;
