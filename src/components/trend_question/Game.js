import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { game_Yes, game_No, resetVehicle, resetCraft, resetDoll, resetStuffedtoy, resetVideogame, resetSport } from "../../actions"
import { useNavigate } from "react-router-dom"
import { Button, Text, Flex, Stack } from '@chakra-ui/react'
import "./styles.css";
import Header from '../../ui/Header'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box
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
    // 性別(選択なし)
    0: {
      幼稚園: `${homeUrl}/vehicle`, 
      低学年: `${homeUrl}/vehicle`, 
      中学年: `${homeUrl}/craft`, 
      高学年: `${homeUrl}/craft`, 
      選択なし: `${homeUrl}/vehicle`
    },
    // 男性
    1: {
      幼稚園: `${homeUrl}/vehicle`,
      低学年: `${homeUrl}/vehicle`,
      中学年: `${homeUrl}/craft`,
      高学年: `${homeUrl}/craft`,
      選択なし: `${homeUrl}/vehicle`
    },
    // 女性
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
    dispatch(game_Yes()); // Reduxストアのgameに1,"はい(ゲームの好み)にという値を保持させる
    navigate(`${homeUrl}/videogame`); // ビデオゲームのページに遷移
  }

    // 「いいえ」ボタンがクリックされた時の処理
  const game_No_handleClick = () => {
    dispatch(game_No()); // Reduxストアのgameに1,"はい(ゲームの好み)にという値を保持させる
    // genderとageの状態に応じて適切なURLに遷移する
    const navigateUrl = navigateUrls[gender[0]][age[2]] || navigateUrls[gender[0]];
    navigate(navigateUrl);
  }

  // クリーンアップ関数
  useEffect(() => {
    return () => {
      dispatch(resetVideogame()) // Reduxストアのvideogameをリセットする
      dispatch(resetVehicle());  // Reduxストアのvehicleをリセットする
      dispatch(resetCraft());    // Reduxストアのcraftをリセットする
      dispatch(resetDoll());     // Reduxストアのdollをリセットする
      dispatch(resetStuffedtoy()); // Reduxストアのstuffedtoyをリセットする
      dispatch(resetSport())     // Reduxストアのsportをリセットする
    };
  }, [dispatch]);

  return (
    <>
      <Header text="流行から選ぶ"/>
      <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">   
        <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="center" mt="25%">
            ゲームが好きですか？
        </Text>
        <Stack mt="30%" width="100%" maxW="400px">
          <Flex direction="row" justify="center">
            <Button onClick={() => game_Yes_handleClick()} size="xl" mr="10%">
              はい
            </Button>
            <Button onClick={() => game_No_handleClick()} size="xl" >
              いいえ
            </Button>
          </Flex>
        </Stack>
      </Flex>
      <Button onClick={() => navigate(`${homeUrl}/exercise`)} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} variant='outline' colorscheme='twitter'>
        戻る
      </Button>
      <Box position='fixed' bottom='5%' right='5%' >
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' bottom='5%' right='5%' >
              <Button height='50px' width='80px' colorscheme='twitter' className="border-radius">
                <Text as='b' fontSize='20px' > ? </Text>
              </Button>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton size='lg'/>
            <PopoverHeader><Text fontSize='3xl'><b>ヘルプ</b></Text></PopoverHeader>
            <PopoverBody><Text fontSize='3xl'>質問の回答を選択肢から選んでください</Text></PopoverBody>
            <PopoverBody><Text fontSize='3xl'>タップをすることによって選択できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/流行から選ぶ/質問画面" target="_blank">
                <Button colorscheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
}

export default Game;
