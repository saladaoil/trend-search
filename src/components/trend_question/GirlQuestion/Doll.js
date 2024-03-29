import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { doll_Yes, doll_No, doll_Back, resetCraft, resetVehicle,} from "../../../actions";
import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Stack } from '@chakra-ui/react';
import "../styles.css";
import Header from '../../../ui/Header';
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
import '../../Basic/help.css'

const homeUrl = process.env.PUBLIC_URL;

// 人形コンポーネント
const Doll = () => {

  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();

  // Reduxストアから必要なステートを取得する
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age);
  const doll = useSelector((state) => state.doll);


  // ナビゲーションのURLマッピング
  const navigateUrls = {
    0: {
      幼稚園: {
        doll: `${homeUrl}/result`,
        other: `${homeUrl}/result`,
        BACK: `${homeUrl}/vehicle`,
      },
      低学年: {
        doll: `${homeUrl}/result`,
        other: `${homeUrl}/result`,
        BACK: `${homeUrl}/vehicle`,
      },
      選択なし: {
        doll: `${homeUrl}/result`,
        other: `${homeUrl}/craft`,
        BACK: `${homeUrl}/vehicle`,
      }
    },
    2: {
      幼稚園: {
        doll: `${homeUrl}/result`,
        other: `${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },
      低学年: {
        doll: `${homeUrl}/result`,
        other: `${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },
      選択なし: {
        doll: `${homeUrl}/result`,
        other: `${homeUrl}/stuffedtoy`,
        BACK: `${homeUrl}/game`,
      }
    },
  };

  // 「はい」ボタンがクリックされたときの処理
  const doll_Yes_handleClick = () => {
    dispatch(doll_Yes()); // Reduxストアのdollに"doll"という文字列を保持させる
  };

  // 「いいえ」ボタンがクリックされたときの処理
  const doll_No_handleClick = () => {
    dispatch(doll_No()); // Reduxストアのdollに"doll_other"という文字列を保持させる
  };

  // 「戻る」ボタンがクリックされたときの処理
  const doll_back_handleClick = () => {
    dispatch(doll_Back()); // Reduxストアのdollに"BACK"という文字列を保持させる
    dispatch(resetVehicle()); // Reduxストアのvehicleをリセットする
  };

  // dollの状態に応じて適切なURLに遷移する
  useEffect(() => {
    const navigateUrl = navigateUrls[gender[0]][age[2]][doll[0]] || navigateUrls[gender[0]];
    navigate(navigateUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doll]);

  // コンポーネントがアンマウントされるときにresetCraftアクションをdispatchしてcraftの値をリセットする
  useEffect(() => {
    return () => {
      dispatch(resetCraft()); // Reduxストアのcraftをリセットする
      dispatch(resetVehicle()) // Reduxストアのvehicleをリセットする
    };
  }, [dispatch]);

  


  return (
    <>
      <Header text="流行から選ぶ"/>
      <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">   
      <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="center" mt="25%">
          人形が好きですか？
      </Text>
      <Stack mt="30%" width="100%" maxW="400px">
        <Flex direction="row" justify="center">
          <Button onClick={() => doll_Yes_handleClick()} size="xl" mr="10%">
            はい
          </Button>
          <Button onClick={() => doll_No_handleClick()} size="xl" >
            いいえ
          </Button>
        </Flex>
      </Stack>
      </Flex>
      <Button onClick={() => doll_back_handleClick()} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} variant='outline' colorscheme='twitter'>
        戻る
      </Button>
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
//         doll: `${homeUrl}/result`,
//         other: `${homeUrl}/result`,
//         BACK: `${homeUrl}/vehicle`,
//       },
//       低学年: {
//         doll: `${homeUrl}/result`,
//         other: `${homeUrl}/result`,
//         BACK: `${homeUrl}/vehicle`,
//       },
//       選択なし: {
//         doll: `${homeUrl}/result`,
//         other: `${homeUrl}/craft`,
//         BACK: `${homeUrl}/vehicle`,
//       }
//     },
//     2: {
//       幼稚園: {
//         doll: `${homeUrl}/result`,
//         other: `${homeUrl}/result`,
//         BACK: `${homeUrl}/game`,
//       },
//       低学年: {
//         doll: `${homeUrl}/result`,
//         other: `${homeUrl}/result`,
//         BACK: `${homeUrl}/game`,
//       },
//       選択なし: {
//         doll: `${homeUrl}/result`,
//         other: `${homeUrl}/stuffedtoy`,
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