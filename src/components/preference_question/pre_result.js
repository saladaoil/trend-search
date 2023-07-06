import { useState } from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import toys_db from '../../db/toy_db';
import { useNavigate, } from "react-router-dom"
import { Button } from '@chakra-ui/react';
import "./styles.css";


const homeUrl = process.env.PUBLIC_URL;

const Pre_result = () => {
  
  const navigate = useNavigate();

  // Reduxのstateから必要な値を取得するためのフック
  const genre = useSelector((state) => state.genre.genre);
  const gender_val = useSelector((state) => state.gender);

  const [gender] = gender_val;



  const back_handleClick = () => {
    navigate(`${homeUrl}/pregenre`)
  }

  
  // おもちゃのデータを取得
  const toys = toys_db; 
  
  // おもちゃをフィルタリングする
  

  let toy_filterResult = toys.filter(function (value) {
    return (
      (value.type && value.type === genre)
    );
  });

  
  // フィルタリングされたおもちゃの表示データを作成する
  let toy_dis = toy_filterResult.map(function(toy) {
    return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url };
  });

  console.log(gender)
  console.log(genre)
  
  // ページネーションのための状態と関数を定義
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 7;
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
      <h2>結果</h2>
      {/* <Button variant="contained" color="primary" onClick={() => navigate(`${homeUrl}/category`)} style={{ fontSize: '1em' }}>絞り込み</Button> */}
      <div>
        <ul>
          {/* 現在のページのおもちゃの表示データをマップして表示 */}
          {currentToyDis.map(function (toy) {
            return (
              <li key={`${toy.name}-${toy.price}`}>
                <a href={toy.page_url} target="_blank" rel="noopener noreferrer">
                  <h3 className='toyname'>{toy.name}</h3>
                  <h3>{toy.price}円</h3>
                  <img src={toy.image_url} alt={toy.name} />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="pagination">
          {/* ページネーションのボタンを表示 */}
          {/* <Button variant="contained" color="inherit" onClick={goToPrevPage} disabled={pageNumber === 1}>前のページ</Button> */}
          {/* <Button variant="contained" color="inherit" onClick={goToNextPage} disabled={currentToyDis.length < itemsPerPage}>次のページ</Button> */}
        </div>
      </div>
    </>
  );
}

export default Pre_result;