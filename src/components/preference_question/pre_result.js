import { useState } from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import toys_db from '../../db/toy_db';
import { useNavigate, } from "react-router-dom"
import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import "./styles.css";
import PreresultHeader from '../../ui/Pre_resultHeader';
import Footer from '../../ui/Footer';

const homeUrl = process.env.PUBLIC_URL;

const Pre_result = () => {
  
  const navigate = useNavigate();

  // Reduxのstateから必要な値を取得するためのフック
  const genre = useSelector((state) => state.genre.genre);
  const gender_val = useSelector((state) => state.gender);

  const [gender] = gender_val;



  const back_handleClick = () => {
    navigate(`${homeUrl}/pregenre`)
  }

  
  // おもちゃのデータを取得
  const toys = toys_db; 
  
  // おもちゃをフィルタリングする
  

  let toy_filterResult = toys.filter(function (value) {
    return (
      (value.type && value.type === genre)
    );
  });

  
  // フィルタリングされたおもちゃの表示データを作成する
  let toy_dis = toy_filterResult.map(function(toy) {
    return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url };
  });

  console.log(gender)
  console.log(genre)
  
  // ページネーションのための状態と関数を定義
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // ページ遷移に使用するフック
  
  // 次のページに移動する関数
const goToNextPage = () => {
  // 現在のページが最後のページよりも小さい場合のみ、ページを進める
  if (pageNumber < Math.ceil(toy_dis.length / itemsPerPage)) {
    setPageNumber(pageNumber + 1);
  }
};

// 前のページに移動する関数
const goToPrevPage = () => {
  // 現在のページが最初のページよりも大きい場合のみ、ページを戻す
  if (pageNumber > 1) {
    setPageNumber(pageNumber - 1);
  }
};
  
  // 現在のページのおもちゃの表示データを取得
  const currentToyDis = toy_dis.slice(startIndex, endIndex);


  return (
    <>
      <PreresultHeader/>
      <Button onClick={() => back_handleClick()} size="md" style={{ position: "fixed", top: "10px", left: "10px" }}>
        戻る
      </Button>

      <Button onClick={() => navigate(`${homeUrl}/`)} size="md" style={{ position: "fixed", top: "10px", right: "10px" }}>
        最初へ
      </Button>

      <Box mt="20px" mb="80px" px="1">
        <VStack spacing={1} align='stretch'>
          {currentToyDis.map((toy) => (
            <Box px={1} pb={1} key={`${toy.name}-${toy.price}`}>
              <a href={toy.page_url} target='_blank' rel='noopener noreferrer'>
                <Flex
                  key={`${toy.name}-${toy.price}`}
                  borderWidth='1px'
                  borderRadius='lg'
                  boxShadow='md'
                  alignItems='center'
                  justifyContent='flex-start'
                  mb={1}
                  _hover={{ cursor: 'pointer' }}
                >
                  <Image src={toy.image_url} alt={toy.name} boxSize='80px' />
                  <VStack align='flex-start' px={2}>
                    <Text fontSize='17' textAlign='left' as='b'>
                      {toy.name}
                    </Text>
                    <Text fontSize='16'>
                      {toy.price}円
                    </Text>
                  </VStack>
                </Flex>
              </a>
            </Box>
          ))}
        </VStack>
        
        <Footer
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        pageNumber={pageNumber}
        toy_dis={toy_dis}
        itemsPerPage={itemsPerPage}
      />
      </Box>
    </>
  );
}

export default Pre_result;