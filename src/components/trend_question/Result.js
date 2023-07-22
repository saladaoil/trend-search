import { useState } from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import toys_db from '../../db/toy_db';
import './css.css'
import { useNavigate, } from "react-router-dom"
import { resetCraft, resetDoll, resetOther, resetSport, resetStuffedtoy, resetVehicle, resetVideogame,} from '../../actions';
import { 
  Box, 
  Text, 
  Button, 
  Image,
  Stack,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import '../Basic/help.css'

import AppBar from './AppBar_treslt';
import FooBar from './AppBar_foot';


const homeUrl = process.env.PUBLIC_URL;

const Result = () => {
  
  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();

  // Reduxストアからステートを取得する
  const gender_val = useSelector((state) => state.gender);
  const age_val = useSelector((state) => state.age);
  const sport = useSelector((state) => state.sport);
  const videogame = useSelector((state) => state.videogame);
  const vehicle = useSelector((state) => state.vehicle);
  const craft = useSelector((state) => state.craft);
  const doll = useSelector((state) => state.doll);
  const stuffedtoy = useSelector((state) => state.stuffedtoy);
  const other = useSelector((state) => state.other);

  // Reduxのstateから必要な値を取得
  const [gender, common_gender ,all_gender] = gender_val;
  const [from_age, to_age] = age_val;

  // ナビゲーションのURLマッピング
  const navigateUrls = {
    BACK:{
          スポーツ: `${homeUrl}/sport`,
          ビデオゲーム: `${homeUrl}/videogame`,
          乗り物: `${homeUrl}/vehicle`,
          工作: `${homeUrl}/craft`,
          人形: `${homeUrl}/doll`,
          ぬいぐるみ: `${homeUrl}/stuffedtoy`,
          その他: `${homeUrl}/exercise`,
    } 
  };

  
  // 「戻る」ボタンがクリックされた時の処理
  const back_handleClick = () => {
    const sportValue = sport;           // sportの値を一時的に保持
    const videogameValue = videogame;   // videogameの値を一時的に保持
    const vehicleValue = vehicle;       // vehicleの値を一時的に保持
    const craftValue = craft;           // craftの値を一時的に保持
    const dollValue = doll;             // dollの値を一時的に保持
    const stuffedtoyValue = stuffedtoy; // stuffedtoyの値を一時的に保持
    const otherValue = other;           // otherの値を一時的に保持
  

    const resetActions = [
      resetSport(),      // Reduxストアのsportをリセットする
      resetVideogame(),  // Reduxストアのvideogameをリセットする
      resetVehicle(),    // Reduxストアのvehicleをリセットする
      resetCraft(),      // Reduxストアのcraftをリセットする
      resetDoll(),       // Reduxストアのdollをリセットする
      resetStuffedtoy(), // Reduxストアのstuffedtoyをリセットする
      resetOther(),      // Reduxストアのotherをリセットする
    ];
  
    // resetActionsの中身を実行する
    resetActions.forEach(action => dispatch(action));

    // 遷移先URLを判断し、適切なページに遷移
    const navigateUrl =
      navigateUrls.BACK[sportValue] ||
      navigateUrls.BACK[videogameValue] ||
      navigateUrls.BACK[vehicleValue] ||
      navigateUrls.BACK[craftValue] ||
      navigateUrls.BACK[dollValue] ||
      navigateUrls.BACK[stuffedtoyValue] ||
      navigateUrls.BACK[otherValue];
  
      navigate(navigateUrl);
  };
  // おもちゃのデータを取得
  const toys = toys_db; 
  
  // おもちゃをフィルタリングする
  let toy_filterResult = toys.filter(function (value) {
    return (
      (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
      !(value.min_age > to_age || value.max_age < from_age) &&
      (
        (value.category && value.category === sport) ||
        (value.category && value.category === videogame) ||
        (value.category && value.category === vehicle) ||
        (value.category && value.category === craft) ||
        (value.category && value.category === doll) ||
        (value.category && value.category === stuffedtoy) ||
        (value.category && value.category === other)
      ) 
    );
  });

  
  // フィルタリングされたおもちゃの表示データを作成する
  let toy_dis = toy_filterResult.map(function(toy) {
    return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url };
  });

  
  // ページネーションのための状態と関数を定義
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 7;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // 次のページに移動する関数
  const goToNextPage = () => setPageNumber(pageNumber + 1);
  
  // 前のページに移動する関数
  const goToPrevPage = () => setPageNumber(pageNumber - 1);
  
  // 現在のページのおもちゃの表示データを取得
  const currentToyDis = toy_dis.slice(startIndex, endIndex);

  const totalNumberOfCards = toy_dis.length;



  return (
    <>
      <AppBar />

      {totalNumberOfCards >7 && (
      <FooBar />
          )}
      <Box position='fixed' top='2%' right='2%'>
        <Button height='40px' width='120px' colorscheme='gray' onClick={() => navigate(`${homeUrl}/firstchoice`)}>
          <Text as='i' fontSize='18px' >やりなおす</Text>
        </Button>
      </Box>

      <Box mt="80px" mb="80px" px="1">
        <Stack spacing={1} align='stretch'>
          {currentToyDis.map((toy) => (
            <Box px={1} pb={1} key={`${toy.name}-${toy.price}`}>
              <a href={toy.page_url} target='_blank' rel='noopener noreferrer'>
                <Flex
                  key={`${toy.name}-${toy.price}`}
                  borderWidth='1px'
                  borderRadius='lg'
                  boxShadow='md'
                  alignItems='center'
                  justifyContent='flex-start'
                  mb={1}
                  _hover={{ cursor: 'pointer' }}
                >
                  <Image src={toy.image_url} alt={toy.name} boxSize='80px' />
                  <Stack align='flex-start' px={2}>
                    <Text fontSize='17' textAlign='left' as='b'>
                      {toy.name}
                    </Text>
                    <Text fontSize='16'>
                      {toy.price}円
                    </Text>
                  </Stack>
                </Flex>
              </a>
            </Box>
          ))}
        </Stack>

        <Box position="fixed" bottom="20px" left="5%">
          <Button height="50px" width="80px" colorscheme="twitter" onClick={() => back_handleClick()} variant="outline">
            <Text as="b" fontSize="20px">
              ◀
            </Text>
            <Text as="i" fontSize="20px">
              戻る
            </Text>
          </Button>
        </Box>

        <Box position='fixed' bottom='3%' left='50%' transform='translateX(-50%)'>
        <Flex alignItems='center'>
          {pageNumber >= 2 && (
            <Button
              right='50%'
              variant='outline'
              colorscheme="twitter"
              onClick={goToPrevPage}
              className='BottomRadius'
            >
              前のページ
            </Button>
          )}



          

          {pageNumber * itemsPerPage <= totalNumberOfCards && (
            <Button
              left='50%'
              variant='outline'
              colorscheme="twitter"
              onClick={goToNextPage}
              disabled={currentToyDis.length < itemsPerPage}
              className='BottomRadius'
            >
              次のページ
            </Button>
          )}
        </Flex>
      </Box>

      
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
            <PopoverBody><Text fontSize='30px'>商品一覧です。<br />やり直したい場合は右上のボタンを押してください</Text></PopoverBody>
            <PopoverBody><Text fontSize='30px'>タップで商品の詳細を確認できます</Text></PopoverBody>
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

export default Result;

// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { useDispatch, useSelector,} from 'react-redux';
// import toys_db from '../../db/toy_db';
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react';
// import "./styles.css";
// import { result_Back } from '../../actions';
// import { resetCraft, resetDoll, resetOther, resetSport, resetStuffedtoy, resetVehicle, resetVideogame } from '../../actions';

// const homeUrl = process.env.PUBLIC_URL;

// const Result = () => {
  
//     // 画面遷移を行うための関数
//     const navigate = useNavigate();

//     // Reduxのアクションをディスパッチするための関数
//     const dispatch = useDispatch();
  
//     // Reduxストアからステートを取得する
//     const gender_val = useSelector((state) => state.gender);
//     const age_val = useSelector((state) => state.age);
//     const sport = useSelector((state) => state.sport);
//     const videogame = useSelector((state) => state.videogame);
//     const vehicle = useSelector((state) => state.vehicle);
//     const craft = useSelector((state) => state.craft);
//     const doll = useSelector((state) => state.doll);
//     const stuffedtoy = useSelector((state) => state.stuffedtoy);
//     const other = useSelector((state) => state.other);
  
//     // Reduxのstateから必要な値を取得
//     const [gender, common_gender ,all_gender] = gender_val;
//     const [from_age, to_age] = age_val;
  
//     // ナビゲーションのURLマッピング
//     const navigateUrls = {
//       BACK:{
//             スポーツ: `${homeUrl}/sport`,
//             ビデオゲーム: `${homeUrl}/videogame`,
//             乗り物: `${homeUrl}/vehicle`,
//             工作: `${homeUrl}/craft`,
//             人形: `${homeUrl}/doll`,
//             ぬいぐるみ: `${homeUrl}/stuffedtoy`,
//             その他: `${homeUrl}/exercise`,
//       } 
//     };
  
    
//     // 「戻る」ボタンがクリックされた時の処理
//     const back_handleClick = () => {
//       const sportValue = sport;           // sportの値を一時的に保持
//       const videogameValue = videogame;   // videogameの値を一時的に保持
//       const vehicleValue = vehicle;       // vehicleの値を一時的に保持
//       const craftValue = craft;           // craftの値を一時的に保持
//       const dollValue = doll;             // dollの値を一時的に保持
//       const stuffedtoyValue = stuffedtoy; // stuffedtoyの値を一時的に保持
//       const otherValue = other;           // otherの値を一時的に保持
    
  
//       const resetActions = [
//         resetSport(),      // Reduxストアのsportをリセットする
//         resetVideogame(),  // Reduxストアのvideogameをリセットする
//         resetVehicle(),    // Reduxストアのvehicleをリセットする
//         resetCraft(),      // Reduxストアのcraftをリセットする
//         resetDoll(),       // Reduxストアのdollをリセットする
//         resetStuffedtoy(), // Reduxストアのstuffedtoyをリセットする
//         resetOther(),      // Reduxストアのotherをリセットする
//       ];
    
//       // resetActionsの中身を実行する
//       resetActions.forEach(action => dispatch(action));
  
//       // 遷移先URLを判断し、適切なページに遷移
//       const navigateUrl =
//         navigateUrls.BACK[sportValue] ||
//         navigateUrls.BACK[videogameValue] ||
//         navigateUrls.BACK[vehicleValue] ||
//         navigateUrls.BACK[craftValue] ||
//         navigateUrls.BACK[dollValue] ||
//         navigateUrls.BACK[stuffedtoyValue] ||
//         navigateUrls.BACK[otherValue];
    
//         navigate(navigateUrl);
//     };
//     // おもちゃのデータを取得
//     const toys = toys_db; 
    
//     // おもちゃをフィルタリングする
//     let toy_filterResult = toys.filter(function (value) {
//       return (
//         (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
//         !(value.min_age > to_age || value.max_age < from_age) &&
//         (
//           (value.category && value.category === sport) ||
//           (value.category && value.category === videogame) ||
//           (value.category && value.category === vehicle) ||
//           (value.category && value.category === craft) ||
//           (value.category && value.category === doll) ||
//           (value.category && value.category === stuffedtoy) ||
//           (value.category && value.category === other)
//         ) 
//       );
//     });
  
//   // フィルタリングされたおもちゃの表示データを作成する
//   let toy_dis = toy_filterResult.map(function(toy) {
//     return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url };
//   });

  
  
//   // ページネーションのための状態と関数を定義
//   const [pageNumber, setPageNumber] = useState(1);
//   const itemsPerPage = 7;
//   const startIndex = (pageNumber - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
  
//   // ページ遷移に使用するフック
  
//   // 次のページに移動する関数
//   const goToNextPage = () => setPageNumber(pageNumber + 1);
  
//   // 前のページに移動する関数
//   const goToPrevPage = () => setPageNumber(pageNumber - 1);
  
//   // 現在のページのおもちゃの表示データを取得
//   const currentToyDis = toy_dis.slice(startIndex, endIndex);


//   return (
//     <>
//       <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)}>最初へ</Button>
//       <Button variant="contained" color="inherit" onClick={() => back_handleClick()}>戻る</Button>
//       <h2>結果</h2>
//       <Button variant="contained" color="primary" onClick={() => navigate(`${homeUrl}/category`)} style={{ fontSize: '1em' }}>絞り込み</Button>
//       <div>
//         <ul>
//           {/* 現在のページのおもちゃの表示データをマップして表示 */}
//           {currentToyDis.map(function (toy) {
//             return (
//               <li key={`${toy.name}-${toy.price}`}>
//                 <a href={toy.page_url} target="_blank" rel="noopener noreferrer">
//                   <h3>{toy.name}</h3>
//                   <h3>{toy.price}円</h3>
//                   <img src={toy.image_url} alt={toy.name} />
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//         <div className="pagination">
//           {/* ページネーションのボタンを表示 */}
//           <Button variant="contained" color="inherit" onClick={goToPrevPage} disabled={pageNumber === 1}>前のページ</Button>
//           <Button variant="contained" color="inherit" onClick={goToNextPage} disabled={currentToyDis.length < itemsPerPage}>次のページ</Button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Result;

// import React from 'react'
// import { useState } from 'react';
// import { useDispatch, useSelector,} from 'react-redux';
// import toys_db from '../db/toy_db';
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react';
// import "./styles.css";
// import { resetOther } from '../actions';

// const homeUrl = process.env.PUBLIC_URL;

// const Result = () => {

//   const dispatch = useDispatch();

//   // おもちゃのデータを取得
//   const toys = toys_db;
  
//   // ページネーションのための状態と関数を定義
//   const [pageNumber, setPageNumber] = useState(1);
//   const itemsPerPage = 7;
//   const startIndex = (pageNumber - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // ページ遷移に使用するフック
//   const navigate = useNavigate();

//   // 次のページに移動する関数
//   const goToNextPage = () => setPageNumber(pageNumber + 1);

//   // 前のページに移動する関数
//   const goToPrevPage = () => setPageNumber(pageNumber - 1);

//   // Reduxのstateから必要な値を取得するためのフック
//   const gender_val = useSelector((state) => state.gender);
//   const age_val = useSelector((state) => state.age);
//   const exercise_val = useSelector((state) => state.exercise);
//   const sport_val = useSelector((state) => state.sport);
//   const game_val = useSelector((state) => state.game);
//   const videogame_val = useSelector((state) => state.videogame);
//   const vehicle_val = useSelector((state) => state.vehicle);
//   const craft_val = useSelector((state) => state.craft);
//   const doll_val = useSelector((state) => state.doll);
//   const stuffedtoy_val = useSelector((state) => state.stuffedtoy);
//   const anser_val = useSelector((state) => state.common);

//   // Reduxのstateから必要な値を取得
//   const [gender, common_gender ,all_gender] = gender_val;
//   const [from_age, to_age] = age_val;
//   const [exercise] = exercise_val;
//   const [sport] = sport_val;
//   const [game] = game_val;
//   const [videogame] = videogame_val;
//   const [vehicle] = vehicle_val;
//   const [craft] = craft_val;
//   const [doll] = doll_val;
//   const [stuffedtoy] = stuffedtoy_val;
//   const [anser_no] = anser_val;

//   // おもちゃをフィルタリングする
//   let toy_filterResult = toys.filter(function (value) {
//     return (
//       (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
//       !(value.min_age > to_age || value.max_age < from_age) &&
//       value.exercise === exercise &&
//       ((value.sport && value.sport === sport) ||
//        ((value.other && value.other === anser_no))||
//         (
//           (value.game && value.game === game) &&
//           (
//             (value.videogame && value.videogame === videogame) ||
//             (value.vehicle && value.vehicle === vehicle) ||
//             (value.craft && value.craft === craft) ||
//             (value.doll && value.doll === doll) ||
//             (value.stuffedtoy && value.stuffedtoy === stuffedtoy) 
//           ) 
//         )
//       )
//     );
//   });

//   // フィルタリングされたおもちゃの表示データを作成する
//   let toy_dis = toy_filterResult.map(function(toy) {
//     return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url };
//   });

//   // 現在のページのおもちゃの表示データを取得
//   const currentToyDis = toy_dis.slice(startIndex, endIndex);

//   const back_handleClick = () => {
//     dispatch(resetOther())
//     navigate(`${homeUrl}/game`)
//   }

//   return (
//     <>
//       <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)}>最初へ</Button>
//       <Button variant="contained" color="inherit" onClick={() => back_handleClick()}>戻る</Button>
//       <h2>結果</h2>
//       <Button variant="contained" color="primary" onClick={() => navigate(`${homeUrl}/category`)} style={{ fontSize: '1em' }}>絞り込み</Button>
//       <div>
//         <ul>
//           {/* 現在のページのおもちゃの表示データをマップして表示 */}
//           {currentToyDis.map(function (toy) {
//             return (
//               <li key={`${toy.name}-${toy.price}`}>
//                 <a href={toy.page_url} target="_blank" rel="noopener noreferrer">
//                   <h3>{toy.name}</h3>
//                   <h3>{toy.price}円</h3>
//                   <img src={toy.image_url} alt={toy.name} />
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//         <div className="pagination">
//           {/* ページネーションのボタンを表示 */}
//           <Button variant="contained" color="inherit" onClick={goToPrevPage} disabled={pageNumber === 1}>前のページ</Button>
//           <Button variant="contained" color="inherit" onClick={goToNextPage} disabled={currentToyDis.length < itemsPerPage}>次のページ</Button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Result;


// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { useDispatch, useSelector,} from 'react-redux';
// import toys_db from '../db/toy_db';
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react';
// import "./styles.css";
// import { result_back, } from '../actions';

// const homeUrl = process.env.PUBLIC_URL;

// const Result = () => {
  
//   const dispatch = useDispatch();

//   // Reduxのstateから必要な値を取得するためのフック
//   const gender_val = useSelector((state) => state.gender);
//   const age_val = useSelector((state) => state.age);
//   const exercise_val = useSelector((state) => state.exercise);
//   const sport = useSelector((state) => state.sport);
//   const game_val = useSelector((state) => state.game);
//   const videogame = useSelector((state) => state.videogame);
//   const vehicle = useSelector((state) => state.vehicle);
//   const craft = useSelector((state) => state.craft);
//   const doll = useSelector((state) => state.doll);
//   const stuffedtoy = useSelector((state) => state.stuffedtoy);
//   const answer_common = useSelector((state) => state.common);

//   // Reduxのstateから必要な値を取得
//   const [gender, common_gender ,all_gender] = gender_val;
//   const [from_age, to_age] = age_val;
//   const [exercise] = exercise_val;
//   const [game] = game_val;

//   const navigateUrls = {
//     BACK:{
//           スポーツ: `${homeUrl}/sport`,
//           ビデオゲーム: `${homeUrl}/videogame`,
//           乗り物: `${homeUrl}/vehicle`,
//           工作: `${homeUrl}/craft`,
//           人形: `${homeUrl}/doll`,
//           ぬいぐるみ: `${homeUrl}/stuffedtoy`,
//           その他: `${homeUrl}/exercise`,
//     } 
//   };

//   console.log(answer_common)

//   useEffect(() => {
//     // vehicleの状態に応じて適切なURLに遷移する
//     const navigateUrl = navigateUrls[answer_common][sport]|| 
//                         navigateUrls[answer_common][videogame] || 
//                         navigateUrls[answer_common][vehicle] || 
//                         navigateUrls[answer_common][craft] || 
//                         navigateUrls[answer_common][doll] || 
//                         navigateUrls[answer_common][stuffedtoy] || 
//                         navigateUrls[answer_common]

//     navigate(navigateUrl);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [answer_common]);

//   const back_handleClick = () => {
//     dispatch(result_back());
//   }

//   // おもちゃのデータを取得
//   const toys = toys_db; 

//   // おもちゃをフィルタリングする
//   let toy_filterResult = toys.filter(function (value) {
//     return (
//       (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
//       !(value.min_age > to_age || value.max_age < from_age) &&
//       value.exercise === exercise &&
//       ((value.sport && value.sport === sport) ||
//        ((value.other && value.other === answer_common))||
//         (
//           (value.game && value.game === game) &&
//           (
//             (value.videogame && value.videogame === videogame) ||
//             (value.vehicle && value.vehicle === vehicle) ||
//             (value.craft && value.craft === craft) ||
//             (value.doll && value.doll === doll) ||
//             (value.stuffedtoy && value.stuffedtoy === stuffedtoy) 
//           ) 
//         )
//       )
//     );
//   });

//   // フィルタリングされたおもちゃの表示データを作成する
//   let toy_dis = toy_filterResult.map(function(toy) {
//     return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url };
//   });

  
  
//   // ページネーションのための状態と関数を定義
//   const [pageNumber, setPageNumber] = useState(1);
//   const itemsPerPage = 7;
//   const startIndex = (pageNumber - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // ページ遷移に使用するフック
//   const navigate = useNavigate();

//   // 次のページに移動する関数
//   const goToNextPage = () => setPageNumber(pageNumber + 1);
  
//   // 前のページに移動する関数
//   const goToPrevPage = () => setPageNumber(pageNumber - 1);

//   // 現在のページのおもちゃの表示データを取得
//   const currentToyDis = toy_dis.slice(startIndex, endIndex);


//   return (
//     <>
//       <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)}>最初へ</Button>
//       <Button variant="contained" color="inherit" onClick={() => back_handleClick()}>戻る</Button>
//       <h2>結果</h2>
//       <Button variant="contained" color="primary" onClick={() => navigate(`${homeUrl}/category`)} style={{ fontSize: '1em' }}>絞り込み</Button>
//       <div>
//         <ul>
//           {/* 現在のページのおもちゃの表示データをマップして表示 */}
//           {currentToyDis.map(function (toy) {
//             return (
//               <li key={`${toy.name}-${toy.price}`}>
//                 <a href={toy.page_url} target="_blank" rel="noopener noreferrer">
//                   <h3>{toy.name}</h3>
//                   <h3>{toy.price}円</h3>
//                   <img src={toy.image_url} alt={toy.name} />
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//         <div className="pagination">
//           {/* ページネーションのボタンを表示 */}
//           <Button variant="contained" color="inherit" onClick={goToPrevPage} disabled={pageNumber === 1}>前のページ</Button>
//           <Button variant="contained" color="inherit" onClick={goToNextPage} disabled={currentToyDis.length < itemsPerPage}>次のページ</Button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Result;

// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { useDispatch, useSelector,} from 'react-redux';
// import toys_db from '../db/toy_db';
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react';
// import "./styles.css";
// import { result_back, } from '../actions';

// const homeUrl = process.env.PUBLIC_URL;

// const Result = () => {
  
//   const dispatch = useDispatch();

//   // Reduxのstateから必要な値を取得するためのフック
//   const gender_val = useSelector((state) => state.gender);
//   const age_val = useSelector((state) => state.age);
//   const exercise_val = useSelector((state) => state.exercise);
//   const sport = useSelector((state) => state.sport);
//   const game_val = useSelector((state) => state.game);
//   const videogame = useSelector((state) => state.videogame);
//   const vehicle = useSelector((state) => state.vehicle);
//   const craft = useSelector((state) => state.craft);
//   const doll = useSelector((state) => state.doll);
//   const stuffedtoy = useSelector((state) => state.stuffedtoy);
//   const answer_common = useSelector((state) => state.common);

//   // Reduxのstateから必要な値を取得
//   const [gender, common_gender ,all_gender] = gender_val;
//   const [from_age, to_age] = age_val;
//   const [exercise] = exercise_val;
//   // const [sport] = sport_val;
//   const [game] = game_val;
//   // const [videogame] = videogame_val;
//   // const [vehicle] = vehicle_val;
//   // const [craft] = craft_val;
//   // const [doll] = doll_val;
//   // const [stuffedtoy] = stuffedtoy_val;
//   // const [anser_no] = anser_val;


//   const navigateUrls = {
//     BACK:{
//           スポーツ: `${homeUrl}/sport`,
//           ビデオゲーム: `${homeUrl}/videogame`,
//           乗り物: `${homeUrl}/vehicle`,
//           工作: `${homeUrl}/craft`,
//           人形: `${homeUrl}/doll`,
//           ぬいぐるみ: `${homeUrl}/stuffedtoy`,
//           その他: `${homeUrl}/exercise`,
//     } 
//   };

//   // const navigateUrls = {
//   //   0: {
//   //     幼稚園: {
//   //       スポーツ: `${homeUrl}/sport`,
//   //       ビデオゲーム: `${homeUrl}/videogame`,
//   //       乗り物: `${homeUrl}/vehicle`,
//   //       工作: `${homeUrl}/craft`,
//   //       人形: `${homeUrl}/doll`,
//   //       ぬいぐるみ: `${homeUrl}/stuffedtoy`,
//   //       その他: `${homeUrl}/exercise`,
//   //     },
//   //     低学年: {
//   //       スポーツ: `${homeUrl}/sport`,
//   //       ビデオゲーム: `${homeUrl}/videogame`,
//   //       乗り物: `${homeUrl}/vehicle`,
//   //       工作: `${homeUrl}/craft`,
//   //       人形: `${homeUrl}/doll`,
//   //       ぬいぐるみ: `${homeUrl}/stuffedtoy`,
//   //       その他: `${homeUrl}/exercise`,
//   //     },
//   //     中学年: {
//   //       スポーツ: `${homeUrl}/sport`,
//   //       ビデオゲーム: `${homeUrl}/videogame`,
//   //       乗り物: `${homeUrl}/vehicle`,
//   //       工作: `${homeUrl}/craft`,
//   //       人形: `${homeUrl}/doll`,
//   //       ぬいぐるみ: `${homeUrl}/stuffedtoy`,
//   //       その他: `${homeUrl}/exercise`,
//   //     },
//   //     高学年: {
//   //       スポーツ: `${homeUrl}/sport`,
//   //       ビデオゲーム: `${homeUrl}/videogame`,
//   //       乗り物: `${homeUrl}/vehicle`,
//   //       工作: `${homeUrl}/craft`,
//   //       人形: `${homeUrl}/doll`,
//   //       ぬいぐるみ: `${homeUrl}/stuffedtoy`,
//   //       その他: `${homeUrl}/exercise`,
//   //     },
//   //     選択なし: {
//   //       スポーツ: `${homeUrl}/sport`,
//   //       ビデオゲーム: `${homeUrl}/videogame`,
//   //       乗り物: `${homeUrl}/vehicle`,
//   //       工作: `${homeUrl}/craft`,
//   //       人形: `${homeUrl}/doll`,
//   //       ぬいぐるみ: `${homeUrl}/stuffedtoy`,
//   //       その他: `${homeUrl}/exercise`,
//   //     },
//   //   },
//   //   1: {
//   //     幼稚園: {
//   //       スポーツ: `${homeUrl}/sport`,
//   //       ビデオゲーム: `${homeUrl}/videogame`,
//   //       乗り物: `${homeUrl}/vehicle`,
//   //       工作: `${homeUrl}/craft`,
//   //       人形: `${homeUrl}/doll`,
//   //       ぬいぐるみ: `${homeUrl}/stuffedtoy`,
//   //       その他: `${homeUrl}/exercise`,
//   //     },
//   //     低学年: {
//   //       スポーツ: `${homeUrl}/sport`,
//   //       ビデオゲーム: `${homeUrl}/videogame`,
//   //       乗り物: `${homeUrl}/vehicle`,
//   //       工作: `${homeUrl}/craft`,
//   //       人形: `${homeUrl}/doll`,
//   //       ぬいぐるみ: `${homeUrl}/stuffedtoy`,
//   //       その他: `${homeUrl}/exercise`,
//   //     },
//   //     選択なし: {
//   //       スポーツ: `${homeUrl}/sport`,
//   //       ビデオゲーム: `${homeUrl}/videogame`,
//   //       乗り物: `${homeUrl}/vehicle`,
//   //       工作: `${homeUrl}/craft`,
//   //       人形: `${homeUrl}/doll`,
//   //       ぬいぐるみ: `${homeUrl}/stuffedtoy`,
//   //       その他: `${homeUrl}/exercise`,
//   //     },
//   //   },
//   // };


//   console.log(answer_common)

//   useEffect(() => {
//     // vehicleの状態に応じて適切なURLに遷移する
//     const navigateUrl = navigateUrls[answer_common][sport]|| 
//                         navigateUrls[answer_common][videogame] || 
//                         navigateUrls[answer_common][vehicle] || 
//                         navigateUrls[answer_common][craft] || 
//                         navigateUrls[answer_common][doll] || 
//                         navigateUrls[answer_common][stuffedtoy] || 
//                         navigateUrls[answer_common]


//     navigate(navigateUrl);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [answer_common]);


//   // useEffect(() => {
//   //   // vehicleの状態に応じて適切なURLに遷移する
//   //   const navigateUrl = 
//   //   navigateUrls[gender[0]][age_val[2]][sport] || 
//   //   navigateUrls[gender[0]][age_val[2]][videogame] || 
//   //   navigateUrls[gender[0]][age_val[2]][vehicle] || 
//   //   navigateUrls[gender[0]][age_val[2]][craft] || 
//   //   navigateUrls[gender[0]][age_val[2]][doll] || 
//   //   navigateUrls[gender[0]][age_val[2]][stuffedtoy] || 
//   //   navigateUrls[gender[0]][age_val[2]][anser_no] || 
//   //   navigateUrls[gender[0]];


//   //   navigate(navigateUrl);
//   // // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, [sport,videogame,vehicle,craft,doll,stuffedtoy]);


//   const back_handleClick = () => {
//     dispatch(result_back());
//   }

//   // おもちゃのデータを取得
//   const toys = toys_db; 

//   // おもちゃをフィルタリングする
//   let toy_filterResult = toys.filter(function (value) {
//     return (
//       (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
//       !(value.min_age > to_age || value.max_age < from_age) &&
//       value.exercise === exercise &&
//       ((value.sport && value.sport === sport) ||
//        ((value.other && value.other === answer_common))||
//         (
//           (value.game && value.game === game) &&
//           (
//             (value.videogame && value.videogame === videogame) ||
//             (value.vehicle && value.vehicle === vehicle) ||
//             (value.craft && value.craft === craft) ||
//             (value.doll && value.doll === doll) ||
//             (value.stuffedtoy && value.stuffedtoy === stuffedtoy) 
//           ) 
//         )
//       )
//     );
//   });

//   // フィルタリングされたおもちゃの表示データを作成する
//   let toy_dis = toy_filterResult.map(function(toy) {
//     return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url };
//   });

  
  
//   // ページネーションのための状態と関数を定義
//   const [pageNumber, setPageNumber] = useState(1);
//   const itemsPerPage = 7;
//   const startIndex = (pageNumber - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // ページ遷移に使用するフック
//   const navigate = useNavigate();

//   // 次のページに移動する関数
//   const goToNextPage = () => setPageNumber(pageNumber + 1);
  
//   // 前のページに移動する関数
//   const goToPrevPage = () => setPageNumber(pageNumber - 1);

//   // 現在のページのおもちゃの表示データを取得
//   const currentToyDis = toy_dis.slice(startIndex, endIndex);


//   return (
//     <>
//       <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)}>最初へ</Button>
//       <Button variant="contained" color="inherit" onClick={() => back_handleClick()}>戻る</Button>
//       <h2>結果</h2>
//       <Button variant="contained" color="primary" onClick={() => navigate(`${homeUrl}/category`)} style={{ fontSize: '1em' }}>絞り込み</Button>
//       <div>
//         <ul>
//           {/* 現在のページのおもちゃの表示データをマップして表示 */}
//           {currentToyDis.map(function (toy) {
//             return (
//               <li key={`${toy.name}-${toy.price}`}>
//                 <a href={toy.page_url} target="_blank" rel="noopener noreferrer">
//                   <h3>{toy.name}</h3>
//                   <h3>{toy.price}円</h3>
//                   <img src={toy.image_url} alt={toy.name} />
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//         <div className="pagination">
//           {/* ページネーションのボタンを表示 */}
//           <Button variant="contained" color="inherit" onClick={goToPrevPage} disabled={pageNumber === 1}>前のページ</Button>
//           <Button variant="contained" color="inherit" onClick={goToNextPage} disabled={currentToyDis.length < itemsPerPage}>次のページ</Button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Result;

// import React from 'react'
// import { useState } from 'react';
// import { useSelector, } from 'react-redux';
// import toys_db from '../db/toy_db';
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react';
// import "./styles.css";

// const homeUrl = process.env.PUBLIC_URL;


//   const Result = () => {

//     const toys = toys_db;
    
//     const [pageNumber, setPageNumber] = useState(1);
//     const itemsPerPage = 7;
//     const startIndex = (pageNumber - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     const navigate = useNavigate();
//     const goToNextPage = () => setPageNumber(pageNumber + 1);
//     const goToPrevPage = () => setPageNumber(pageNumber - 1);

  
//     const gender_val = useSelector((state) => state.gender);
//     const age_val = useSelector((state) => state.age);
//     const exercise_val = useSelector((state) => state.exercise);
//     const sport_val = useSelector((state) => state.sport);
//     const game_val = useSelector((state) => state.game);
//     const videogame_val = useSelector((state) => state.videogame);
//     const vehicle_val = useSelector((state) => state.vehicle);
//     const craft_val = useSelector((state) => state.craft);
//     const doll_val = useSelector((state) => state.doll);
//     const stuffedtoy_val = useSelector((state) => state.stuffedtoy);
    
//     // const price_val = useSelector((state) => state.price);
  
//     const [gender, common_gender ,all_gender] = gender_val;
//     const [from_age, to_age] = age_val;
//     const [exercise] = exercise_val;
//     const [sport] = sport_val;
//     const [game] = game_val;
//     const [videogame] = videogame_val;
//     const [vehicle] = vehicle_val;
//     const [craft] = craft_val;
//     const [doll] = doll_val;
//     const [stuffedtoy] = stuffedtoy_val;
    
//     // const [from_price, to_price] = price_val

//     let toy_filterResult = toys.filter(function (value) {
//       return (
//         (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
//         !(value.min_age > to_age || value.max_age < from_age) &&
//         value.exercise === exercise &&
//         ((value.sport && value.sport === sport) ||
//           (
//             (value.game && value.game === game) &&
//             (
//               (value.videogame && value.videogame === videogame) ||
//               (value.vehicle && value.vehicle === vehicle) ||
//               (value.craft && value.craft === craft) ||
//               (value.doll && value.doll === doll) ||
//               (value.stuffedtoy && value.stuffedtoy === stuffedtoy)
//             )
//           )
//         )
//       );
//     });
    
  
//         let toy_dis = toy_filterResult.map(function(toy) {
//           return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url};
//         });

//         const currentToyDis = toy_dis.slice(startIndex, endIndex);
  
//         return (
//           <>
//             <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)}>最初へ</Button>
//             <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/game`)}>戻る</Button>
//             <h2>結果</h2>
//             <Button variant="contained" color="primary" onClick={() => navigate(`${homeUrl}/category`)} style={{ fontSize: '1em' }}>絞り込み</Button>
//             <div>
//               <ul>
//                 {currentToyDis.map(function (toy) {
//                   return (
//                     <li key={`${toy.name}-${toy.price}`}>
//                       <a href={toy.page_url} target="_blank" rel="noopener noreferrer">
//                         <h3>{toy.name}</h3>
//                         <h3>{toy.price}円</h3>
//                         <img src={toy.image_url} alt={toy.name} />
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//               {console.log(vehicle)}
//               <div className="pagination">
//                 <Button variant="contained" color="inherit" onClick={goToPrevPage} disabled={pageNumber === 1}>前のページ</Button>
//                 <Button variant="contained" color="inherit" onClick={goToNextPage} disabled={currentToyDis.length < itemsPerPage}>次のページ</Button>
//               </div>
//             </div>
//           </>
//         );
        
//     }
//   export default Result;


// import React from 'react'
// import { useState } from 'react';
// import { useSelector, } from 'react-redux';
// import toys_db from '../db/toy_db';
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react';
// import "./styles.css";

// const homeUrl = process.env.PUBLIC_URL;


//   const Result = () => {

//     const toys = toys_db;

    
//     const [pageNumber, setPageNumber] = useState(1);
//     const itemsPerPage = 7;
//     const startIndex = (pageNumber - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     const navigate = useNavigate();
//     const goToNextPage = () => setPageNumber(pageNumber + 1);
//     const goToPrevPage = () => setPageNumber(pageNumber - 1);
  
//     const gender_val = useSelector((state) => state.gender);
//     const age_val = useSelector((state) => state.age);
//     const price_val = useSelector((state) => state.price);
  
//     const [gender, common_gender,all_gender] = gender_val
//     const [from_age, to_age] = age_val
//     const [from_price, to_price] = price_val
//     let toy_filterResult = toys.filter( function (value) {
//           return (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
//           !(value.min_age  > to_age || value.max_age < from_age) &&
//           (from_price <= value.price && value.price <= to_price)
//         })
  
//         let toy_dis = toy_filterResult.map(function(toy) {
//           return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url};
//         });

//         const currentToyDis = toy_dis.slice(startIndex, endIndex);
  
//         return (
//           <>
//             <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)}>最初へ</Button>
//             <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/price`)}>戻る</Button>
//             <h2>結果</h2>
//             <Button variant="contained" color="primary" onClick={() => navigate(`${homeUrl}/category`)} style={{ fontSize: '1em' }}>絞り込み</Button>
//             <div>
//               <ul>
//                 {currentToyDis.map(function (toy) {
//                   return (
//                     <li key={`${toy.name}-${toy.price}`}>
//                       <a href={toy.page_url} target="_blank" rel="noopener noreferrer">
//                         <h3>{toy.name}</h3>
//                         <h3>{toy.price}円</h3>
//                         <img src={toy.image_url} alt={toy.name} />
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//               <div className="pagination">
//                 <Button variant="contained" color="inherit" onClick={goToPrevPage} disabled={pageNumber === 1}>前のページ</Button>
//                 <Button variant="contained" color="inherit" onClick={goToNextPage} disabled={currentToyDis.length < itemsPerPage}>次のページ</Button>
//               </div>
//             </div>
//           </>
//         );
        
//     }
//   export default Result;

//  let toy_filterResult = toys.filter( function (value) {
    //       return (
    //         ((value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
    //         !(value.min_age > to_age || value.max_age < from_age) &&
    //          (value.exercise === exercise) &&
    //          ((value.sport && value.sport === sport) || 
    //          (
    //          ((value.game && value.game === game) &&  (value.videogame && value.videogame === videogame)) ||
    //          ((value.game && value.game === game) &&  (value.vehicle && value.vehicle === vehicle)) ||
    //          ((value.game && value.game === game) &&  (value.doll && value.doll === doll))
    //          )
    //          ))
    //       )
    //     })
    
    // let toy_filterResult = toys.filter(function (value) {
    //   if ((value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
    //       !(value.min_age > to_age || value.max_age < from_age) &&
    //       (value.exercise === exercise) &&
    //       ((value.sport && value.sport === sport) || (value.game && value.game === game && value.videogame === videogame))
    //       ) {
    //     if ((value.vehicle && value.vehicle === vehicle) ||
    //         (value.craft && value.craft === craft) || 
    //         (value.doll && value.doll === doll) ||
    //         (value.stuffedtoy && value.stuffedtoy === stuffedtoy)) 
    //     {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     return false;
    //   }
    // });

    // let toy_filterResult = toys.filter(function (value) {
    //   if ((value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
    //       !(value.min_age > to_age || value.max_age < from_age) &&
    //       value.exercise === exercise) {
    //     if ((value.sport && value.sport === sport) || (value.game && value.game === game && value.videogame === videogame)) {
    //       return true;
    //     } else {
    //       return (
    //         (value.vehicle && value.vehicle === vehicle) ||
    //         (value.craft && value.craft === craft) || 
    //         (value.doll && value.doll === doll) ||
    //         (value.stuffedtoy && value.stuffedtoy === stuffedtoy)
    //       );
    //     }
    //   } else {
    //     return false;
    //   }
    // });
    

    // let toy_filterResult = toys.filter( function (value) {
    //       return (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
    //       !(value.min_age  > to_age || value.max_age < from_age) &&
    //       (value.exercise === exercise)
    //       && (
    //           (value.sport && value.sport === sport) || 
    //           (value.game && value.game === game)
    //          )
    //       && (
    //             (value.videogame && value.videogame === videogame) || 
    //             (value.vehicle && value.vehicle === vehicle) ||
    //             (value.craft && value.craft === craft) ||
    //             (value.doll && value.doll === doll) ||
    //             (value.stuffedtoy && value.stuffedtoy === stuffedtoy)
    //           )
    //     })


    // let toy_filterResult = toys.filter( function (value) {
    //     return (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
    //            !(value.min_age  > to_age || value.max_age < from_age) &&
    //            (from_price <= value.price && value.price <= to_price)
    //         })