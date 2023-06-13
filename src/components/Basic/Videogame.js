import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { videogame_Yes, videogame_No } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import "../styles.css";

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Videogame = () => {
  // Reduxストアから状態を取得
  const gender = useSelector((state) => state.gender); //性別
  const age = useSelector((state) => state.age); //学年

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 「はい」ボタンがクリックされた時の処理
  const videogame_Yes_handleClick = () => {
    dispatch(videogame_Yes()); // videogame_Yesアクションをdispatchする
    navigate(`${homeUrl}/result`); // 結果表示のページに遷移する
  }

  // 「いいえ」ボタンがクリックされた時の処理
  const videogame_No_handleClick = () => {
    dispatch(videogame_No()); // videogame_Noアクションをdispatchする
    navigate(`${homeUrl}/result`); // 結果表示のページに遷移する
  }

  return (
    <>
      <h3>性別：{gender[3]}</h3>
      <h3>学年：{age[2]}</h3>
      <h3>ビデオゲームが好きですか？</h3>
      <Button onClick={() => videogame_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
      <Button onClick={() => videogame_No_handleClick()} style={{ fontSize: '1em' }}>いいえ</Button>
      <Button onClick={() => navigate(`${homeUrl}/game`)} style={{ fontSize: '1em' }}>戻る</Button>
    </>
  );
}

export default Videogame;

