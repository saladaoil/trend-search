import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { game_Yes, game_No, resetVehicle, resetCraft, resetDoll, resetStuffedtoy, resetVideogame, resetOther, resetSport } from "../../actions"
import { useNavigate } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import "./styles.css";

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Game = () => {

  // 画面遷移を行うための関数
  const navigate = useNavigate();

  // Reduxのアクションをディスパッチするための関数
  const dispatch = useDispatch();

  // Reduxストアからステートを取得する
  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age); 

  // 遷移先URLのマッピング
  const navigateUrls = {
    0: {
      幼稚園: `${homeUrl}/vehicle`, 
      低学年: `${homeUrl}/vehicle`, 
      中学年: `${homeUrl}/craft`,
      高学年: `${homeUrl}/craft`,
      選択なし: `${homeUrl}/vehicle`
    },
    1: {
      幼稚園: `${homeUrl}/vehicle`,
      低学年: `${homeUrl}/vehicle`, 
      中学年: `${homeUrl}/craft`, 
      高学年: `${homeUrl}/craft`, 
      選択なし: `${homeUrl}/vehicle` 
    },
    2: {
      幼稚園: `${homeUrl}/doll`, 
      低学年: `${homeUrl}/doll`, 
      中学年: `${homeUrl}/stuffedtoy`, 
      高学年: `${homeUrl}/stuffedtoy`, 
      選択なし: `${homeUrl}/doll`, 
    },
  };

    // 「はい」ボタンがクリックされた時の処理
  const game_Yes_handleClick = () => {
    dispatch(game_Yes()); // Reduxストアのgameに1とはい（ゲームの好み）を取得する （1はresultのfilterで比較する時に使用）
    navigate(`${homeUrl}/videogame`); // ビデオゲームのページに遷移
  }

    // 「いいえ」ボタンがクリックされた時の処理
  const game_No_handleClick = () => {
    dispatch(game_No()); // Reduxストアのgameに2といいえ（ゲームの好み）を取得する （2はresultのfilterで比較する時に使用）
    // 遷移先URLを判断し、適切なページに遷移
    const navigateUrl = navigateUrls[gender[0]][age[2]] || navigateUrls[gender[0]];
    navigate(navigateUrl);
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
      <h2>ゲームが好きですか？</h2>
      <Button onClick={() => game_Yes_handleClick()} style={{ fontSize: '1.5em' }} className='yesButton'>はい</Button>
      <Button onClick={() => game_No_handleClick()} style={{ fontSize: '1.5em' }} className='BottomRadius'>いいえ</Button>
      <br/>
      <br/>
      <Button onClick={() => navigate(`${homeUrl}/exercise`)} style={{ fontSize: '1.5em' }} className='BottomRadius'>戻る</Button>
    </>
  );
}

export default Game;
