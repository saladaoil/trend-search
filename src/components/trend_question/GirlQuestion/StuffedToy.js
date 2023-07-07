import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { other, resetCraft, resetDoll, resetOther, stuffedtoy_Back, stuffedtoy_No, stuffedtoy_Yes } from "../../../actions"
import { useNavigate, } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import "../styles.css";

const homeUrl = process.env.PUBLIC_URL;

const Stuffedtoy = () => {

  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();

  // Reduxストアからステートを取得する
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age);
  const stuffedtoy = useSelector((state) => state.stuffedtoy);

  // ナビゲーションのURLマッピング
  const navigateUrls = {
    0: {
      中学年:{
        ぬいぐるみ:`${homeUrl}/result`,
        その他:`${homeUrl}/result`,
        BACK: `${homeUrl}/craft`,
      },         
      高学年:{
        ぬいぐるみ:`${homeUrl}/result`,
        その他:`${homeUrl}/result`,
        BACK: `${homeUrl}/craft`,
      },         
      選択なし: {
        ぬいぐるみ:`${homeUrl}/result`,
        その他:`${homeUrl}/result`,
        BACK: `${homeUrl}/craft`,
      }
    },                 
    2:{ 
      中学年:{
        ぬいぐるみ:`${homeUrl}/result`,
        その他:`${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },      
      高学年:{
        ぬいぐるみ:`${homeUrl}/result`,
        その他:`${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },           
      選択なし: {
        ぬいぐるみ:`${homeUrl}/result`,
        その他:`${homeUrl}/result`,
        BACK: `${homeUrl}/doll`,
      }
    },
  };

  //「はい」ボタンがクリックされた時の処理
  const stuffedtoy_Yes_handleClick = () => {
    dispatch(stuffedtoy_Yes()); // Reduxストアのstuffedtoyに"ぬいぐるみ"という文字列を保持させる
  };

  //「いいえ」ボタンがクリックされた時の処理
  const stuffedtoy_No_handleClick = () => {
    dispatch(stuffedtoy_No()); // Reduxストアのstuffedtoyに"その他"という文字列を保持させる(画面遷移に使用する)
    dispatch(other())          // Reduxストアのotherに"その他"という文字列を保持させる(result.jsのfilterで使用する)
  };

  //「戻る」ボタンがクリックされた時の処理
  const stuffedtoy_back_handleClick = () => {
    dispatch(stuffedtoy_Back()); // Reduxストアのstuffedtoyに"BACK"という文字列を保持させる
    dispatch(resetDoll());       // Reduxストアのdollをリセットする
    dispatch(resetCraft());      // Reduxストアのcraftをリセットする
  };

   // stuffedtoyのステートが変更されるたびに適切なURLに遷移する
  useEffect(() => {
    const navigateUrl = navigateUrls[gender[0]][age[2]][stuffedtoy] || navigateUrls[gender[0]];
    navigate(navigateUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stuffedtoy]);

  // コンポーネントがアンマウントされるときに実行されるクリーンアップ関数
  useEffect(() => {
    return () => {
      dispatch(resetCraft()); // Reduxストアのcraftをリセットする
      dispatch(resetOther()); // Reduxストアのotherをリセットする
    };
  }, [dispatch]);


  return (
    <>
      <h3>性別：{gender[3]}</h3>
      <h3>学年：{age[2]}</h3>
      <h2>ぬいぐるみが好きですか？</h2>
      <Button onClick={() => stuffedtoy_Yes_handleClick()} style={{ fontSize: '1.5em' }} className='yesButton'>はい</Button>
      <Button onClick={() => stuffedtoy_No_handleClick()} style={{ fontSize: '1.5em' }} className='BottomRadius'>いいえ</Button>
      <br/>
      <br/>
      <Button variant="contained" color="inherit" onClick={() => stuffedtoy_back_handleClick()} style={{ fontSize: '1.5em' }} className='BottomRadius'>戻る</Button>
    </>
  );
}

export default Stuffedtoy;


// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { other, resetCraft, resetDoll, stuffedtoy_Back, stuffedtoy_No, stuffedtoy_Yes } from "../../../actions"
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";

// const homeUrl = process.env.PUBLIC_URL;

// const Stuffedtoy = () => {
//   // Reduxのstateから必要な値を取得するためのフック
//   const gender = useSelector((state) => state.gender);
//   const age = useSelector((state) => state.age);
//   const stuffedtoy = useSelector((state) => state.stuffedtoy);

//   // ページ遷移に使用するフック
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // ナビゲーションのURLマッピング
//   const navigateUrls = {
//     0: {
//       中学年:{
//         ぬいぐるみ:`${homeUrl}/result`,
//         その他:`${homeUrl}/result`,
//         BACK: `${homeUrl}/craft`,
//       },         
//       高学年:{
//         ぬいぐるみ:`${homeUrl}/result`,
//         その他:`${homeUrl}/result`,
//         BACK: `${homeUrl}/craft`,
//       },         
//       選択なし: {
//         ぬいぐるみ:`${homeUrl}/result`,
//         その他:`${homeUrl}/result`,
//         BACK: `${homeUrl}/craft`,
//       }
//     },                 
//     2:{ 
//       中学年:{
//         ぬいぐるみ:`${homeUrl}/result`,
//         その他:`${homeUrl}/result`,
//         BACK: `${homeUrl}/game`,
//       },      
//       高学年:{
//         ぬいぐるみ:`${homeUrl}/result`,
//         その他:`${homeUrl}/result`,
//         BACK: `${homeUrl}/game`,
//       },           
//       選択なし: {
//         ぬいぐるみ:`${homeUrl}/result`,
//         その他:`${homeUrl}/result`,
//         BACK: `${homeUrl}/doll`,
//       }
//     },
//   };

//   //「はい」ボタンがクリックされた時の処理
//   const stuffedtoy_Yes_handleClick = () => {
//     dispatch(stuffedtoy_Yes());
//   };

//   //「いいえ」ボタンがクリックされた時の処理
//   const stuffedtoy_No_handleClick = () => {
//     dispatch(stuffedtoy_No());
//     dispatch(other())
//   };

//   //「戻る」ボタンがクリックされた時の処理
//   const stuffedtoy_back_handleClick = () => {
//     dispatch(stuffedtoy_Back());
//     dispatch(resetDoll());
//     dispatch(resetCraft());
//   };

//    // stuffedtoyのステートが変更されるたびに適切なURLに遷移する
//   useEffect(() => {
//     const navigateUrl = navigateUrls[gender[0]][age[2]][stuffedtoy] || navigateUrls[gender[0]];
//     navigate(navigateUrl);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [stuffedtoy]);

//   useEffect(() => {
//     // コンポーネントがアンマウントされるときに実行されるクリーンアップ関数
//     return () => {
//       dispatch(resetCraft()); // resetCraftアクションをdispatchしてReduxストアの値をリセットする
//     };
//   }, [dispatch]);

//   return (
//     <>
//       <h3>性別：{gender[3]}</h3>
//       <h3>学年：{age[2]}</h3>
//       <h2>ぬいぐるみが好きですか？</h2>
//       <Button onClick={() => stuffedtoy_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//       <Button onClick={() => stuffedtoy_No_handleClick()} style={{ fontSize: '1em' }}>いいえ</Button>
//       <Button variant="contained" color="inherit" onClick={() => stuffedtoy_back_handleClick()}>戻る</Button>
//     </>
//   );
// }

// export default Stuffedtoy;


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