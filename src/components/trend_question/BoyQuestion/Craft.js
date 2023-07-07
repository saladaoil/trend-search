import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { craft_Back, craft_No, craft_Yes, other, resetDoll, resetOther, resetStuffedtoy, resetVehicle } from "../../../actions";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import "../styles.css";

const homeUrl = process.env.PUBLIC_URL;

const Craft = () => {
  
  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();
  
  // Reduxストアからステートを取得する
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age);
  const craft = useSelector((state) => state.craft);

  // ナビゲーションのURLマッピング
  const navigateUrls = {
    0: {
      幼稚園:{
        工作:`${homeUrl}/result`,
        その他:`${homeUrl}/doll`,
        BACK: `${homeUrl}/game`,
      },         
      低学年:{
        工作:`${homeUrl}/result`,
        その他:`${homeUrl}/doll`,
        BACK: `${homeUrl}/game`,
      },   
      中学年:{
        工作:`${homeUrl}/result`,
        その他:`${homeUrl}/stuffedtoy`,
        BACK: `${homeUrl}/game`,
      },      
      高学年:{
        工作:`${homeUrl}/result`,
        その他:`${homeUrl}/stuffedtoy`,
        BACK: `${homeUrl}/game`,
      },           
      選択なし: {
        工作:`${homeUrl}/result`,
        その他:`${homeUrl}/stuffedtoy`,
        BACK: `${homeUrl}/doll`,
      }
    },                 
    1:{ 
      中学年:{
        工作:`${homeUrl}/result`,
        その他:`${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },      
      高学年:{
        工作:`${homeUrl}/result`,
        その他:`${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },           
      選択なし:{
        工作:`${homeUrl}/result`,
        その他:`${homeUrl}/result`,
        BACK: `${homeUrl}/vehicle`,
      },           
    },
  };

  // 「はい」ボタンがクリックされた時の処理
  const craft_Yes_handleClick = () => {
    dispatch(craft_Yes()); // Reduxストアのcraftに"工作"という文字列を保持させる
  };

  // 「いいえ」ボタンがクリックされた時の処理
  const craft_No_handleClick = () => {
    dispatch(craft_No()); // Reduxストアのcraftに"その他"という文字列を保持させる(画面遷移に使用する)
    dispatch(other());    // Reduxストアのotherに"その他"という文字列を保持させる(result.jsのfilterで使用する)
  };
  
  // 「戻る」ボタンがクリックされた時の処理
  const craft_back_handleClick = () => {
    dispatch(craft_Back());   // Reduxストアのcraftに"BACK"という文字列を保持させる
    dispatch(resetVehicle()); // Reduxストアのvehicleをリセットする
    dispatch(resetDoll());    // Reduxストアのdollをリセットする
  };

  useEffect(() => {
    // craftの状態に応じて適切なURLに遷移する
    const navigateUrl = navigateUrls[gender[0]][age[2]][craft] || navigateUrls[gender[0]][age[2]];
    navigate(navigateUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [craft]);

  // コンポーネントがアンマウントされるときに実行されるクリーンアップ関数
  useEffect(() => {
    return () => {
      dispatch(resetDoll())        // Reduxストアのdollをリセットする
      dispatch(resetStuffedtoy()); // Reduxストアのstuffedtoyをリセットする
      dispatch(resetOther())       // Reduxストアのotherをリセットする
    };
  }, [dispatch]);


  return (
    <>
      <h3>性別：{gender[3]}</h3>
      <h3>学年：{age[2]}</h3>
      <h2>工作が好きですか？</h2>
      <Button onClick={() => craft_Yes_handleClick()} style={{ fontSize: '1.5em' }} className='yesButton'>はい</Button>
      <Button onClick={() => craft_No_handleClick()} style={{fontSize: '1.5em'}}>いいえ</Button>
      <br/>
      <br/>
        <Button variant="contained" color="inherit" onClick={() => craft_back_handleClick()} style={{fontSize: '1.5em'}}>戻る</Button>
    </>
  );
}

export default Craft;



// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { craft_Back, craft_No, craft_Yes, resetDoll, resetStuffedtoy } from "../../actions"
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";

// const homeUrl = process.env.PUBLIC_URL;


//   const Craft = () => {

//     const gender = useSelector((state) => state.gender);
//     const age = useSelector((state) => state.age);
//     const exercise = useSelector((state) => state.exercise);
//     const game = useSelector((state) => state.game);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const navigateUrls = {
//       0: {
//         1:`${homeUrl}/result`,
//         2:`${homeUrl}/stuffedtoy`,
//         BACK: `${homeUrl}/doll`,
//       },                 
//       1: `${homeUrl}/result`,
//       2: `${homeUrl}/result`,
//     };

//     const vehicle_Yes_handleClick = () => {
//         dispatch(craft_Yes());
//     };
  
//     const vehicle_No_handleClick = () => {
//         dispatch(craft_No());
//     };
    
//     const vehicle_back_handleClick = () => {
//         dispatch(craft_Back());
//         dispatch(resetDoll())
//     };


//     const craft = useSelector((state) => state.craft);

//     useEffect(() => {
//       // eslint-disable-next-line no-whitespace-before-property
//       const navigateUrl = navigateUrls[gender[0]] [craft[0]] || navigateUrls[gender[0]];
//       navigate(navigateUrl);
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [craft])

//     useEffect(() => {
//       return () => {
//         dispatch(resetStuffedtoy());
//       };
//     }, [dispatch]);


//         return (
//           <>
//             <h3>選択されているもの</h3>
//             <h3>性別：{gender[3]}</h3>
//             <h3>学年：{age[2]}</h3>
//             <h3>質問1：{exercise[1]}</h3>
//             <h3>ゲームが好きですか？：{game[1]}</h3>
//             <h2>工作が好きですか？</h2>

//             <Button onClick={() => vehicle_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//             <Button onClick={() => vehicle_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>
//             <Button variant="contained" color="inherit" onClick={() => vehicle_back_handleClick()}>戻る</Button>
//             {/* <Button variant="contained" color="inherit" onClick={() => navigate(-1)}>戻る</Button> */}
//           </>
//         );
        
//     }
//     export default Craft;

// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { craft1, craft2,} from "../../actions"
// import { useNavigate } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";


// const homeUrl = process.env.PUBLIC_URL;

// const Craft = () => {
//   const gender = useSelector((state) => state.gender);
//   const age = useSelector((state) => state.age);
//   const exercise = useSelector((state) => state.exercise);
//   const game = useSelector((state) => state.game);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const navigateUrls = {
//     0: {
//       1: `${homeUrl}/result`,
//       2:`${homeUrl}/stuffedtoy`,
//     },                 
//     1: `${homeUrl}/result`,
//     2: `${homeUrl}/result`,
//   };

//   const craft_Yes_handleClick = () => {
//     dispatch(craft1());
//     navigate(`${homeUrl}/result`);
//   }

//   const craft_No_handleClick = () => {
//     dispatch(craft2());
//   }

//   const craft = useSelector((state) => state.craft);
  
//   useEffect(() => {
//     // eslint-disable-next-line no-whitespace-before-property
//     const navigateUrl = navigateUrls[gender[0]] [craft[0]] || navigateUrls[gender[0]];
//     navigate(navigateUrl);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [craft])
  

//   return (
//     <>
//       <h3>選択されているもの</h3>
//       <h3>性別：{gender[3]}</h3>
//       <h3>学年：{age[2]}</h3>
//       <h3>質問1：{exercise[1]}</h3>
//       <h3>質問2：{game[1]}</h3>
//       <h2>工作が好きですか？</h2>
//         <Button onClick={() => craft_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//         <Button onClick={() => craft_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>
//         <Button onClick={() => navigate(-1)}style={{ fontSize: '1em' }}>戻る</Button>
//     </>
//   );
// }

// export default Craft;