import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { other, resetCraft, resetDoll, resetOther, stuffedtoy_Back, stuffedtoy_No, stuffedtoy_Yes } from "../../../actions"
import { useNavigate, } from "react-router-dom"
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

const Stuffedtoy = () => {
  // Reduxのstateから必要な値を取得するためのフック
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age);
  const stuffedtoy = useSelector((state) => state.stuffedtoy);
  const other = useSelector((state) => state.other);

  // ページ遷移に使用するフック
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
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
    dispatch(resetOther())
    dispatch(stuffedtoy_Yes());
  };
  
  //「いいえ」ボタンがクリックされた時の処理
  const stuffedtoy_No_handleClick = () => {
    dispatch(stuffedtoy_No());
    dispatch(other())
  };
  
  //「戻る」ボタンがクリックされた時の処理
  const stuffedtoy_back_handleClick = () => {
    dispatch(stuffedtoy_Back());
    dispatch(resetDoll());
    dispatch(resetCraft());
  };
  
  // stuffedtoyのステートが変更されるたびに適切なURLに遷移する
  useEffect(() => {
    const navigateUrl = navigateUrls[gender[0]][age[2]][stuffedtoy] || navigateUrls[gender[0]];
    navigate(navigateUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stuffedtoy]);
  
  useEffect(() => {
    // コンポーネントがアンマウントされるときに実行されるクリーンアップ関数
    return () => {
      dispatch(resetCraft()); // resetCraftアクションをdispatchしてReduxストアの値をリセットする
      dispatch(resetOther())
    };
  }, [dispatch]);

  console.log("other" + other)

  return (
    <>
      <Header text="流行から選ぶ"/>
      <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">   
      <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="center" mt="25%">
          ぬいぐるみが好きですか？
      </Text>
      <Stack mt="30%" width="100%" maxW="400px">
        <Flex direction="row" justify="center">
            <Button onClick={() => stuffedtoy_Yes_handleClick()} size="xl" mr="10%">
              はい
            </Button>
            <Button onClick={() => stuffedtoy_No_handleClick()} size="xl" >
              いいえ
            </Button>
          </Flex>
      </Stack>
      </Flex>
      <Button onClick={() => stuffedtoy_back_handleClick()} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} variant='outline' colorScheme='twitter'>
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
            <PopoverHeader><Text fontSize='35px'><b>ヘルプ</b></Text></PopoverHeader>
            <PopoverBody><Text fontSize='30px'>質問の回答を選択肢から選んでください</Text></PopoverBody>
            <PopoverBody><Text fontSize='30px'>タップをすることによって選択できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/画面ごとの使い方/流行から選ぶ/質問画面" target="_blank">
                <Button colorScheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>
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