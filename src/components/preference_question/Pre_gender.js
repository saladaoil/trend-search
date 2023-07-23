import React from 'react';
import { useDispatch } from "react-redux";
import { boy, girl, } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Stack } from '@chakra-ui/react';
import "./styles.css";
import PregenderHeader from '../../ui/Pre_genderHeader';


// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Pre_gender = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 男のボタンがクリックされた時の処理
  const boy_handleClick = () => {
    dispatch(boy()); // boyアクションをdispatchする
    navigate(`${homeUrl}/pregenre`); // 年齢選択のページに遷移する
  }

  // 女のボタンがクリックされた時の処理
  const girl_handleClick = () => {
    dispatch(girl()); // girlアクションをdispatchする
    navigate(`${homeUrl}/pregenre`); // 年齢選択のページに遷移する
  }


  return (
    <>
      <PregenderHeader/>
      <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">   
      <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="center" mt="10">
          お孫さんの性別選択
      </Text>
      <Stack spacing={['8', '8', '10']} mt="20" width="100%" maxW="400px">
        <Button onClick={() => boy_handleClick()} size="lg">
          男の子
        </Button>
        <Button onClick={() => girl_handleClick()} size="lg">
          女の子
        </Button>
      </Stack>
      </Flex>
      <Button onClick={() => navigate(`${homeUrl}/preselect`)} size="md" style={{ position: "fixed", bottom: "40px", left: "30px" }}>
        戻る
      </Button>
    </>
  );
}

export default Pre_gender;