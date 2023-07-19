import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { doll_Yes, doll_No, doll_Back, resetCraft, resetVehicle, other, resetOther } from "../../../actions";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import AppBar from '../AppBar_trend';

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
import '../../Basic/help.css'

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Doll = () => {

  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();

  // Reduxストアからステートを取得する
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age);
  const doll = useSelector((state) => state.doll);
  const vehcle = useSelector((state) => state.vehcle); 


  // ナビゲーションのURLマッピング
  const navigateUrls = {
    0: {
      幼稚園: {
        人形: `${homeUrl}/result`,
        その他: `${homeUrl}/result`,
        BACK: `${homeUrl}/vehicle`,
      },
      低学年: {
        人形: `${homeUrl}/result`,
        その他: `${homeUrl}/result`,
        BACK: `${homeUrl}/vehicle`,
      },
      選択なし: {
        人形: `${homeUrl}/result`,
        その他: `${homeUrl}/craft`,
        BACK: `${homeUrl}/vehicle`,
      }
    },
    2: {
      幼稚園: {
        人形: `${homeUrl}/result`,
        その他: `${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },
      低学年: {
        人形: `${homeUrl}/result`,
        その他: `${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },
      選択なし: {
        人形: `${homeUrl}/result`,
        その他: `${homeUrl}/stuffedtoy`,
        BACK: `${homeUrl}/game`,
      }
    },
  };

  // 「はい」ボタンがクリックされたときの処理
  const doll_Yes_handleClick = () => {
    dispatch(doll_Yes()); // Reduxストアのdollに"人形"という文字列を保持させる
  };

  // 「いいえ」ボタンがクリックされたときの処理
  const doll_No_handleClick = () => {
    dispatch(doll_No()); // Reduxストアのdollに"その他"という文字列を保持させる(画面遷移に使用する)
    dispatch(other())    // Reduxストアのotherに"その他"という文字列を保持させる(result.jsのfilterで使用する)
  };

  // 「戻る」ボタンがクリックされたときの処理
  const doll_back_handleClick = () => {
    dispatch(doll_Back());    // Reduxストアのdollに"BACK"という文字列を保持させる(画面遷移に使用する)
    dispatch(resetVehicle()); // Reduxストアのvehicleをリセットする
  };

  // dollのステートが変更されるたびに適切なURLに遷移する
  useEffect(() => {
    const navigateUrl = navigateUrls[gender[0]][age[2]][doll] || navigateUrls[gender[0]];
    navigate(navigateUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doll]);

  // コンポーネントがアンマウントされるときに実行されるクリーンアップ関数
  useEffect(() => {
    return () => {
      dispatch(resetCraft());   // Reduxストアのcraftをリセットする
      dispatch(resetVehicle())  // Reduxストアのvehicleをリセットする
      dispatch(resetOther())    // Reduxストアのotherをリセットする
    };
  }, [dispatch]);

  

  return (
    <>
      <h3>性別：{gender[3]}</h3>
      <h3>学年：{age[2]}</h3>
      <h2>人形が好きですか？</h2>
      <Button  onClick={doll_Yes_handleClick} style={{ fontSize: '1.5em' }} className='yesButton'>はい</Button>
      <Button onClick={doll_No_handleClick} style={{ fontSize: '1.5em' }} className='BottomRadius'>いいえ</Button>
      <br/>
      <br/>
      <Button onClick={doll_back_handleClick} style={{ fontSize: '1.5em' }} className='BottomRadius'>戻る</Button>
    </>
  );
};

export default Doll;


// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { doll_Yes, doll_No, doll_Back, resetCraft, resetVehicle } from "../../actions";
// import { useNavigate } from "react-router-dom";
// import { Button } from '@chakra-ui/react';
// import "../styles.css";

// const homeUrl = process.env.PUBLIC_URL;

// // 人形コンポーネント
// const Doll = () => {
//   // Reduxストアから必要なステートを取得する
//   const gender = useSelector((state) => state.gender); // 性別
//   const age = useSelector((state) => state.age); // 学年
//   const doll = useSelector((state) => state.doll); // 人形好きかどうかの回答

//   // React Routerのnavigate関数とReduxのdispatch関数を取得する
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // ナビゲーションのURLマッピング
//   const navigateUrls = {
//     0: {
//       幼稚園: {
//         人形: `${homeUrl}/result`,
//         その他: `${homeUrl}/result`,
//         BACK: `${homeUrl}/vehicle`,
//       },
//       低学年: {
//         人形: `${homeUrl}/result`,
//         その他: `${homeUrl}/result`,
//         BACK: `${homeUrl}/vehicle`,
//       },
//       選択なし: {
//         人形: `${homeUrl}/result`,
//         その他: `${homeUrl}/craft`,
//         BACK: `${homeUrl}/vehicle`,
//       }
//     },
//     2: {
//       幼稚園: {
//         人形: `${homeUrl}/result`,
//         その他: `${homeUrl}/result`,
//         BACK: `${homeUrl}/game`,
//       },
//       低学年: {
//         人形: `${homeUrl}/result`,
//         その他: `${homeUrl}/result`,
//         BACK: `${homeUrl}/game`,
//       },
//       選択なし: {
//         人形: `${homeUrl}/result`,
//         その他: `${homeUrl}/stuffedtoy`,
//         BACK: `${homeUrl}/game`,
//       }
//     },
//   };

//   // 「はい」ボタンがクリックされたときの処理
//   const doll_Yes_handleClick = () => {
//     dispatch(doll_Yes()); // doll_Yesアクションをdispatchする
//   };

//   // 「いいえ」ボタンがクリックされたときの処理
//   const doll_No_handleClick = () => {
//     dispatch(doll_No()); // doll_Noアクションをdispatchする
//   };

//   // 「戻る」ボタンがクリックされたときの処理
//   const doll_back_handleClick = () => {
//     dispatch(doll_Back()); // doll_Backアクションをdispatchする
//     dispatch(resetVehicle()); // resetVehicleアクションをdispatchしてReduxストアの値をリセットする
//   };

//   // dollのステートが変更されるたびに適切なURLに遷移する
//   useEffect(() => {
//     const navigateUrl = navigateUrls[gender[0]][age[2]][doll[0]] || navigateUrls[gender[0]];
//     navigate(navigateUrl);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [doll]);

//   // コンポーネントがアンマウントされるときにresetCraftアクションをdispatchしてcraftの値をリセットする
//   useEffect(() => {
//     return () => {
//       dispatch(resetCraft());
//       dispatch(resetVehicle())
//     };
//   }, [dispatch]);

//   console.log(doll);

//   return (
//     <>
//       <h3>性別：{gender[3]}</h3>
//       <h3>学年：{age[2]}</h3>
//       <h2>人形が好きですか？</h2>
//       <Button onClick={doll_Yes_handleClick} style={{ fontSize: '1em' }}>はい</Button>
//       <Button onClick={doll_No_handleClick} style={{ fontSize: '1em' }}>いいえ</Button>
//       <Button onClick={doll_back_handleClick} style={{ fontSize: '1em' }}>戻る</Button>
//     </>
//   );
// };

// export default Doll;



// import React, { useEffect } from 'react';
// import { useSelector, useDispatch, } from 'react-redux';
// import { doll_Yes, doll_No, doll_Back, resetCraft, resetVehicle} from "../../actions"
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";

// const homeUrl = process.env.PUBLIC_URL;


//   const Doll = () => {

//     const gender = useSelector((state) => state.gender);
//     const age = useSelector((state) => state.age);
//     const exercise = useSelector((state) => state.exercise);
//     const game = useSelector((state) => state.game);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const navigateUrls = {
//       0: {
//         幼稚園:{
//           1:`${homeUrl}/result`,
//           2:`${homeUrl}/result`,
//           BACK: `${homeUrl}/vehicle`,
//         },         
//         低学年:{
//           1:`${homeUrl}/result`,
//           2:`${homeUrl}/result`,
//           BACK: `${homeUrl}/vehicle`,
//         },         
//         選択なし: {
//           1:`${homeUrl}/result`,
//           2:`${homeUrl}/craft`,
//           BACK: `${homeUrl}/vehicle`,
//         }
//       },                 
//       2:{ 
//         幼稚園:{
//           1:`${homeUrl}/result`,
//           2:`${homeUrl}/result`,
//           BACK: `${homeUrl}/game`,
//         },      
//         低学年:{
//           doll:`${homeUrl}/result`,
//           2:`${homeUrl}/result`,
//           BACK: `${homeUrl}/game`,
//         },           
//         選択なし: {
//           1:`${homeUrl}/result`,
//           2:`${homeUrl}/stuffedtoy`,
//           BACK: `${homeUrl}/game`,
//         }
//       },
//     };


//     const doll_Yes_handleClick = () => {
//         dispatch(doll_Yes());
//     };
  
//     const doll_No_handleClick = () => {
//         dispatch(doll_No());
//     };
    
//     const doll_back_handleClick = () => {
//       dispatch(doll_Back());
//       dispatch(resetVehicle())
//     };
    
    


//     const doll = useSelector((state) => state.doll);

//     useEffect(() => {
//       // eslint-disable-next-line no-whitespace-before-property
//       const navigateUrl = navigateUrls[gender[0]] [age[2]] [doll[0]] || navigateUrls[gender[0]];
//       navigate(navigateUrl);
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [doll])

//     useEffect(() => {
//       return () => {
//         dispatch(resetCraft());
//       };
//     }, [dispatch]);

//     console.log(doll)

//         return (
//           <>
//             <h3>選択されているもの</h3>
//             <h3>性別：{gender[3]}</h3>
//             <h3>学年：{age[2]}</h3>
//             <h3>質問1：{exercise[1]}</h3>
//             <h3>ゲームが好きですか？：{game[1]}</h3>
//             <h2>人形が好きですか？</h2>

//             <Button onClick={() => doll_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//             <Button onClick={() => doll_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>
//             <Button onClick={() => doll_back_handleClick()} style={{fontSize: '1em'}}>戻る</Button>
//           </>
//         );
        
//     }
//     export default Doll;


// import React, { useEffect, } from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { doll_Yes,  doll_No, resetCraft, doll_Back,} from "../../actions"
// import { useNavigate } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";

// const homeUrl = process.env.PUBLIC_URL;


//   const Doll = () => {

//     const gender = useSelector((state) => state.gender);
//         const age = useSelector((state) => state.age);
//         const exercise = useSelector((state) => state.exercise);
//         const game = useSelector((state) => state.game);
    
//         const navigate = useNavigate();
//         const dispatch = useDispatch();
    
//         const navigateUrls = {
//           0: {
//             2:`${homeUrl}/craft`,
//             BACK:`${homeUrl}/vehicle`
//           },                 
//           1: `${homeUrl}/result`,
//           2: `${homeUrl}/result`,
//         };
    
//         const doll_Yes_handleClick = () => {
//             dispatch(doll_Yes());
//             navigate(`${homeUrl}/result`);
//           }
            
            
//         const doll_No_handleClick = () => {
//             dispatch(doll_No());
//           }

//           const doll_back_handleClick = () => {
//               dispatch(doll_Back());
//           };
    
//         const doll = useSelector((state) => state.doll);
    
//         useEffect(() => {
//           // eslint-disable-next-line no-whitespace-before-property
//           const navigateUrl = navigateUrls[gender[0]] [doll[0]] || navigateUrls[gender[0]];
//           navigate(navigateUrl);
//           // eslint-disable-next-line react-hooks/exhaustive-deps
//         }, [doll])
    
//         useEffect(() => {
//           return () => {
//             dispatch(resetCraft());
//           };
//         }, [dispatch]);
    
//         return (
//           <>
//             <h3>選択されているもの</h3>
//             <h3>性別：{gender[3]}</h3>
//             <h3>学年：{age[2]}</h3>
//             <h3>体を動かすのが好きですか？：{exercise[1]}</h3>
//             <h3>ゲームが好きですか？：{game[1]}</h3>
//             <h2>人形が好きですか？</h2>

//             <Button onClick={() => doll_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//             <Button onClick={() => doll_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>      
//             <Button variant="contained" color="inherit" onClick={() => doll_back_handleClick()}>戻る</Button>           
//             {/* <Button variant="contained" color="inherit" onClick={() => navigate(-1)}>戻る</Button>            */}
//           </>
//         );
        
//     }
//   export default Doll;


// import React, { useEffect, } from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { doll1, doll2, resetCraft,} from "../../actions"
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";

// const homeUrl = process.env.PUBLIC_URL;


//   const Doll = () => {

//     const gender = useSelector((state) => state.gender);
//     const age = useSelector((state) => state.age);
//     const exercise = useSelector((state) => state.exercise);
//     const game = useSelector((state) => state.game);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const navigateUrls = {
//       0: {
//         2:`${homeUrl}/craft`
//       },                 
//       1: `${homeUrl}/result`,
//       2: `${homeUrl}/result`,
//     };

//     const doll_Yes_handleClick = () => {
//         dispatch(doll1());
//         navigate(`${homeUrl}/result`);
//       }
        
        
//     const doll_No_handleClick = () => {
//         dispatch(doll2());
//       }

//     const doll = useSelector((state) => state.doll);

//     useEffect(() => {
//       // eslint-disable-next-line no-whitespace-before-property
//       const navigateUrl = navigateUrls[gender[0]] [doll[0]] || navigateUrls[gender[0]];
//       navigate(navigateUrl);
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [doll])

//     useEffect(() => {
//       return () => {
//         dispatch(resetCraft());
//       };
//     }, [dispatch]);

//         return (
//           <>
//             <h3>選択されているもの</h3>
//             <h3>性別：{gender[3]}</h3>
//             <h3>学年：{age[2]}</h3>
//             <h3>質問1：{exercise[1]}</h3>
//             <h3>ゲームが好きですか？：{game[1]}</h3>
//             <h2>人形が好きですか？</h2>

//             <Button onClick={() => doll_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//             <Button onClick={() => doll_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>
//             <Button variant="contained" color="inherit" onClick={() => navigate(-1)}>戻る</Button>
//           </>
//         );
        
//     }
//   export default Doll;

// import React from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { doll1, doll2,} from "../../actions"
// import { useNavigate } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";


// const homeUrl = process.env.PUBLIC_URL;

// const Doll = () => {
//   const gender = useSelector((state) => state.gender);
//   const age = useSelector((state) => state.age);
//   const exercise = useSelector((state) => state.exercise);
//   const game = useSelector((state) => state.game);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const doll_Yes_handleClick = () => {
//     dispatch(doll1());
//     navigate(`${homeUrl}/result`);
//   }

//   const doll_No_handleClick = () => {
//     dispatch(doll2());
//     navigate(`${homeUrl}/result`);
//   }
  

//   return (
//     <>
//       <h3>選択されているもの</h3>
//       <h3>性別：{gender[3]}</h3>
//       <h3>学年：{age[2]}</h3>
//       <h3>質問1：{exercise[1]}</h3>
//       <h3>質問2：{game[1]}</h3>
//       <h2>人形が好きですか？</h2>
//         <Button onClick={() => doll_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//         <Button onClick={() => doll_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>
//         <Button variant="contained" color="inherit" onClick={() => navigate(-1)}>戻る</Button>
//     </>
//   );
// }

// export default Doll;