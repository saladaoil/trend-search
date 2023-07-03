import { useState } from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import toys_db from '../../db/CharaBrand_db';
import { useNavigate, } from "react-router-dom"
import { Button } from '@chakra-ui/react';
import "./styles.css";

const homeUrl = process.env.PUBLIC_URL;

const Result = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Reduxのstateから必要な値を取得するためのフック
  const gender_val = useSelector((state) => state.gender);
  const age_val = useSelector((state) => state.age);
  
  //const type = useSelector((state) => state.genreType);
  const type = useSelector((state) => state.genreType);




  // Reduxのstateから必要な値を取得
  const [gender] = gender_val;
  //const [type] = type_val;





  const back_handleClick = () => {
  


  

  
    // resetVehicle()の後にナビゲート先のURLを取得
  };
  
  
  
  // おもちゃのデータを取得
  const toys = toys_db; 
  
  // おもちゃをフィルタリングする

  let toy_filterResult = toys.filter(function (value) {
    return (
      (value.gender === gender)||(value.type === type) &&
      (
        /*
        (value.category && value.category === sport) ||
        (value.category && value.category === videogame) ||
        (value.category && value.category === vehicle) ||
        (value.category && value.category === craft) ||
        (value.category && value.category === doll) ||
        (value.category && value.category === stuffedtoy) ||
        (value.category && value.category === other)
        */
        (value.type && value.type === type)
      ) 
    );
  });

  
  // フィルタリングされたおもちゃの表示データを作成する
  let toy_dis = toy_filterResult.map(function(toy) {
    return { name: toy.name, type:toy.type, gender:toy.gender, price: toy.price, image_url: toy.image_url, page_url:toy.page_url };
  });

  
  // ページネーションのための状態と関数を定義
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // ページ遷移に使用するフック
  
  // 次のページに移動する関数
  const goToNextPage = () => setPageNumber(pageNumber + 1);
  
  // 前のページに移動する関数
  const goToPrevPage = () => setPageNumber(pageNumber - 1);
  
  // 現在のページのおもちゃの表示データを取得
  const currentToyDis = toy_dis.slice(startIndex, endIndex);



  return (
    <>
      <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)} style={{ fontSize: '1.5em' }} className='yesButton'>最初へ</Button>
      <Button variant="contained" color="inherit" onClick={() => back_handleClick()} style={{ fontSize: '1.5em' }}>戻る</Button>
      <h2>{type}</h2>
      {/* <Button variant="contained" color="primary" onClick={() => navigate(`${homeUrl}/category`)} style={{ fontSize: '1em' }}>絞り込み</Button> */}
      <div>
        <ul>
          {/* 現在のページのおもちゃの表示データをマップして表示 */}
          {currentToyDis.map(function (toy) {
            return (
              <li key={`${toy.name}-${toy.price}`}>
                <a href={toy.page_url} target="_blank" rel="noopener noreferrer">
                  <h3 className='toyname'>{toy.name}ジ{toy.type}性{toy.gender}</h3>
                  {/*<p>{toy.type}</p>*/}
                  <img src={toy.image_url} alt={toy.name} />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="pagination">
          {/* ページネーションのボタンを表示 */}
          { <Button variant="contained" color="inherit" onClick={goToPrevPage} disabled={pageNumber === 1}>前のページ</Button> }
          { <Button variant="contained" color="inherit" onClick={goToNextPage} disabled={currentToyDis.length < itemsPerPage}>次のページ</Button>}
        </div>
      </div>
    </>
  );
}

export default Result;