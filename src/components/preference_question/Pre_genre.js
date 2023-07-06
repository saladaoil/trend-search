import { useState } from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import genre_db from '../../db/Genre_db';
import { useNavigate, } from "react-router-dom"
import { Button } from '@chakra-ui/react';
import "./styles.css";
import { setGenre } from '../../actions';

const homeUrl = process.env.PUBLIC_URL;

const Pre_genre = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  // おもちゃのデータを取得
  const genres = genre_db; 

  // Reduxのstateから必要な値を取得するためのフック
  const gender_val = useSelector((state) => state.gender);
  const type = useSelector((state) => state.genreType);

  // Reduxのstateから必要な値を取得
  const [gender] = gender_val;

  let genre_filterResult = genres.filter(function (value) {
    return (
      (value.gender && value.gender === gender) &&
      (value.type && value.type === type)
    );
  });


  const back_handleClick = () => {
    navigate(`${homeUrl}/gender`)
  };
  
  // おもちゃをフィルタリングする

  // フィルタリングされたおもちゃの表示データを作成する
  let genre_dis = genre_filterResult.map(function(genre) {
    return { name: genre.name, gender: genre.gender, image_url: genre.image_url, };
  });

  
  // ページネーションのための状態と関数を定義
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 7;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // 現在のページのおもちゃの表示データを取得
  const currentGenre = genre_dis.slice(startIndex, endIndex);
  
  
  const result_handleClick = (genre) => {
    dispatch(setGenre(genre.name));
    navigate(`${homeUrl}/preresult`)
  };

  return (
    <>
      <Button variant="contained" color="inherit" onClick={() => navigate(`${homeUrl}/`)} style={{ fontSize: '1.5em' }} className='yesButton'>最初へ</Button>
      <Button variant="contained" color="inherit" onClick={() => back_handleClick()} style={{ fontSize: '1.5em' }}>戻る</Button>
      <div>
        <ul>
          {/* 現在のページのおもちゃの表示データをマップして表示 */}
          {currentGenre.map(function (genre) {
            return (
              <Button key={`${genre.name}`} onClick={() => result_handleClick(genre)}>
                <img src={genre.image_url} alt={genre.name} />
              </Button>
              
              // <li key={`${genre.name}-${genre.price}`}>
              //   <a href={`${homeUrl}/result`} target="_blank" rel="noopener noreferrer" onClick={result_handleClick(genre.name)}>
              //     <img src={genre.image_url} alt={genre.name} />
              //   </a> 
              // </li>
            ); //aタグのhrefをresult.jsにして遷移できるようにした
          })}
        </ul>
      </div>
    </>
  );
}

export default Pre_genre;