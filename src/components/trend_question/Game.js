import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { game_Yes, game_No, resetVehicle, resetCraft, resetDoll, resetStuffedtoy, resetVideogame, resetOther, resetSport } from "../../actions"
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useSelectorフックを使ってReduxストアから状態を取得
  const gender = useSelector((state) => state.gender); // 性別
  const age = useSelector((state) => state.age); // 学年

  // 遷移先URLのマッピング
  const navigateUrls = {
    0: {
      幼稚園: `${homeUrl}/vehicle`, // 男性、幼稚園
      低学年: `${homeUrl}/vehicle`, // 男性、小学生
      中学年: `${homeUrl}/craft`, // 男性、中学生
      高学年: `${homeUrl}/craft`, // 男性、高学年
      選択なし: `${homeUrl}/vehicle` //すべて当てはまる
    },
    1: {
      幼稚園: `${homeUrl}/vehicle`, // 男性、幼稚園
      低学年: `${homeUrl}/vehicle`, // 男性、小学生
      中学年: `${homeUrl}/craft`, // 男性、中学生
      高学年: `${homeUrl}/craft`, // 男性、高学年
      選択なし: `${homeUrl}/vehicle`  //すべて当てはまる
    },
    2: {
      幼稚園: `${homeUrl}/doll`, // 女性、幼稚園
      低学年: `${homeUrl}/doll`, // 女性、小学生
      中学年: `${homeUrl}/stuffedtoy`, // 女性、中学生
      高学年: `${homeUrl}/stuffedtoy`, // 女性、高学年
      選択なし: `${homeUrl}/doll`, //すべて当てはまる
    },
  };

    // 「はい」ボタンがクリックされた時の処理
  const game_Yes_handleClick = () => {
    dispatch(game_Yes()); // game_Yesアクションをdispatchする
    navigate(`${homeUrl}/videogame`); // ビデオゲームのページに遷移
  }

    // 「いいえ」ボタンがクリックされた時の処理
  const game_No_handleClick = () => {
    dispatch(game_No()); // game_Noアクションをdispatchする
    // 遷移先URLを判断し、適切なページに遷移
    const navigateUrl = navigateUrls[gender[0]][age[2]] || navigateUrls[gender[0]];
    navigate(navigateUrl);
  }

  // コンポーネントのアンマウント時に実行される処理
  useEffect(() => {
    return () => {
      dispatch(resetVideogame()) //videogameの値を空にする
      dispatch(resetVehicle()); // vehicleの値を空にする
      dispatch(resetCraft()); // craftの値を空にする
      dispatch(resetDoll()); // dollの値を空にする
      dispatch(resetStuffedtoy()); // stuffedtoyの値を空にする
      dispatch(resetOther())
      dispatch(resetSport())
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
      <Button onClick={() => navigate(`${homeUrl}/exercise`)} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} variant='outline' colorScheme='twitter'>
        戻る
      </Button>
      <Box position='fixed' bottom='5%' right='5%' >
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' bottom='5%' right='5%' >
              <button height='50px' width='80px' colorScheme='twitter' class="border-radius">
                <Text as='b' fontSize='20px' > ? </Text>
              </button>
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
