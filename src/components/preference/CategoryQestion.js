import React from 'react'
import { useDispatch} from "react-redux"
import { boy, girl, all} from "../../actions"
import { useNavigate } from "react-router-dom"
import { Button } from "@chakra-ui/react";







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
    navigate(`${homeUrl}/categoryqestion2`);
  }
  const skip_handleClick = () => {
    dispatch(all());
    navigate(`${homeUrl}/age`);
  }

  

  return (
    <>
        <br></br>
        <br></br>
        <br></br>

      <h1>性別選択</h1>
      <h2>選択されているもの</h2>
      <br></br>
      <Button onClick={() => girl_handleClick()} style={{ fontSize: '1em' }}>女子</Button>
      <Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>
    </>
    );
}


//<Button onClick={() => girl_handleClick()} style={{ fontSize: '1em' }}>女子</Button>
//<Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>

export default Gender;