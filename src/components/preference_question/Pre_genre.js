import { useState } from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import genre_db from '../../db/Genre_db';
import { useNavigate, } from "react-router-dom"
import { Text, Button, Card, Stack, Box, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';
import "./styles.css";
import { setGenre } from '../../actions';
import PregenreHeader from '../../ui/Pre_genreHeader';
import '../Basic/help.css'
const homeUrl = process.env.PUBLIC_URL;

const Pre_genre = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  // おもちゃのデータを取得
  const genres = genre_db; 

  // Reduxのstateから必要な値を取得するためのフック
  const gender_val = useSelector((state) => state.gender);
  const type = useSelector((state) => state.genreType);

  // Reduxのstateから必要な値を取得
  const [gender] = gender_val;
  
  // おもちゃをフィルタリングする
  let genre_filterResult = genres.filter(function (value) {
    return (
      (value.gender && value.gender === gender) &&
      (value.type && value.type === type)
    );
  });

  // フィルタリングされたおもちゃの表示データを作成する
  let genre_dis = genre_filterResult.map(function(genre) {
    return { name: genre.name, gender: genre.gender, image_url: genre.image_url, };
  });

  
  // ページネーションのための状態と関数を定義
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // 現在のページのおもちゃの表示データを取得
  const currentGenre = genre_dis.slice(startIndex, endIndex);
  
  
  const result_handleClick = (genre) => {
    dispatch(setGenre(genre.name));
    navigate(`${homeUrl}/preresult`)
  };

  return (
    <>
      <PregenreHeader/>   
      <Box mt="70px">
      <Stack spacing={['8', '8', '10']} mt="8" width="100%"  >
      <ul>
        {/* 現在のページのおもちゃの表示データをマップして表示 */}
        {currentGenre.map(function (genre) {
          return (
            <Card key={genre.name} m={2} boxShadow="lg"> 
              <img src={genre.image_url} alt={genre.name} onClick={() => result_handleClick(genre)} />
            </Card>  
          );
        })}
      </ul>
      </Stack>
      </Box>
      <Button onClick={() => navigate(`${homeUrl}/preselect`)} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} variant='outline' colorscheme='twitter'>
        戻る
      </Button>

      <Box position='fixed' bottom='5%' right='5%' >
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' bottom='5%' right='5%' >
              <button height='50px' width='80px' colorscheme='twitter' className="border-radius">
                <Text as='b' fontSize='20px' > ? </Text>
              </button>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton size='lg'/>
            <PopoverHeader><Text fontSize='3xl'><b>ヘルプ</b></Text></PopoverHeader>
            <PopoverBody><Text fontSize='3xl'>お孫さんの性別を回答してください</Text></PopoverBody>
            <PopoverBody><Text fontSize='3xl'>タップをすることによって選択できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/流行から選ぶ/性別選択画面" target="_blank">
                <Button colorscheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
}

export default Pre_genre;

