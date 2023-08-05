import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { exercise_Yes , exercise_No, resetVideogame, resetVehicle, resetCraft, resetDoll, resetStuffedtoy, resetOther, resetSport } from "../../actions"
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

const Exercise = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useSelectorフックを使ってReduxストアから状態を取得
  const gender = useSelector((state) => state.gender); // 性別
  const age = useSelector((state) => state.age); // 学年

  // 「はい」ボタンがクリックされた時の処理
  const exercise_Yes_handleClick = () => {
    dispatch(exercise_Yes()); // 1と運動の好み（はい）を取得する （1はresultのfilterで比較する時に使用）
    navigate(`${homeUrl}/sport`); // スポーツの質問ページに遷移
  }

  // 「いいえ」ボタンがクリックされた時の処理
  const exercise_No_handleClick = () => {
    dispatch(exercise_No()); // 2と運動の好み（いいえ）を取得する　（2はresultのfilterで比較する時に使用）
    navigate(`${homeUrl}/game`); // ゲームの質問ページに遷移
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
          体を動かすのが好きですか？
      </Text>
      <Stack mt="30%" width="100%" maxW="400px">
        <Flex direction="row" justify="center">
            <Button onClick={() => exercise_Yes_handleClick()} size="xl" mr="10%">
              はい
            </Button>
            <Button onClick={() => exercise_No_handleClick()} size="xl" >
              いいえ
            </Button>
          </Flex>
      </Stack>
      </Flex>
      <Button onClick={() => navigate(`${homeUrl}/age`)} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} variant='outline' colorScheme='twitter'>
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

export default Exercise;


{/* <Header title="体を動かすのが好きですか？" />
       <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">
        <Flex direction="row">
          <Button onClick={() => exercise_Yes_handleClick()} size="xl" mt="60" mr="10">
            はい
          </Button>
          <Button onClick={() => exercise_No_handleClick()} size="xl" mt="60" >
            いいえ
          </Button>
        </Flex>
      </Flex>
      <Button onClick={() => navigate(`${homeUrl}/age`)} size="lg" style={{ position: "fixed", bottom: "40px", left: "30px" }}>
        戻る
      </Button> */}

{/* <h3>性別：{gender[3]}</h3>
      <h3>学年：{age[2]}</h3>
      <h2>体を動かすのが好きですか？</h2>
      <Button onClick={() => exercise_Yes_handleClick()} style={{ fontSize: '1.5em' }} className='yesButton'>はい</Button>
      <Button onClick={() => exercise_No_handleClick()} style={{fontSize: '1.5em'}}>いいえ</Button>
      <br/>
      <br/>
      <div>
        <Button onClick={() => navigate(`${homeUrl}/age`)}style={{ fontSize: '1.5em' }}>戻る</Button>
      </div> */}