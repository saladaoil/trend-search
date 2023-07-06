import React from 'react';
import { useDispatch } from "react-redux";
import { character, brand } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import "./styles.css";

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Pre_select = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // キャラクターボタンがクリックされた時の処理
  const character_handleClick = () => {
    dispatch(character()); // characterアクションをdispatchする
    navigate(`${homeUrl}/pregender`); // 年齢選択のページに遷移する
  }

  // ブランドボタンがクリックされた時の処理
  const brand_handleClick = () => {
    dispatch(brand()); // brandアクションをdispatchする
    navigate(`${homeUrl}/pregender`); // 年齢選択のページに遷移する
  }

  return (
    <>
      <br/>
      <h2>キャラクターまたはブランドの選択</h2>
      <br/>
      <Button onClick={() => character_handleClick()} style={{ fontSize: '2.5em' }} className='characterButton'>キャラクター</Button>
      <Button onClick={() => brand_handleClick()} style={{ fontSize: '2.5em' }} className='brandButton'>ブランド</Button>
      <br/>
      <br/>
      <br/>
      <div>
        <br/>
        <Button onClick={() => navigate(`${homeUrl}/firstchoice`)} style={{ fontSize: '1.5em' }}>戻る</Button>
      </div>
    </>
  );
}

export default Pre_select;
