import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { videogame_Yes, videogame_No, other } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Stack } from '@chakra-ui/react';
import "./styles.css";
import Header from '../../ui/Header';

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Videogame = () => {
  // Reduxストアから状態を取得
  const gender = useSelector((state) => state.gender); //性別
  const age = useSelector((state) => state.age); //学年

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 「はい」ボタンがクリックされた時の処理
  const videogame_Yes_handleClick = () => {
    dispatch(videogame_Yes()); // videogame_Yesアクションをdispatchする
    navigate(`${homeUrl}/result`); // 結果表示のページに遷移する
  }

  // 「いいえ」ボタンがクリックされた時の処理
  const videogame_No_handleClick = () => {
    dispatch(videogame_No()); // videogame_Noアクションをdispatchする
    dispatch(other())
    navigate(`${homeUrl}/result`); // 結果表示のページに遷移する
  }

  return (
    <>
      <Header text="流行から選ぶ"/>
      <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">   
      <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="center" mt="10">
          ビデオゲームが好きですか？
      </Text>
      <Stack mt="40" width="100%" maxW="400px">
        <Flex direction="row" justify="center">
            <Button onClick={() => videogame_Yes_handleClick()} size="xl" mr="10">
              はい
            </Button>
            <Button onClick={() => videogame_No_handleClick()} size="xl" >
              いいえ
            </Button>
          </Flex>
      </Stack>
      </Flex>
      <Button onClick={() => navigate(`${homeUrl}/game`)} size="md" style={{ position: "fixed", bottom: "40px", left: "30px" }}>
        戻る
      </Button>
    </>
  );
}

export default Videogame;

