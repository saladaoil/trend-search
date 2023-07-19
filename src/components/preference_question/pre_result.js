import { useState } from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import toys_db from '../../db/toy_db';
import { useNavigate, } from "react-router-dom"
import "./styles.css";
import AppBar_type from './AppBar_type';
import { Box, Text, Button, Center, Image, VStack,Flex } from '@chakra-ui/react';
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
import AppBar from './AppBar_result';
import FooBar from '../trend_question/AppBar_foot';




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
  const itemsPerPage = 7;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // ページ遷移に使用するフック
  
  // 次のページに移動する関数
  const goToNextPage = () => setPageNumber(pageNumber + 1);
  
  // 前のページに移動する関数
  const goToPrevPage = () => setPageNumber(pageNumber - 1);
  
  // 現在のページのおもちゃの表示データを取得
  const currentToyDis = toy_dis.slice(startIndex, endIndex);

  const totalNumberOfCards = toy_dis.length;


  return (
    <>
      <AppBar_type />

      {totalNumberOfCards >7 && (
      <FooBar />
          )}
      <Box position='fixed' top='2%' right='2%'>
        <Button height='40px' width='120px' colorScheme='gray' onClick={() => navigate(`${homeUrl}/firstchoice`)}>
          <Text as='i' fontSize='18px' >やりなおす</Text>
        </Button>
      </Box>

      <Box mt="80px" mb="80px" px="1">
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

        <Box position='fixed' bottom='3%' left='50%' transform='translateX(-50%)'>
        <Flex alignItems='center'>
          {pageNumber >= 2 && (
            <Button
              right='50%'
              variant='outline'
              colorScheme="twitter"
              onClick={goToPrevPage}
              className='BottomRadius'
            >
              前のページ
            </Button>
          )}



          

          {pageNumber * itemsPerPage <= totalNumberOfCards && (
            <Button
              left='50%'
              variant='outline'
              colorScheme="twitter"
              onClick={goToNextPage}
              disabled={currentToyDis.length < itemsPerPage}
              className='BottomRadius'
            >
              次のページ
            </Button>
          )}
        </Flex>
      </Box>

      
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
            <PopoverBody><Text fontSize='30px'>商品一覧です。<br />やり直したい場合は右上のボタンを押してください</Text></PopoverBody>
            <PopoverBody><Text fontSize='30px'>タップで商品の詳細を確認できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/画面ごとの使い方/商品一覧画面" target="_blank">
                <Button colorScheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>

    </>
  );
}

export default Pre_result;