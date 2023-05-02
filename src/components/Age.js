import React from 'react'
import { useSelector,useDispatch} from "react-redux"
import { age1, age2, age3, age4, age5, age6 } from "../actions"
import { useNavigate } from "react-router-dom"
import '../index.css';
import { Button } from "@mui/material";
import "./styles.css";

const homeUrl = process.env.PUBLIC_URL;

  const Age = () => {
    const gender = useSelector((state) => state.gender);
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const kid_handleClick = () => {
    dispatch(age1());
    navigate(`${homeUrl}/price`);
  }
  const low_handleClick = () => {
    dispatch(age2());
    navigate(`${homeUrl}/price`);
  }
  const middle_handleClick = () => {
    dispatch(age3());
    navigate(`${homeUrl}/price`);
  }
  const high_handleClick = () => {
    dispatch(age4());
    navigate(`${homeUrl}/price`);
  }
  const junior_handleClick = () => {
    dispatch(age5());
    navigate(`${homeUrl}/price`);
  }
  const skip_handleClick = () => {
    dispatch(age6());
    navigate(`${homeUrl}/price`);
  }

  return (
    <>
      <h3>選択されているもの</h3>
      <h3>性別：{gender[3]}</h3>
      <h2>学年選択</h2>
        <Button onClick={() => kid_handleClick()} style={{ fontSize: '1em' }}>幼稚園</Button>
        <Button onClick={() => low_handleClick()} style={{ fontSize: '1em' }}>小学生（低学年）</Button>
        <Button onClick={() => middle_handleClick()} style={{ fontSize: '1em' }}>小学生（中学年）</Button>
        <Button onClick={() => high_handleClick()} style={{ fontSize: '1em' }}>小学生（高学年）</Button>
        <Button onClick={() => junior_handleClick()} style={{ fontSize: '1em' }}>中学生</Button>
        <Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>
        <Button onClick={() => navigate(`${homeUrl}/`)}style={{ fontSize: '1em' }}>戻る</Button>
    </>
    );
  }
  
  export default Age;