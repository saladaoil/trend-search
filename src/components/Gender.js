import React from 'react'
import { useDispatch} from "react-redux"
import { boy, girl, all} from "../actions"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";


import Header from './Header';
import Footer from './Footer';

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

  return (
    <>
<<<<<<< HEAD:src/components/gender.js
          <Header />
        <br></br>
        <br></br>
        <br></br>

      <h1>性別選択</h1>
      <h2>選択されているもの</h2>
      <br></br>
        <img  onClick={() => boy_handleClick()} style={{ fontSize: '1em' }} src={男} alt="アイコン" className="genderQ" />
        <img  onClick={() => boy_handleClick()} style={{ fontSize: '1em' }} src={女} alt="アイコン" className="genderQ" />
        <br></br>
        <br></br>

        <img  onClick={() => boy_handleClick()} style={{ fontSize: '1em' }} src={選択しない} alt="アイコン" className="genderQ" />
=======
      <h2>孫の性別選択</h2>
        <Button onClick={() => boy_handleClick()} style={{ fontSize: '1em' }}>男子</Button>
        <Button onClick={() => girl_handleClick()} style={{ fontSize: '1em' }}>女子</Button>
        <Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>
>>>>>>> 666f31c682e371458ddf678fc33bc435ceb2226c:src/components/Gender.js
    </>
    );
}


//<Button onClick={() => girl_handleClick()} style={{ fontSize: '1em' }}>女子</Button>
//<Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>

export default Gender;