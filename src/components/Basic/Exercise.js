import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { exercise_Yes , exercise_No } from "../../actions"
import { useNavigate } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import "../styles.css";

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Exercise = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useSelectorフックを使ってReduxストアから状態を取得
  const gender = useSelector((state) => state.gender); // 性別
  const age = useSelector((state) => state.age); // 学年

  // 「はい」ボタンがクリックされた時の処理
  const exercise_Yes_handleClick = () => {
    dispatch(exercise_Yes()); // 1と運動の好み（はい）を取得する （1はresultのfilterで比較する時に使用）
    navigate(`${homeUrl}/sport`); // スポーツの質問ページに遷移
  }

  // 「いいえ」ボタンがクリックされた時の処理
  const exercise_No_handleClick = () => {
    dispatch(exercise_No()); // 2と運動の好み（いいえ）を取得する　（2はresultのfilterで比較する時に使用）
    navigate(`${homeUrl}/game`); // ゲームの質問ページに遷移
  }
  

  return (
    <>
      <h3>性別：{gender[3]}</h3>
      <h3>学年：{age[2]}</h3>
      <h2>体を動かすのが好きですか？</h2>
      <Button onClick={() => exercise_Yes_handleClick()} style={{ fontSize: '1em' }}>はい</Button>
      <Button onClick={() => exercise_No_handleClick()} style={{fontSize: '1em'}}>いいえ</Button>
      <Button onClick={() => navigate(`${homeUrl}/age`)}style={{ fontSize: '1em' }}>戻る</Button>
    </>
  );
}

export default Exercise;
