import React from 'react'
import { useDispatch} from "react-redux"
import {categoryqestion} from "../../actions"
import { useNavigate } from "react-router-dom"
import { Button } from "@chakra-ui/react";
import { resultingClientExists } from 'workbox-core/_private';

const homeUrl = process.env.PUBLIC_URL;


  const Category = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const categoryqestion_handleClick = () => {
      dispatch(categoryqestion());
      navigate(`${homeUrl}/categoryqestion`);
    }

    

    return (
      <>
          <h2>カテゴリー選択</h2>
          <Button onClick={() => categoryqestion_handleClick()} style={{ fontSize: '1em' }}>カテゴリーから選ぶ</Button>
          <Button onClick={() => categoryqestion_handleClick()} style={{ fontSize: '1em' }}>キーワードから選ぶ</Button>

          <Button onClick={() => navigate(`${homeUrl}/result`)}style={{ fontSize: '1em' }}>戻る</Button>
        </>
    );
}

export default Category;