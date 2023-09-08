import { useState,useEffect } from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import toys_db from '../../db/toy_db';
import { useNavigate, } from "react-router-dom"
import { Button, Box, Text, Flex, VStack, Image } from '@chakra-ui/react';
import "./styles.css";
import { resetCraft, resetDoll, resetSport, resetStuffedtoy, resetVehicle, resetVideogame, result_Back } from '../../actions';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'

const homeUrl = process.env.PUBLIC_URL;

const Result = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Reduxのstateから必要な値を取得するためのフック
  const gender_val = useSelector((state) => state.gender);
  const age_val = useSelector((state) => state.age);
  const sport = useSelector((state) => state.sport);
  const videogame = useSelector((state) => state.videogame);
  const vehicle = useSelector((state) => state.vehicle);
  const craft = useSelector((state) => state.craft);
  const doll = useSelector((state) => state.doll);
  const stuffedtoy = useSelector((state) => state.stuffedtoy);



  const [selectedToys, setSelectedToys] = useState([]);

  useEffect(() => {
    const savedToys = JSON.parse(localStorage.getItem('selectedToys')) || [];
    setSelectedToys(savedToys);
  }, []);

  const handleSaveToyName = (toyName) => {
    const updatedToys = [...selectedToys, toyName];
    setSelectedToys(updatedToys);
    localStorage.setItem('selectedToys', JSON.stringify(updatedToys));
  };

  const handleDeleteToyName = (toyNumber) => {
    const updatedToys = selectedToys.filter((number) => number !== toyNumber);
    setSelectedToys(updatedToys);
    localStorage.setItem('selectedToys', JSON.stringify(updatedToys));
  };
  
  const isToyNumberSaved = (toyNumber) => {
    return selectedToys.includes(toyNumber);
  };

  // Reduxのstateから必要な値を取得
  const [gender, common_gender ,all_gender] = gender_val;
  const [from_age, to_age] = age_val;

  const navigateUrls = {
    BACK:{
          sport: `${homeUrl}/sport`,
          videogame: `${homeUrl}/videogame`,
          vehicle: `${homeUrl}/vehicle`,
          craft: `${homeUrl}/craft`,
          doll: `${homeUrl}/doll`,
          stuffedtoy: `${homeUrl}/stuffedtoy`,
          other:{
            sport_other: `${homeUrl}/sport`,
            videogame_other: `${homeUrl}/videogame`,
            vehicle_other: `${homeUrl}/vehicle`,
            craft_other: `${homeUrl}/craft`,
            doll_other: `${homeUrl}/doll`,
            stuffedtoy_other: `${homeUrl}/stuffedtoy`,
          }
     } 
  };


  const back_handleClick = () => {
    const sportValue = sport; 
    const videogameValue = videogame;
    const vehicleValue = vehicle;
    const craftValue = craft; 
    const dollValue = doll;
    const stuffedtoyValue = stuffedtoy;

    console.log(videogameValue)
  
    dispatch(result_Back());

    const resetActions = [
      resetSport(),
      resetVideogame(),
      resetVehicle(),
      resetCraft(),
      resetDoll(),
      resetStuffedtoy(),
    ];
  
    resetActions.forEach(action => dispatch(action));

    const navigateUrl =
      navigateUrls.BACK[sportValue] ||
      navigateUrls.BACK[videogameValue] ||
      navigateUrls.BACK[vehicleValue] ||
      navigateUrls.BACK[craftValue] ||
      navigateUrls.BACK[dollValue] ||
      navigateUrls.BACK[stuffedtoyValue] ||
      navigateUrls.BACK.other[sportValue[1]] ||
      navigateUrls.BACK.other[videogameValue[1]] ||
      navigateUrls.BACK.other[vehicleValue[1]] ||
      navigateUrls.BACK.other[craftValue[1]] ||
      navigateUrls.BACK.other[dollValue[1]] ||
      navigateUrls.BACK.other[stuffedtoyValue[1]]
  
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
        (value.category && value.category === sport[0]) ||
        (value.category && value.category === videogame[0]) ||
        (value.category && value.category === vehicle[0]) ||
        (value.category && value.category === craft[0]) ||
        (value.category && value.category === doll[0]) ||
        (value.category && value.category === stuffedtoy[0])
      ) 
    );
  });

  
  // フィルタリングされたおもちゃの表示データを作成する
  let toy_dis = toy_filterResult.map(function(toy) {
    return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url,number:toy.toy_number, };
  });

  
  // ページネーションのための状態と関数を定義
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  
  // 次のページに移動する関数
const goToNextPage = () => {
  // 現在のページが最後のページよりも小さい場合のみ、ページを進める
  if (pageNumber < Math.ceil(toy_dis.length / itemsPerPage)) {
    setPageNumber(pageNumber + 1);
  }
};

// 前のページに移動する関数
const goToPrevPage = () => {
  // 現在のページが最初のページよりも大きい場合のみ、ページを戻す
  if (pageNumber > 1) {
    setPageNumber(pageNumber - 1);
  }
};
  
  // 現在のページのおもちゃの表示データを取得
  const currentToyDis = toy_dis.slice(startIndex, endIndex);

    const handleCardClick = (e, toy) => {
      if (e.target.tagName === "BUTTON") return;
      window.open(toy.page_url, "_blank");
    };
  

  return (
    <>
          <Header text={`商品一覧`} />

          <Box position='fixed' zIndex='2'>
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' top='1%' left='1%' >
            <Button variant="solid" >
        戻る
      </Button>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton size='lg'/>
            <PopoverHeader>
              <Text fontSize='3xl'>戻る</Text>
            </PopoverHeader>
            <PopoverBody>      
              <Button onClick={() => back_handleClick()} size="md" >
              質問に戻る
              </Button>
            </PopoverBody>
            <PopoverBody>      
              <Button onClick={() => navigate(`${homeUrl}/firstchoice`)} size="md">
                はじめから
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>

      <Box position='fixed' zIndex='2'>
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' top='1%' right='3%' >
              <button height='50px' width='80px' colorschem='twitter' className="reslt-radius">
                <Text as='b' fontSize='lg'> ? </Text>
              </button>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton size='lg'/>
            <PopoverHeader><Text fontSize='3xl'><b>ヘルプ</b></Text></PopoverHeader>
            <PopoverBody><Text fontSize='3xl'>商品をタップし詳細を確認できます</Text></PopoverBody>
            <PopoverBody><Text fontSize='3xl'>「後で見る」からお気に入りに追加できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/基本画面/商品一覧画面" target="_blank">
                <Button colorschem='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>





  
      <Box mt="70px" mb="80px" px="1">
        <VStack spacing={1} align='stretch'>
          {currentToyDis.map((toy) => (
            <Flex
              key={`${toy.name}-${toy.price}`}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
              alignItems="center"
              justifyContent="flex-start"
              mb={1}
              _hover={{ cursor: "pointer" }}
              position="relative" // Add this line to enable absolute positioning
              onClick={(e) => handleCardClick(e, toy)} // Use custom click handler for the card
            >
                <Image src={toy.image_url} alt={toy.name} boxSize='80px' />
                <VStack align='flex-start' px={1} mt={1}>
                  <Text fontSize='lg' textAlign='left' as='b'>
                    {toy.name}
                  </Text>
                  <Text fontSize='lg' color='firebrick'>
                    {(toy.price).toLocaleString()}円(税込)
                  </Text>
                </VStack>
                <Flex // Use Flexbox to position buttons under the price
                justifyContent="flex-end"
                position="absolute" // Position the buttons absolutely
                bottom="1" // Place the buttons at the bottom of the container
                right="1" // Align the buttons to the right
                w="100%" // Make the button container the full width of the card
              >
                {!isToyNumberSaved(toy.number) && (
                  <Button onClick={() => handleSaveToyName(toy.number)} size='sm' colorschem='blackAlpha'>
                    後で見る
                    </Button>
                )}
                {isToyNumberSaved(toy.number) && (
                  <Button onClick={() => handleDeleteToyName(toy.number)} size="sm" colorschem="gray">
                    削除
                  </Button>
                )}
              </Flex>
            </Flex>
          ))}
        </VStack>
      </Box>
      <Footer
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        pageNumber={pageNumber}
        toy_dis={toy_dis}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
  
}

export default Result;



{/* <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)} style={{ fontSize: '1.5em' }} className='yesButton'>最初へ</Button> */}
      // <Button variant="contained" color="inherit" onClick={() => back_handleClick()} style={{ fontSize: '1.5em' }}>戻る</Button>
      // <h2>結果</h2>
      {/* <Button variant="contained" color="primary" onClick={() => navigate(`${homeUrl}/category`)} style={{ fontSize: '1em' }}>絞り込み</Button> */}
      // <div>
      //   <ul>
      //     {/* 現在のページのおもちゃの表示データをマップして表示 */}
      //     {currentToyDis.map(function (toy) {
      //       return (
      //         <li key={`${toy.name}-${toy.price}`}>
      //           <a href={toy.page_url} target="_blank" rel="noopener noreferrer">
      //             <h3 className='toyname'>{toy.name}</h3>
      //             <h3>{toy.price}円</h3>
      //             <img src={toy.image_url} alt={toy.name} />
      //           </a>
      //         </li>
      //       );
      //     })}
      //   </ul>
      //   <div className="pagination">
      //     {/* ページネーションのボタンを表示 */}
      //     <Button variant="contained" color="inherit" onClick={goToPrevPage} disabled={pageNumber === 1}>前のページ</Button>
      //     <Button variant="contained" color="inherit" onClick={goToNextPage} disabled={currentToyDis.length < itemsPerPage}>次のページ</Button>
      //   </div>
      // </div>




// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { useDispatch, useSelector,} from 'react-redux';
// import toys_db from '../db/toy_db';
// import { useNavigate, } from "react-router-dom"
// import { Button } from '@chakra-ui/react';
// import "./styles.css";
// import { result_Back } from '../actions';

// const homeUrl = process.env.PUBLIC_URL;

// const Result = () => {
  
//   const navigate = useNavigate();
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
//   const other = useSelector((state) => state.other);
//   const result_back = useSelector((state) => state.result);

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


//   const back_handleClick = () => {
//     dispatch(result_Back())
//   }
  
//   useEffect(() => {
//     if (result_back) {
//       const navigateUrl =
//         navigateUrls.BACK[sport] ||
//         navigateUrls.BACK[videogame] ||
//         navigateUrls.BACK[vehicle] ||
//         navigateUrls.BACK[craft] ||
//         navigateUrls.BACK[doll] ||
//         navigateUrls.BACK[stuffedtoy] ||
//         navigateUrls.BACK[other];
  
//       navigate(navigateUrl);
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [result_back]);
  
  
  
  
//   // おもちゃのデータを取得
//   const toys = toys_db; 
  
//   // おもちゃをフィルタリングする
//   let toy_filterResult = toys.filter(function (value) {
//     return (
//       (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
//       !(value.min_age > to_age || value.max_age < from_age) &&
//       value.exercise === exercise &&
//       ((value.sport && value.sport === sport) ||
//       ((value.other && value.other === other))||
//         (
//           (value.game && value.game === game) &&
//           (
//             (value.videogame && value.videogame === videogame) ||
//             (value.vehicle && value.vehicle === vehicle) ||
//             (value.craft && value.craft === craft) ||
//             (value.doll && value.doll === doll) ||
//             (value.stuffedtoy && value.stuffedtoy === stuffedtoy) 
//             ) 
//             )
//             )
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
