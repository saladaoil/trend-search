import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vehicle_Yes, vehicle_No, resetDoll, vehicle_Back, other, resetOther, } from "../../../actions"
import { useNavigate } from "react-router-dom"
import { Button, Text, Flex, Stack } from '@chakra-ui/react'
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

const Vehicle = () => {

  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();


  // Reduxストアからステートを取得する
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age);
  const vehicle = useSelector((state) => state.vehicle);


  // ナビゲーションのURLマッピング
  const navigateUrls = {
    0: {
      幼稚園: {
        vehicle: `${homeUrl}/result`,
        other: `${homeUrl}/doll`,
        BACK: `${homeUrl}/game`,
      },
      低学年: {
        vehicle: `${homeUrl}/result`,
        other: `${homeUrl}/doll`,
        BACK: `${homeUrl}/game`,
      },
      中学年: {
        vehicle: `${homeUrl}/result`,
        other: `${homeUrl}/stuffedtoy`,
        BACK: `${homeUrl}/game`,
      },
      高学年: {
        vehicle: `${homeUrl}/result`,
        other: `${homeUrl}/stuffedtoy`,
        BACK: `${homeUrl}/game`,
      },
      選択なし: {
        vehicle: `${homeUrl}/result`,
        other: `${homeUrl}/doll`,
        BACK: `${homeUrl}/game`,
      }
    },
    1: {
      幼稚園: {
        vehicle: `${homeUrl}/result`,
        other: `${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },
      低学年: {
        vehicle: `${homeUrl}/result`,
        other: `${homeUrl}/result`,
        BACK: `${homeUrl}/game`,
      },
      選択なし: {
        vehicle: `${homeUrl}/result`,
        other: `${homeUrl}/craft`,
        BACK: `${homeUrl}/game`,
      }
    },
  };

  // 「はい」ボタンがクリックされた時の処理
  const vehicle_Yes_handleClick = () => {
    dispatch(vehicle_Yes()); // Reduxストアのvehicleに"vehicle"という文字列を保持させる
  };

  // 「いいえ」ボタンがクリックされた時の処理
  const vehicle_No_handleClick = () => {
    dispatch(vehicle_No()); // Reduxストアのvehicleに"other"という文字列を保持させる(画面遷移に使用する)
    dispatch(other())       // Reduxストアのotherに"other"という文字列を保持させる(result.jsのfilterで使用する)
  };

  // 「戻る」ボタンがクリックされた時の処理
  const vehicle_back_handleClick = () => {
    dispatch(vehicle_Back()); // Reduxストアのvehicleに"BACK"という文字列を保持させる(画面遷移に使用する)
  };

  useEffect(() => {
    // vehicleの状態に応じて適切なURLに遷移する
    const navigateUrl = navigateUrls[gender[0]][age[2]][vehicle[0]] || navigateUrls[gender[0]];
    navigate(navigateUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicle]);

  // クリーンアップ関数
  useEffect(() => {
    return () => {
      dispatch(resetDoll()); // Reduxストアのdollをリセットする
      dispatch(resetOther()) // Reduxストアのotherをリセットする
    };
  }, [dispatch]);



  return (
    <>
      <Header text="流行から選ぶ"/>
      <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">   
      <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="center" mt="25%">
          乗り物が好きですか？
      </Text>
      <Stack mt="30%" width="100%" maxW="400px">
        <Flex direction="row" justify="center">
            <Button onClick={() => vehicle_Yes_handleClick()} size="xl" mr="10%">
              はい
            </Button>
            <Button onClick={() => vehicle_No_handleClick()} size="xl" >
              いいえ
            </Button>
          </Flex>
      </Stack>
      </Flex>
      <Button onClick={() => vehicle_back_handleClick()} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} variant='outline' colorscheme='twitter'>
        戻る
      </Button>
      <Box position='fixed' bottom='5%' right='5%' >
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' bottom='5%' right='5%' >
              <button height='50px' width='80px' colorscheme='twitter' class="border-radius">
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
}

export default Vehicle;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { vehicle_Yes, vehicle_No, resetDoll, vehicle_Back } from "../../actions"
// import { useNavigate } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";

// const homeUrl = process.env.PUBLIC_URL;

// const Vehicle = () => {
//   // Reduxストアから状態を取得
//   const gender = useSelector((state) => state.gender);
//   const age = useSelector((state) => state.age);
//   const vehicle = useSelector((state) => state.vehicle);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // ナビゲーションのURLマッピング
//   const navigateUrls = {
//     0: {
//       幼稚園: {
//         vehicle: `${homeUrl}/result`,
//         other: `${homeUrl}/doll`,
//         BACK: `${homeUrl}/game`,
//       },
//       低学年: {
//         vehicle: `${homeUrl}/result`,
//         other: `${homeUrl}/doll`,
//         BACK: `${homeUrl}/game`,
//       },
//       中学年: {
//         vehicle: `${homeUrl}/result`,
//         other: `${homeUrl}/stuffedtoy`,
//         BACK: `${homeUrl}/game`,
//       },
//       高学年: {
//         vehicle: `${homeUrl}/result`,
//         other: `${homeUrl}/stuffedtoy`,
//         BACK: `${homeUrl}/game`,
//       },
//       選択なし: {
//         vehicle: `${homeUrl}/result`,
//         other: `${homeUrl}/doll`,
//         BACK: `${homeUrl}/game`,
//       }
//     },
//     1: {
//       幼稚園: {
//         vehicle: `${homeUrl}/result`,
//         other: `${homeUrl}/result`,
//         BACK: `${homeUrl}/game`,
//       },
//       低学年: {
//         vehicle: `${homeUrl}/result`,
//         other: `${homeUrl}/result`,
//         BACK: `${homeUrl}/game`,
//       },
//       選択なし: {
//         vehicle: `${homeUrl}/result`,
//         other: `${homeUrl}/craft`,
//         BACK: `${homeUrl}/game`,
//       }
//     },
//   };

//   // 「はい」ボタンがクリックされた時の処理
//   const vehicle_Yes_handleClick = () => {
//     dispatch(vehicle_Yes()); // vehicle_Yesアクションをdispatchする
//   };

//   // 「いいえ」ボタンがクリックされた時の処理
//   const vehicle_No_handleClick = () => {
//     dispatch(vehicle_No()); // vehicle_Noアクションをdispatchする
//   };

//   // 「戻る」ボタンがクリックされた時の処理
//   const vehicle_back_handleClick = () => {
//     dispatch(vehicle_Back()); // vehicle_Backアクションをdispatchする
//   };

//   useEffect(() => {
//     // vehicleの状態に応じて適切なURLに遷移する
//     const navigateUrl = navigateUrls[gender[0]][age[2]][vehicle[0]] || navigateUrls[gender[0]];
//     navigate(navigateUrl);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [vehicle]);

//   useEffect(() => {
//     // コンポーネントがアンマウントされるときに実行されるクリーンアップ関数
//     return () => {
//       dispatch(resetDoll()); // resetDollアクションをdispatchしてReduxストアの値をリセットする
//     };
//   }, [dispatch]);


//   return (
//     <>
//       <h3>性別：{gender[3]}</h3>
//       <h3>学年：{age[2]}</h3>
//       <h2>乗り物が好きですか？</h2>
//       {/* 「はい」ボタン */}
//       <Button onClick={() => vehicle_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//       {/* 「いいえ」ボタン */}
//       <Button onClick={() => vehicle_No_handleClick()} style={{ fontSize: '1em' }}>いいえ</Button>
//       {/* 「戻る」ボタン */}
//       <Button variant="contained" color="inherit" onClick={() => vehicle_back_handleClick()}>戻る</Button>

//     </>
//   );
// }

// export default Vehicle;



// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { vehicle_Yes, vehicle_No, resetDoll, vehicle_Back} from "../../actions"
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";

// const homeUrl = process.env.PUBLIC_URL;


//   const Vehicle = () => {

//     const gender = useSelector((state) => state.gender);
//     const age = useSelector((state) => state.age);
//     const exercise = useSelector((state) => state.exercise);
//     const game = useSelector((state) => state.game);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const navigateUrls = {
//       0: {
//         1:`${homeUrl}/result`,
//         2:`${homeUrl}/doll`,
//         BACK: `${homeUrl}/game`,
//       },                 
//       1: `${homeUrl}/result`,
//       2: `${homeUrl}/result`,
//     };

//     const vehicle_Yes_handleClick = () => {
//         dispatch(vehicle_Yes());
//     };
  
//     const vehicle_No_handleClick = () => {
//         dispatch(vehicle_No());
//     };
    
//     const vehicle_back_handleClick = () => {
//         dispatch(vehicle_Back());
//     };


//     const vehicle = useSelector((state) => state.vehicle);

//     useEffect(() => {
//       // eslint-disable-next-line no-whitespace-before-property
//       const navigateUrl = navigateUrls[gender[0]] [vehicle[0]] || navigateUrls[gender[0]];
//       navigate(navigateUrl);
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [vehicle])

//     useEffect(() => {
//       return () => {
//         dispatch(resetDoll());
//       };
//     }, [dispatch]);

//         return (
//           <>
//             <h3>選択されているもの</h3>
//             <h3>性別：{gender[3]}</h3>
//             <h3>学年：{age[2]}</h3>
//             <h3>質問1：{exercise[1]}</h3>
//             <h3>ゲームが好きですか？：{game[1]}</h3>
//             <h2>乗り物が好きですか？</h2>

//             <Button onClick={() => vehicle_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//             <Button onClick={() => vehicle_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>
//             <Button variant="contained" color="inherit" onClick={() => vehicle_back_handleClick()}>戻る</Button>
//             {/* <Button variant="contained" color="inherit" onClick={() => navigate(-1)}>戻る</Button> */}
//           </>
//         );
        
//     }
//     export default Vehicle;

// import React, { useEffect, } from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { vehicle1, vehicle2, resetDoll} from "../../actions"
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";

// const homeUrl = process.env.PUBLIC_URL;


//   const Vehicle = () => {

//     const gender = useSelector((state) => state.gender);
//     const age = useSelector((state) => state.age);
//     const exercise = useSelector((state) => state.exercise);
//     const game = useSelector((state) => state.game);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const navigateUrls = {
//       0: {
//         2:`${homeUrl}/doll`
//       },                 
//       1: `${homeUrl}/result`,
//       2: `${homeUrl}/result`,
//     };

//     const vehicle_Yes_handleClick = () => {
//         dispatch(vehicle1());
//         navigate(`${homeUrl}/result`);
//       }
        
        
//     const vehicle_No_handleClick = () => {
//         dispatch(vehicle2());
//       }

//     const vehicle = useSelector((state) => state.vehicle);

//     useEffect(() => {
//       // eslint-disable-next-line no-whitespace-before-property
//       const navigateUrl = navigateUrls[gender[0]] [vehicle[0]] || navigateUrls[gender[0]];
//       navigate(navigateUrl);
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [vehicle])

//     useEffect(() => {
//       return () => {
//         dispatch(resetDoll());
//       };
//     }, [dispatch]);

//         return (
//           <>
//             <h3>選択されているもの</h3>
//             <h3>性別：{gender[3]}</h3>
//             <h3>学年：{age[2]}</h3>
//             <h3>質問1：{exercise[1]}</h3>
//             <h3>ゲームが好きですか？：{game[1]}</h3>
//             <h2>乗り物が好きですか？</h2>

//             <Button onClick={() => vehicle_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//             <Button onClick={() => vehicle_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>
//             <Button variant="contained" color="inherit" onClick={() => navigate(-1)}>戻る</Button>
//           </>
//         );
        
//     }
//   export default Vehicle;



// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import { vehicle1, vehicle2,} from "../../actions"
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react'
// import "../styles.css";


// const homeUrl = process.env.PUBLIC_URL;

// const Vehicle = () => {
//   const gender = useSelector((state) => state.gender);
//   const age = useSelector((state) => state.age);
//   const exercise = useSelector((state) => state.exercise);
//   const game = useSelector((state) => state.game);
  
//   const navigate = useNavigate();
//   const dispatch = useDispatch();


//   const navigateUrls = {
//     0: {
//       1: `${homeUrl}/result`,
//       2:`${homeUrl}/doll`
//     },                 
//     1: `${homeUrl}/result`,
//     2: `${homeUrl}/result`,
//   };
//   const vehicle_Yes_handleClick = () => {
//     dispatch(vehicle1());
//     navigate(`${homeUrl}/result`);
//   }
  
  
//   const vehicle_No_handleClick = () => {
//     dispatch(vehicle2());
//   }
  
//   const vehicle = useSelector((state) => state.vehicle);
  
//   useEffect(() => {
//     // eslint-disable-next-line no-whitespace-before-property
//     const navigateUrl = navigateUrls[gender[0]] [vehicle[0]] || navigateUrls[gender[0]];
//     navigate(navigateUrl);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [vehicle])


//   return (
//     <>
//       <h3>選択されているもの</h3>
//       <h3>性別：{gender[3]}</h3>
//       <h3>学年：{age[2]}</h3>
//       <h3>質問1：{exercise[1]}</h3>
//       <h3>ゲームが好きですか？：{game[1]}</h3>
//       <h2>乗り物が好きですか？</h2>
//         <Button onClick={() => vehicle_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
//         <Button onClick={() => vehicle_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>
//         <Button onClick={() => setTimeout(() => navigate(-1), 0)} style={{fontSize: '1em'}}>戻る</Button>
//     </>
//   );
// }

// export default Vehicle;