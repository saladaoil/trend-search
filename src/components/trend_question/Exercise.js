import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { exercise_Yes , exercise_No, resetVideogame, resetVehicle, resetCraft, resetDoll, resetStuffedtoy, resetOther, resetSport } from "../../actions"
import { useNavigate } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import "./styles.css";

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Exercise = () => {

  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();

  // Reduxストアからステートを取得する
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age);

  // 「はい」ボタンがクリックされた時の処理
  const exercise_Yes_handleClick = () => {
    dispatch(exercise_Yes());     // Reduxストアのexerciseに1とはい（運動の好み）を取得する （1はresultのfilterで比較する時に使用）
    navigate(`${homeUrl}/sport`); // スポーツの質問ページに遷移
  }

  // 「いいえ」ボタンがクリックされた時の処理
  const exercise_No_handleClick = () => {
    dispatch(exercise_No());     // Reduxストアのexerciseに2といいえ（運動の好み）を取得する　（2はresultのfilterで比較する時に使用）
    navigate(`${homeUrl}/game`); // ゲームの質問ページに遷移
  }

  // コンポーネントがアンマウントされるときに実行されるクリーンアップ関数
  useEffect(() => {
    return () => {
      dispatch(resetVideogame())   // Reduxストアのvideogameをリセットする
      dispatch(resetVehicle());    // Reduxストアのvehicleをリセットする
      dispatch(resetCraft());      // Reduxストアのcraftをリセットする
      dispatch(resetDoll());       // Reduxストアのdollをリセットする
      dispatch(resetStuffedtoy()); // Reduxストアのstuffedtoyをリセットする
      dispatch(resetOther())       // Reduxストアのotherをリセットする
      dispatch(resetSport())       // Reduxストアのsportをリセットする
    };
  }, [dispatch]);
  

  return (
    <>
      <h3>性別：{gender[3]}</h3>
      <h3>学年：{age[2]}</h3>
      <h2>体を動かすのが好きですか？</h2>
      <Button onClick={() => exercise_Yes_handleClick()} style={{ fontSize: '1.5em' }} className='yesButton'>はい</Button>
      <Button onClick={() => exercise_No_handleClick()} style={{fontSize: '1.5em'}} className='BottomRadius'>いいえ</Button>
      <br/>
      <br/>
      <div>
        <Button onClick={() => navigate(`${homeUrl}/age`)}style={{ fontSize: '1.5em' }} className='BottomRadius'>戻る</Button>
      </div>
    </>
  );
}

export default Exercise;
