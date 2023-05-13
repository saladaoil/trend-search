import React from 'react'
import { useDispatch} from "react-redux"
import { boy, girl, all} from "../actions"
import { useNavigate } from "react-router-dom"

import Header from '../components/Header';

import 男 from "./images/男.png"
import 女 from "./images/女.png"
import 選択しない from "./images/選択しない.png"

const homeUrl = process.env.PUBLIC_URL;

const Gender = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const boy_handleClick = () => {
    dispatch(boy());
    navigate(`${homeUrl}/age`);
  }
  const girl_handleClick = () => {
    dispatch(girl());
    navigate(`${homeUrl}/age`);
  }
  const skip_handleClick = () => {
    dispatch(all());
    navigate(`${homeUrl}/age`);
  }
  const category = () => {
    dispatch(category());
    navigate(`${homeUrl}/Category`);
  }

  return (
    <>
          <Header />
        <br></br>
        <br></br>
        <br></br>

      <h1>検索方法を選択してください</h1>
      <h2>選択されているもの</h2>
      <br></br>
      <button onClick={() => category()} style={{ fontSize: '1em' }}>6000円~</button>
        <img  onClick={() => boy_handleClick()} style={{ fontSize: '1em' }} src={女} alt="アイコン" className="genderQ" />
        <br></br>
        <br></br>
    </>
    );
}


export default Gender;