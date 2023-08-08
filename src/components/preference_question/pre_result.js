import { useState,useEffect } from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import toys_db from '../../db/toy_db';
import { useNavigate, } from "react-router-dom"
import { Button, Box, Text, Flex, VStack, Image } from '@chakra-ui/react';
import "./styles.css";
import { resetCraft, resetDoll, resetOther, resetSport, resetStuffedtoy, resetVehicle, resetVideogame, result_Back } from '../../actions';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'

const homeUrl = process.env.PUBLIC_URL;

const Pre_result = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Reduxのstateから必要な値を取得するためのフック
  const genre = useSelector((state) => state.genre.genre);
  const gender_val = useSelector((state) => state.gender);

  const [gender] = gender_val;

    const [selectedToys, setSelectedToys] = useState([]);
  useEffect(() => {
    const savedToys = JSON.parse(localStorage.getItem('selectedToys')) || [];
    setSelectedToys(savedToys);
  }, []);

  //ローカルストレージに追加する
  const handleSaveToyName = (toyName) => {
    const updatedToys = [...selectedToys, toyName];
    setSelectedToys(updatedToys);
    localStorage.setItem('selectedToys', JSON.stringify(updatedToys));
  };
  const handleDeleteToyName = (toyNumber) => {
    const updatedToys = selectedToys.filter((number) => number !== toyNumber);
    setSelectedToys(updatedToys);
    localStorage.setItem('selectedToys', JSON.stringify(updatedToys));
  };
  
  const isToyNumberSaved = (toyNumber) => {
    return selectedToys.includes(toyNumber);
  };




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
    return { name: toy.name, price: toy.price, image_url: toy.image_url, page_url:toy.page_url,number:toy.toy_number, };
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

      // Function to handle clicking the toy card
      const handleCardClick = (e, toy) => {
        // Check if the click target is the button, if so, do nothing
        if (e.target.tagName === "BUTTON") return;
    
        // Open the URL only when clicking the rest of the card (not the button)
        window.open(toy.page_url, "_blank");
      };


  return (
    <>
          <Header text={`商品一覧`} />

          <Box position='fixed' zIndex='2'>
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' top='1%' left='1%' >
            <Button variant="solid" >
        戻る
      </Button>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton size='lg'/>
            <PopoverHeader><Text fontSize='3xl'>戻る</Text></PopoverHeader>

            <PopoverBody>      <Button onClick={() => back_handleClick()} size="md" >
      質問に戻る
      </Button></PopoverBody>
            <PopoverBody>      <Button onClick={() => navigate(`${homeUrl}/firstchoice`)} size="md">
      はじめから
      </Button></PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>


      <Box position='fixed' zIndex='2'>
        <Popover>
          <PopoverTrigger>
            <Box position='fixed' top='1%' right='3%' >
              <button height='50px' width='80px' colorScheme='twitter' class="reslt-radius">
                <Text as='b' fontSize='lg'> ? </Text>
              </button>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton size='lg'/>
            <PopoverHeader><Text fontSize='3xl'><b>ヘルプ</b></Text></PopoverHeader>
            <PopoverBody><Text fontSize='3xl'>商品をタップし詳細を確認できます</Text></PopoverBody>
            <PopoverBody><Text fontSize='3xl'>「後で見る」からお気に入りに追加できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/基本画面/商品一覧画面" target="_blank">
                <Button colorScheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>

  
      <Box mt="70px" mb="80px" px="1">
        <VStack spacing={1} align='stretch'>
          {currentToyDis.map((toy) => (
            <Flex
              key={`${toy.name}-${toy.price}`}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
              alignItems="center"
              justifyContent="flex-start"
              mb={1}
              _hover={{ cursor: "pointer" }}
              position="relative" // Add this line to enable absolute positioning
              onClick={(e) => handleCardClick(e, toy)} // Use custom click handler for the card
            >
                <Image src={toy.image_url} alt={toy.name} boxSize='80px' />
                <VStack align='flex-start' px={1} mt={1}>
                  <Text fontSize='lg' textAlign='left' as='b'>
                    {toy.name}
                  </Text>
                  <Text fontSize='lg' color='firebrick'>
                    {(toy.price).toLocaleString()}円(税込)
                  </Text>
                </VStack>
                <Flex // Use Flexbox to position buttons under the price
                justifyContent="flex-end"
                position="absolute" // Position the buttons absolutely
                bottom="1" // Place the buttons at the bottom of the container
                right="1" // Align the buttons to the right
                w="100%" // Make the button container the full width of the card
              >
                {!isToyNumberSaved(toy.number) && (
                  <Button onClick={() => handleSaveToyName(toy.number)} size='sm' colorScheme='blackAlpha'>
                    後で見る
                    </Button>
                )}
                {isToyNumberSaved(toy.number) && (
                  <Button onClick={() => handleDeleteToyName(toy.number)} size="sm" colorScheme="gray">
                    削除
                  </Button>
                )}
              </Flex>
            </Flex>
          ))}
        </VStack>
      </Box>
      <Footer
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        pageNumber={pageNumber}
        toy_dis={toy_dis}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
  
}

export default Pre_result;