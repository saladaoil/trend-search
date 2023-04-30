import React from 'react'
import { useDispatch} from "react-redux"
import { boy, girl, all} from "../actions"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";

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
      <h2>性別選択</h2>
        <Button onClick={() => boy_handleClick()} style={{ fontSize: '1em' }}>男子</Button>
        <Button onClick={() => girl_handleClick()} style={{ fontSize: '1em' }}>女子</Button>
        <Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>
    </>
    );
}

export default Gender;
