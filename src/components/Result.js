import React from 'react'
import { useState } from 'react';
import { useSelector, } from 'react-redux';
import toys_db from '../db/toy_db';
import { useNavigate, } from "react-router-dom"
import { Button } from '@chakra-ui/react';
import "./styles.css";

const homeUrl = process.env.PUBLIC_URL;

const Result = () => {
  // おもちゃのデータを取得
  const toys = toys_db;
  
  // ページネーションのための状態と関数を定義
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 7;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // ページ遷移に使用するフック
  const navigate = useNavigate();

  // 次のページに移動する関数
  const goToNextPage = () => setPageNumber(pageNumber + 1);

  // 前のページに移動する関数
  const goToPrevPage = () => setPageNumber(pageNumber - 1);

  // Reduxのstateから必要な値を取得するためのフック
  const gender_val = useSelector((state) => state.gender);
  const age_val = useSelector((state) => state.age);
  const exercise_val = useSelector((state) => state.exercise);
  const sport_val = useSelector((state) => state.sport);
  const game_val = useSelector((state) => state.game);
  const videogame_val = useSelector((state) => state.videogame);
  const vehicle_val = useSelector((state) => state.vehicle);
  const craft_val = useSelector((state) => state.craft);
  const doll_val = useSelector((state) => state.doll);
  const stuffedtoy_val = useSelector((state) => state.stuffedtoy);

  // Reduxのstateから必要な値を取得
  const [gender, common_gender ,all_gender] = gender_val;
  const [from_age, to_age] = age_val;
  const [exercise] = exercise_val;
  const [sport] = sport_val;
  const [game] = game_val;
  const [videogame] = videogame_val;
  const [vehicle] = vehicle_val;
  const [craft] = craft_val;
  const [doll] = doll_val;
  const [stuffedtoy] = stuffedtoy_val;

  // おもちゃをフィルタリングする
  let toy_filterResult = toys.filter(function (value) {
    return (
      (value.gender === gender || value.gender === common_gender || value.gender > all_gender) &&
      !(value.min_age > to_age || value.max_age < from_age) &&
      value.exercise === exercise &&
      ((value.sport && value.sport === sport) ||
        (
          (value.game && value.game === game) &&
          (
            (value.videogame && value.videogame === videogame) ||
            (value.vehicle && value.vehicle === vehicle) ||
            (value.craft && value.craft === craft) ||
            (value.doll && value.doll === doll) ||
            (value.stuffedtoy && value.stuffedtoy === stuffedtoy) 
          )
        )
      )
    );
  });

  // フィルタリングされたおもちゃの表示データを作成する
  let toy_dis = toy_filterResult.map(function(toy) {
    return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url };
  });

  // 現在のページのおもちゃの表示データを取得
  const currentToyDis = toy_dis.slice(startIndex, endIndex);

  return (
    <>
      <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)}>最初へ</Button>
      <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/game`)}>戻る</Button>
      <h2>結果</h2>
      <Button variant="contained" color="primary" onClick={() => navigate(`${homeUrl}/category`)} style={{ fontSize: '1em' }}>絞り込み</Button>
      <div>
        <ul>
          {/* 現在のページのおもちゃの表示データをマップして表示 */}
          {currentToyDis.map(function (toy) {
            return (
              <li key={`${toy.name}-${toy.price}`}>
                <a href={toy.page_url} target="_blank" rel="noopener noreferrer">
                  <h3>{toy.name}</h3>
                  <h3>{toy.price}円</h3>
                  <img src={toy.image_url} alt={toy.name} />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="pagination">
          {/* ページネーションのボタンを表示 */}
          <Button variant="contained" color="inherit" onClick={goToPrevPage} disabled={pageNumber === 1}>前のページ</Button>
          <Button variant="contained" color="inherit" onClick={goToNextPage} disabled={currentToyDis.length < itemsPerPage}>次のページ</Button>
        </div>
      </div>
    </>
  );
}

export default Result;



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
