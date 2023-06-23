import React from 'react';
import { useDispatch } from "react-redux";
import { boy, girl, all } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import "./styles.css";

const homeUrl = process.env.PUBLIC_URL;

const CharacterKeyword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 男のボタンがクリックされた時の処理
  const boy_handleClick = () => {
    dispatch(boy()); // boyアクションをdispatchする
    navigate(`${homeUrl}/age`); // 年齢選択のページに遷移する
  }

  // 女のボタンがクリックされた時の処理
  const girl_handleClick = () => {
    dispatch(girl()); // girlアクションをdispatchする
    navigate(`${homeUrl}/age`); // 年齢選択のページに遷移する
  }

  // 選択しないボタンがクリックされた時の処理
  const skip_handleClick = () => {
    dispatch(all()); // allアクションをdispatchする
    navigate(`${homeUrl}/age`); // 年齢選択のページに遷移する
  }

  return (
    <>
      <h2>孫の性別選択</h2>
      <Button onClick={() => boy_handleClick()} style={{ fontSize: '1em' }}>男</Button>
      <Button onClick={() => girl_handleClick()} style={{ fontSize: '1em' }}>女</Button>
      <Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>
      <Button onClick={() => navigate(`${homeUrl}/firstchoice`)} style={{ fontSize: '1em' }}>戻る</Button>
    </>
  );
}

export default CharacterKeyword