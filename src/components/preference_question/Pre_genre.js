import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import genre_db from '../../db/Genre_db';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { setGenre } from '../../actions';
import AppBar_result from './AppBar_result';
import { Box, Text, Button, Center, Image, Stack, Card } from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import '../Basic/help.css'

const homeUrl = process.env.PUBLIC_URL;

const Pre_genre = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // おもちゃのデータを取得
  const genres = genre_db;

  // Reduxのstateから必要な値を取得するためのフック
  const gender_val = useSelector((state) => state.gender);
  const type = useSelector((state) => state.genreType);

  // Reduxのstateから必要な値を取得
  const [gender] = gender_val;

  let genre_filterResult = genres.filter(function (value) {
    return value.gender === gender && value.type === type;
  });

  const back_handleClick = () => {
    navigate(`${homeUrl}/pregender`);
  };

  // ジャンルをフィルタリングする

  // フィルタリングされたジャンルのデータを作成する
  let genre_dis = genre_filterResult.map(function (genre) {
    return { name: genre.name, gender: genre.gender, image_url: genre.image_url };
  });

  // ページネーションのための状態と関数を定義
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 7;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // ジャンルのデータを取得
  const currentGenre = genre_dis.slice(startIndex, endIndex);

  const result_handleClick = (genre) => {
    dispatch(setGenre(genre.name));
    navigate(`${homeUrl}/preresult`);
  };

  return (
    <>
      <AppBar_result />
      <Box mt="80px"> {/* Add margin-top to create space for the AppBar_result */}
        <ul>
          {/* ジャンルのデータをマップして表示 */}
          {currentGenre.map(function (genre) {
            return (
              <Card key={genre.name}> {/* Add key prop here */}
                <img src={genre.image_url} alt={genre.name} onClick={() => result_handleClick(genre)} />
              </Card>
            );
          })}
        </ul>
      </Box>

      <Box position="fixed" bottom="20px" left="5%">
        <Button height="50px" width="80px" colorScheme="twitter" onClick={() => back_handleClick()} variant="outline">
          <Text as="b" fontSize="20px">
            ◀
          </Text>
          <Text as="i" fontSize="20px">
            戻る
          </Text>
        </Button>
      </Box>

            <Box position='fixed' bottom='20px' right='5%' >
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' bottom='20px' right='5%' >
              <button height='50px' width='80px' colorScheme='twitter' class="border-radius">
                <Text as='b' fontSize='20px' > ? </Text>
              </button>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
          <PopoverArrow />
            <PopoverCloseButton size='lg'/>
            <PopoverHeader><Text fontSize='35px'><b>ヘルプ</b></Text></PopoverHeader>
            <PopoverBody><Text fontSize='30px'>{gender === 1 && "男子向け"}{gender === 2 && "女子向け"}の
          {type === 1 && "キャラクター"}{type === 2 && "ブランド"}一覧から選択してください</Text></PopoverBody>
            <PopoverBody><Text fontSize='30px'>選択肢をタップすることで選択できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/画面ごとの使い方/好みから選ぶ/ジャンル選択画面" target="_blank">
                <Button colorScheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

export default Pre_genre;
