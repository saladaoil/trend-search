import React from 'react'
import { useDispatch} from "react-redux"
import { category1, category2, category3, category4, category5 } from "../actions"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";

const homeUrl = process.env.PUBLIC_URL;


  const Category = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const category1_handleClick = () => {
      dispatch(category1());
      navigate(`${homeUrl}/category_result`);
    }
    const category2_handleClick = () => {
      dispatch(category2());
      navigate(`${homeUrl}/category_result`);
    }
    const category3_handleClick = () => {
      dispatch(category3());
      navigate(`${homeUrl}/category_result`);
    }
    const category4_handleClick = () => {
      dispatch(category4());
      navigate(`${homeUrl}/category_result`);
    }
    const category5_handleClick = () => {
      dispatch(category5());
      navigate(`${homeUrl}/category_result`);
    }

    return (
      <>
          <h2>カテゴリー選択</h2>
          <Button onClick={() => category1_handleClick()} style={{ fontSize: '1em' }}>おもちゃ</Button>
          <Button onClick={() => category2_handleClick()} style={{ fontSize: '1em' }}>ゲーム</Button>
          <Button onClick={() => category3_handleClick()} style={{ fontSize: '1em' }}>知育玩具</Button>
          <Button onClick={() => category4_handleClick()} style={{ fontSize: '1em' }}>スポーツ</Button>
          <Button onClick={() => category5_handleClick()} style={{ fontSize: '1em' }}>その他</Button>
          <Button onClick={() => navigate(`${homeUrl}/result`)}style={{ fontSize: '1em' }}>戻る</Button>
        </>
    );
}

export default Category;