import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { kid, lowGrade, middleGrade, highGrade, notSelect_Age, } from "../../actions"
import { useNavigate } from "react-router-dom"
import "./styles.css";
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
import AppBar from './AppBar_trend';
import '../Basic/help.css'



// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Age = () => {

  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();

  // Reduxストアからステートを取得する
  const gender = useSelector((state) => state.gender);


  // 幼稚園が選択された時の処理
  const kid_handleClick = () => {
    dispatch(kid());                 // Reduxストアのageに4,6,"幼稚園"という値を保持させる
    navigate(`${homeUrl}/exercise`); // 体を動かすのが好きかどうかを質問するページに遷移
  }

  // 小学生（低学年）が選択された時の処理
  const low_handleClick = () => {
    dispatch(lowGrade());            // Reduxストアのageに6,8,"低学年"という値を保持させる
    navigate(`${homeUrl}/exercise`); // 体を動かすのが好きかどうかを質問するページに遷移
  }

  // 小学生（中学年）が選択された時の処理
  const middle_handleClick = () => {
    dispatch(middleGrade());         // Reduxストアのageに8,10,"中学年"という値を保持させる
    navigate(`${homeUrl}/exercise`); // 体を動かすのが好きかどうかを質問するページに遷移
  }

  // 小学生（高学年）が選択された時の処理
  const high_handleClick = () => {
    dispatch(highGrade());           // Reduxストアのageに10,12,"高学年"という値を保持させる
    navigate(`${homeUrl}/exercise`); // 体を動かすのが好きかどうかを質問するページに遷移
  }

  // 選択しないが選択された時の処理
  const skip_handleClick = () => {
    dispatch(notSelect_Age());       // Reduxストアのageに1,15,"選択なし"という値を保持させる
    navigate(`${homeUrl}/exercise`); // 体を動かすのが好きかどうかを質問するページに遷移
  }

  return (
    <>
      <AppBar />

      <Center>
        <Box position='fixed' bottom='67%'>
          <Text fontSize='35px' width='260px' as='b'>
          お孫さんの年齢を<br />選択してください
          </Text>
        </Box>
      </Center>



      <Box position='fixed' bottom='55%' left='50%' transform='translateX(-50%)'>
        <Button height='45px' width='300px' colorscheme='twitter' onClick={() => kid_handleClick()}>
          <Text as='b' fontSize='28px' >幼稚園</Text><Text as='b' fontSize='20px' >　(3歳~6歳)</Text>
        </Button>
      </Box>



      <Box position='fixed' bottom='46%' left='50%' transform='translateX(-50%)'>
        <Button height='45px' width='300px' colorscheme='twitter' onClick={() => low_handleClick()}>
          <Text as='b' fontSize='28px' >低学年</Text><Text as='b' fontSize='20px' >　(6歳~8歳)</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='37%' left='50%' transform='translateX(-50%)'>
        <Button height='45px' width='300px' colorscheme='twitter' onClick={() => middle_handleClick()}>
          <Text as='b' fontSize='28px' >中学年</Text><Text as='b' fontSize='20px' >　(8歳~10歳)</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='28%' left='50%' transform='translateX(-50%)'>
        <Button height='45px' width='300px' colorscheme='twitter' onClick={() => high_handleClick()}>
          <Text as='b' fontSize='28px' >高学年</Text><Text as='b' fontSize='20px' >　(10歳~12歳)</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='18%' left='50%' transform='translateX(-50%)'>
        <Button height='45px' width='200px' colorscheme='gray' onClick={() => skip_handleClick()}>
          <Text as='b' fontSize='25px' >選択しない</Text>
        </Button>
      </Box>

      <Box position='fixed' bottom='20px' left='5%' >
        <Button height='50px' width='80px' colorscheme='twitter' onClick={() => navigate(`${homeUrl}/gender`)} variant='outline'>
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
            <PopoverBody>年齢：  /  </PopoverBody>
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
            <PopoverBody><Text fontSize='30px'>お孫さんの年齢を回答してください</Text></PopoverBody>
            <PopoverBody><Text fontSize='30px'>タップをすることによって選択できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/画面ごとの使い方/流行から選ぶ/年齢選択画面" target="_blank" rel="noopener noreferrer">
                <Button colorscheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
}

export default Age;





// import React from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { age1, age2, age3, age4, age5, age6 } from "../actions"
// import { useNavigate } from "react-router-dom"
// import '../index.css';
// import { Button } from '@chakra-ui/react'
// import "./styles.css";

// import {
//   Container,
//   Grid,
//   makeStyles,
//   Paper,
//   Typography,
//   Select,
//   MenuItem,
//   InputLabel,
// } from "@material-ui/core";

// import 幼稚園生 from './images/幼稚園生.png'
// import 低学年 from './images/低学年.png'
// import 中学年 from './images/中学年.png'
// import 高学年 from './images/高学年.png'
// import 中学生以上 from './images/中学生以上.png'



// const homeUrl = process.env.PUBLIC_URL;

// const Age = () => {
//   const gender = useSelector((state) => state.gender);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const kid_handleClick = () => {
//     dispatch(age1());
//     navigate(`${homeUrl}/Price`);
//   }
//   const low_handleClick = () => {
//     dispatch(age2());
//     navigate(`${homeUrl}/Price`);
//   }
//   const middle_handleClick = () => {
//     dispatch(age3());
//     navigate(`${homeUrl}/Price`);
//   }
//   const high_handleClick = () => {
//     dispatch(age4());
//     navigate(`${homeUrl}/price`);
//   }
//   const junior_handleClick = () => {
//     dispatch(age5());
//     navigate(`${homeUrl}/price`);
//   }
//   const skip_handleClick = () => {
//     dispatch(age6());
//     navigate(`${homeUrl}/price`);
//   }

//   return (
//     <>
//       <h3>選択されているもの</h3>
//       <h3>性別：{gender[3]}</h3>
//       <h2>学年選択</h2>
//       <Grid>
//       <Button onClick={() => kid_handleClick()} style={{ padding: 0, width: 280, height: 70,margin: '1px' }}>
//         <img src={幼稚園生} alt="アイコン" style={{ width: '100%', height: '100%' }} />
//       </Button>
//       </Grid>

//       <Grid>
//       <Button onClick={() => low_handleClick()} style={{ padding: 0, width: 280, height: 70,margin: '1px'}}>
//         <img src={低学年} alt="アイコン" style={{ width: '100%', height: '100%' }} />
//       </Button>
//       </Grid>

//       <Grid>
//       <Button onClick={() => middle_handleClick()} style={{ padding: 0, width: 280, height: 70,margin: '1px'}}>
//         <img src={中学年} alt="アイコン" style={{ width: '100%', height: '100%' }} />
//       </Button>
//       </Grid>

//       <Grid>
//       <Button onClick={() => high_handleClick()} style={{ padding: 0, width: 280, height: 70,margin: '1px'}}>
//         <img src={高学年} alt="アイコン" style={{ width: '100%', height: '100%' }} />
//       </Button>
//       </Grid>

//       <Grid>
//       <Button onClick={() => junior_handleClick()} style={{ padding: 0, width: 280, height: 70,margin: '1px'}}>
//         <img src={中学生以上} alt="アイコン" style={{ width: '100%', height: '100%' }} />
//       </Button>
//       </Grid>

//       <Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>
//       <Button onClick={() => navigate(`${homeUrl}/`)} style={{ fontSize: '1em' }}>戻る</Button>
//     </>
//   );
// }

// export default Age;




