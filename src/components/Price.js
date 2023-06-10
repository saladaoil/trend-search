import React from 'react'
import { useSelector, useDispatch} from "react-redux"
import { price1, price2, price3, price4, price5, price6 } from "../actions"
import { useNavigate } from "react-router-dom"
import { Button } from "@chakra-ui/react";
import "./styles.css";

const homeUrl = process.env.PUBLIC_URL;

  const Price = () => {

    const gender = useSelector((state) => state.gender);
    const age = useSelector((state) => state.age);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const price1_handleClick = () => {
      dispatch(price1());
      navigate(`${homeUrl}/result`);
    }
    const price2_handleClick = () => {
      dispatch(price2());
      navigate(`${homeUrl}/result`);
    }
    const price3_handleClick = () => {
      dispatch(price3());
      navigate(`${homeUrl}/result`);
    }
    const price4_handleClick = () => {
      dispatch(price4());
      navigate(`${homeUrl}/result`);
    }
    const price5_handleClick = () => {
      dispatch(price5());
      navigate(`${homeUrl}/result`);
    }
    const skip_handleClick = () => {
      dispatch(price6());
      navigate(`${homeUrl}/result`);
    }
  
  
      return (
        <>
          <h3>選択されているもの</h3>
          <h3>性別：{gender[3]}</h3>
          <h3>学年：{age[2]}</h3>
          <h2>価格選択</h2>
          <Button onClick={() => price1_handleClick()} style={{ fontSize: '1em' }}>~1500円</Button>
          <Button onClick={() => price2_handleClick()} style={{ fontSize: '1em' }}>1500~3000円</Button>
          <Button onClick={() => price3_handleClick()} style={{ fontSize: '1em' }}>3000~4500円</Button>
          <Button onClick={() => price4_handleClick()} style={{ fontSize: '1em' }}>4500円~6000円</Button>
          <Button onClick={() => price5_handleClick()} style={{ fontSize: '1em' }}>6000円~</Button>
          <Button onClick={() => skip_handleClick()} style={{ fontSize: '1em' }}>選択しない</Button>
          <Button onClick={() => navigate(-1)}style={{ fontSize: '1em' }}>戻る</Button>
        </>
      );
  }
  
  export default Price;