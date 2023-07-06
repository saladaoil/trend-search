import React from 'react';
import { useDispatch } from "react-redux";
import { boy, girl, all } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import "./styles.css";

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Pre_gender = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 男のボタンがクリックされた時の処理
  const boy_handleClick = () => {
    dispatch(boy()); // boyアクションをdispatchする
    navigate(`${homeUrl}/pregenre`); // 年齢選択のページに遷移する
  }

  // 女のボタンがクリックされた時の処理
  const girl_handleClick = () => {
    dispatch(girl()); // girlアクションをdispatchする
    navigate(`${homeUrl}/pregenre`); // 年齢選択のページに遷移する
  }

  // 選択しないボタンがクリックされた時の処理
  const skip_handleClick = () => {
    dispatch(all()); // allアクションをdispatchする
    navigate(`${homeUrl}/pregenre`); // 年齢選択のページに遷移する
  }

  return (
    <>
      <br/>
      <h2>孫の性別選択</h2>
      <br/>
      <Button onClick={() => boy_handleClick()} style={{ fontSize: '2.5em' }} className='boyButton'>男</Button>
      <Button onClick={() => girl_handleClick()} style={{ fontSize: '2.5em' }} className='girlButton'>女</Button>
      <br/>
      <br/>
      <br/>
      <div>
        <Button onClick={() => skip_handleClick()} style={{ fontSize: '1.5em' }} className='buttonRadius'>選択しない</Button>
        <br/>
        <br/>
        <Button onClick={() => navigate(`${homeUrl}/preselect`)} style={{ fontSize: '1.5em' }}>戻る</Button>
      </div>
    </>
  );
}

export default Pre_gender;