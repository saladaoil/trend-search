import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCraft, resetDoll, stuffedtoy_Back, stuffedtoy_No, stuffedtoy_Yes } from "../../actions"
import { useNavigate, } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import "../styles.css";

const homeUrl = process.env.PUBLIC_URL;

const Stuffedtoy = () => {
  // Reduxのstateから必要な値を取得するためのフック
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age);
  const exercise = useSelector((state) => state.exercise);
  const game = useSelector((state) => state.game);
  const stuffedtoy = useSelector((state) => state.stuffedtoy);

  // ページ遷移に使用するフック
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ナビゲーションのURLマッピング
  const navigateUrls = {
    0: {
      中学年:{
        1:`${homeUrl}/result`,
        2:`${homeUrl}/result`,
        BACK: `${homeUrl}/craft`,
      },         
      高学年:{
        1:`${homeUrl}/result`,
        2:`${homeUrl}/result`,
        BACK: `${homeUrl}/craft`,
      },         
      選択なし: {
        1:`${homeUrl}/result`,
        2:`${homeUrl}/result`,
        BACK: `${homeUrl}/craft`,
      }
    },                 
    2:{ 
      中学年:{
        1:`${homeUrl}/result`,
        2:`${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },      
      高学年:{
        1:`${homeUrl}/result`,
        2:`${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },           
      選択なし: {
        1:`${homeUrl}/result`,
        2:`${homeUrl}/result`,
        BACK: `${homeUrl}/doll`,
      }
    },
  };

  //「はい」ボタンがクリックされた時の処理
  const stuffedtoy_Yes_handleClick = () => {
    dispatch(stuffedtoy_Yes());
  };

  //「いいえ」ボタンがクリックされた時の処理
  const stuffedtoy_No_handleClick = () => {
    dispatch(stuffedtoy_No());
  };

  //「戻る」ボタンがクリックされた時の処理
  const stuffedtoy_back_handleClick = () => {
    dispatch(stuffedtoy_Back());
    dispatch(resetDoll());
    dispatch(resetCraft());
  };

   // stuffedtoyのステートが変更されるたびに適切なURLに遷移する
  useEffect(() => {
    const navigateUrl = navigateUrls[gender[0]][age[2]][stuffedtoy[0]] || navigateUrls[gender[0]];
    navigate(navigateUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stuffedtoy]);

  return (
    <>
      <h3>選択されているもの</h3>
      <h3>性別：{gender[3]}</h3>
      <h3>学年：{age[2]}</h3>
      <h3>質問1：{exercise[1]}</h3>
      <h3>ゲームが好きですか？：{game[1]}</h3>
      <h2>ぬいぐるみが好きですか？</h2>

      <Button onClick={() => stuffedtoy_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
      <Button onClick={() => stuffedtoy_No_handleClick()} style={{ fontSize: '1em' }}>いいえ</Button>
      <Button variant="contained" color="inherit" onClick={() => stuffedtoy_back_handleClick()}>戻る</Button>
    </>
  );
}

export default Stuffedtoy;


// import React from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { stuffedtoy_Yes, stuffedtoy_No, stuffedtoy_Back } from "../../actions"
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";

// const homeUrl = process.env.PUBLIC_URL;


//   const StuffedToy = () => {

//     const gender = useSelector((state) => state.gender);
//     const age = useSelector((state) => state.age);
//     const exercise = useSelector((state) => state.exercise);
//     const game = useSelector((state) => state.game);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const stuffedtoy_Yes_handleClick = () => {
//         dispatch(stuffedtoy_Yes());
//         navigate(`${homeUrl}/result`);
//       }
        
        
//     const stuffedtoy_No_handleClick = () => {
//         dispatch(stuffedtoy_No());
//         navigate(`${homeUrl}/result`);
//       }

//       const stuffedtoy_back_handleClick = () => {
//         dispatch(stuffedtoy_Back());
//       };

//         return (
//           <>
//             <h3>選択されているもの</h3>
//             <h3>性別：{gender[3]}</h3>
//             <h3>学年：{age[2]}</h3>
//             <h3>質問1：{exercise[1]}</h3>
//             <h3>ゲームが好きですか？：{game[1]}</h3>
//             <h2>ぬいぐるみが好きですか？</h2>

//             <Button onClick={() => stuffedtoy_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//             <Button onClick={() => stuffedtoy_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>
//             <Button variant="contained" color="inherit" onClick={() => stuffedtoy_back_handleClick()}>戻る</Button>
//           </>
//         );
        
//     }
//   export default StuffedToy;

// import React from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { stuffedtoy1, stuffedtoy2,} from "../../actions"
// import { useNavigate } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";


// const homeUrl = process.env.PUBLIC_URL;

// const StuffedToy = () => {
//   const gender = useSelector((state) => state.gender);
//   const age = useSelector((state) => state.age);
//   const exercise = useSelector((state) => state.exercise);
//   const game = useSelector((state) => state.game);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const stuffedtoy_Yes_handleClick = () => {
//     dispatch(stuffedtoy1());
//     navigate(`${homeUrl}/result`);
//   }

//   const stuffedtoy_No_handleClick = () => {
//     dispatch(stuffedtoy2());
//     navigate(`${homeUrl}/result`);
//   }
  

//   return (
//     <>
//       <h3>選択されているもの</h3>
//       <h3>性別：{gender[3]}</h3>
//       <h3>学年：{age[2]}</h3>
//       <h3>質問1：{exercise[1]}</h3>
//       <h3>質問2：{game[1]}</h3>
//       <h2>ぬいぐるみが好きですか？</h2>
//         <Button onClick={() => stuffedtoy_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//         <Button onClick={() => stuffedtoy_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>
//         <Button onClick={() => navigate(-1)}style={{ fontSize: '1em' }}>戻る</Button>
//     </>
//   );
// }

// export default StuffedToy;