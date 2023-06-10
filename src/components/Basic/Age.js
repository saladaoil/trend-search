import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { kid, lowGrade, middleGrade, highGrade, notSelect_Age, } from "../../actions"
import { useNavigate } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import "../styles.css";

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Age = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gender = useSelector((state) => state.gender); // 性別を取得する

  // 幼稚園が選択された時の処理
  const kid_handleClick = () => {
    dispatch(kid()); // 4,6,「幼稚園」という値を取得する
    navigate(`${homeUrl}/exercise`); // 運動の質問ページに遷移
  }
  
  // 小学生（低学年）が選択された時の処理
  const low_handleClick = () => {
    dispatch(lowGrade()); // 6,8,「低学年」という値を取得する
    navigate(`${homeUrl}/exercise`); // 運動の質問ページに遷移
  }
  
  // 小学生（中学年）が選択された時の処理
  const middle_handleClick = () => {
    dispatch(middleGrade()); // 8,10,「中学年」という値を取得する
    navigate(`${homeUrl}/exercise`); // 運動の質問ページに遷移
  }
  
  // 小学生（高学年）が選択された時の処理
  const high_handleClick = () => {
    dispatch(highGrade()); // 10,12.「高学年」という値を取得する
    navigate(`${homeUrl}/exercise`); // 運動の質問ページに遷移
  }
  
  // 選択しないが選択された時の処理
  const skip_handleClick = () => {
    dispatch(notSelect_Age()); // 1,15,「選択なし」という値を取得する
    navigate(`${homeUrl}/exercise`); // 運動の質問ページに遷移
  }

  return (
    <>
      <h3>選択されているもの</h3>
      <h3>性別：{gender[3]}</h3>
      <h2>学年選択</h2>
      <Button onClick={() => kid_handleClick()} style={{ fontSize: '1em' }}>幼稚園</Button>
      <Button onClick={() => low_handleClick()} style={{ fontSize: '1em' }}>小学生（低学年）</Button>
      <Button onClick={() => middle_handleClick()} style={{ fontSize: '1em' }}>小学生（中学年）</Button>
      <Button onClick={() => high_handleClick()} style={{ fontSize: '1em' }}>小学生（高学年）</Button>
      <Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>
      <Button onClick={() => navigate(`${homeUrl}/gender`)}style={{ fontSize: '1em' }}>戻る</Button>
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




