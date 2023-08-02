import React from 'react';
import { useDispatch } from "react-redux";
import { character, brand } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Stack } from '@chakra-ui/react';
import "./styles.css";
import Header from '../../ui/Header';

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
      <Header text="好みから探す"/>
      <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">   
      <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="center" mt="20">
          探し方を選択してください
      </Text>
      <Stack spacing={['8', '8', '10']} mt="20" width="100%" maxW="400px">
        <Button onClick={() => character_handleClick()} size="lg">
          キャラクターから探す
        </Button>
        <Button onClick={() => brand_handleClick()} size="lg">
          ブランドから探す
        </Button>
      </Stack>
      </Flex>
      <Button onClick={() => navigate(`${homeUrl}/`)} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }}>
        戻る
      </Button>
    </>
  );
}

export default Pre_select;
