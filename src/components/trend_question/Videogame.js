import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { videogame_Yes, videogame_No, other } from "../../actions";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import AppBar from './AppBar_trend';
import { 
  Box, 
  Text, 
  Button, 
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import '../Basic/help.css'

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Videogame = () => {

  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();


  // Reduxストアからステートを取得する
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age); 


  // 「はい」ボタンがクリックされた時の処理
  const videogame_Yes_handleClick = () => {
    dispatch(videogame_Yes());     // Reduxストアのvideogameに"ビデオゲーム"という文字列を保持させる
    navigate(`${homeUrl}/result`); // 結果表示のページに遷移する
  }

  // 「いいえ」ボタンがクリックされた時の処理
  const videogame_No_handleClick = () => {
    dispatch(videogame_No());      // Reduxストアのvideogameに"その他"という文字列を保持させる
    dispatch(other())              // Reduxストアのotherに"その他"という文字列を保持させる(result.jsのfilterで使用する)
    navigate(`${homeUrl}/result`); // 結果表示のページに遷移する
  }

  return (
    <>
      <AppBar />

<Center>
  <Box position='fixed' bottom='67%'>
    <Text fontSize='35px' width='260px' as='b'>
    ビデオゲームは<br />好きですか?
    </Text>
  </Box>
</Center>


<Box position='fixed' bottom='48%' left='10%'>
  <Button height='60px' width='140px' colorscheme='twitter' onClick={() => videogame_Yes_handleClick()}>
    <Text as='b' fontSize='35px' >はい</Text>
  </Button>
</Box>

<Box position='fixed' bottom='48%' right='10%'>
  <Button height='60px' width='140px' colorscheme='twitter' onClick={() => videogame_No_handleClick()}>
    <Text as='b' fontSize='35px' >いいえ</Text>
  </Button>
</Box>
      <br/>
      <Box position='fixed' bottom='20px' left='5%' >
        <Button height='50px' width='80px' colorscheme='twitter' onClick={() => navigate(`${homeUrl}/game`)} variant='outline'>
          <Text as='b' fontSize='20px' > ◀ </Text><Text as='i' fontSize='20px' >戻る</Text>
        </Button>
      </Box>
            <Box position='fixed' bottom='20px' left='50%' transform='translateX(-50%)'>
        <Popover>
          <PopoverTrigger>
            <Button height='50px' width='90px' colorscheme='twitter' variant='outline'>
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
              <button height='50px' width='80px' colorscheme='twitter' className="border-radius">
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
              <a href="https://sites.google.com/view/trend-help/使い方/画面ごとの使い方/流行から選ぶ/質問画面" target="_blank" rel="noopener noreferrer">
                <Button colorscheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
}

export default Videogame;

