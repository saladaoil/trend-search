import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { sport_Yes, sport_No, other } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import "./styles.css";
import Header from '../../ui/Header';
import { Flex } from '@chakra-ui/layout';

const homeUrl = process.env.PUBLIC_URL;

const Sport = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gender = useSelector((state) => state.gender);
  const age = useSelector((state) => state.age);


  // 「はい」ボタンがクリックされた時の処理
  const sport_Yes_handleClick = () => {
    dispatch(sport_Yes());
    navigate(`${homeUrl}/result`);
  }

  // 「いいえ」ボタンがクリックされた時の処理
  const sport_No_handleClick = () => {
    dispatch(sport_No());
    dispatch(other())
    navigate(`${homeUrl}/result`);
  }

  return (
    <>
      <Header title="スポーツが好きですか？" />
      <Flex direction="column" align="center" maxW="500px" mx="auto" p="4">
        <Flex direction="row">
          <Button onClick={() => sport_Yes_handleClick()} size="xl" mt="60" mr="10">
            はい
          </Button>
          <Button onClick={() => sport_No_handleClick()} size="xl" mt="60" >
            いいえ
          </Button>
        </Flex>
      </Flex>
      <Button onClick={() => navigate(`${homeUrl}/exercise`)} size="lg" style={{ position: "fixed", bottom: "40px", left: "30px" }}>
        戻る
      </Button>
    </>
  );
}

export default Sport;


{/* <h3>性別：{gender[3]}</h3>
<h3>学年：{age[2]}</h3>
<h2>スポーツが好きですか？</h2>
<Button onClick={() => sport_Yes_handleClick()} style={{ fontSize: '1.5em' }} className='yesButton'>はい</Button>
<Button onClick={() => sport_No_handleClick()} style={{ fontSize: '1.5em' }}>いいえ</Button>
<br/>
<br/>
<Button onClick={() => navigate(`${homeUrl}/exercise`)} style={{ fontSize: '1.5em' }}>戻る</Button> */}