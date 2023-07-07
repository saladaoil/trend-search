import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { videogame_Yes, videogame_No, other } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import "./styles.css";

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Videogame = () => {

  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();


  // Reduxストアからステートを取得する
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age); 


  // 「はい」ボタンがクリックされた時の処理
  const videogame_Yes_handleClick = () => {
    dispatch(videogame_Yes());     // Reduxストアのvideogameに"ビデオゲーム"という文字列を保持させる
    navigate(`${homeUrl}/result`); // 結果表示のページに遷移する
  }

  // 「いいえ」ボタンがクリックされた時の処理
  const videogame_No_handleClick = () => {
    dispatch(videogame_No());      // Reduxストアのvideogameに"その他"という文字列を保持させる
    dispatch(other())              // Reduxストアのotherに"その他"という文字列を保持させる(result.jsのfilterで使用する)
    navigate(`${homeUrl}/result`); // 結果表示のページに遷移する
  }

  return (
    <>
      <h3>性別：{gender[3]}</h3>
      <h3>学年：{age[2]}</h3>
      <h2>ビデオゲームが好きですか？</h2>
      <Button onClick={() => videogame_Yes_handleClick()} style={{ fontSize: '1.5em' }} className='yesButton'>はい</Button>
      <Button onClick={() => videogame_No_handleClick()} style={{ fontSize: '1.5em' }}>いいえ</Button>
      <br/>
      <br/>
      <Button onClick={() => navigate(`${homeUrl}/game`)} style={{ fontSize: '1.5em' }}>戻る</Button>
    </>
  );
}

export default Videogame;

