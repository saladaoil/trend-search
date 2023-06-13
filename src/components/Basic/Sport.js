import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { sport_Yes, sport_No } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import "../styles.css";

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Sport = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Reduxストアから状態を取得
  const gender = useSelector((state) => state.gender); //性別
  const age = useSelector((state) => state.age); //学年


  // 「はい」ボタンがクリックされた時の処理
  const sport_Yes_handleClick = () => {
    dispatch(sport_Yes()); // sport_Yesアクションをdispatchする
    navigate(`${homeUrl}/result`); // 結果表示のページに遷移する
  }

  // 「いいえ」ボタンがクリックされた時の処理
  const sport_No_handleClick = () => {
    dispatch(sport_No()); // sport_Noアクションをdispatchする
    navigate(`${homeUrl}/result`); // 結果表示のページに遷移する
  }

  return (
    <>
      <h3>性別：{gender[3]}</h3>
      <h3>学年：{age[2]}</h3>
      <h2>スポーツが好きですか？</h2>
      <Button onClick={() => sport_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
      <Button onClick={() => sport_No_handleClick()} style={{ fontSize: '1em' }}>いいえ</Button>
      <Button onClick={() => navigate(`${homeUrl}/exercise`)} style={{ fontSize: '1em' }}>戻る</Button>
    </>
  );
}

export default Sport;
