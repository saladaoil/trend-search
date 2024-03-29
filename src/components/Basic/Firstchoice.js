import React from 'react';
import './commonstyles.css';
import { useNavigate } from "react-router-dom"
import { Button, Flex, Text } from '@chakra-ui/react';
import Header from '../../ui/Header';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box
} from '@chakra-ui/react'
import '../Basic/help.css'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'


import { Divider } from '@chakra-ui/react'



const homeUrl = process.env.PUBLIC_URL;

const Firstchoice = () => {
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()



  return (
    <>

      <Header text="検索方法選択" />

      <Flex direction="column" textAlign='left' align="center" maxW="500px" mx="auto" p="4">
        <Box>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mt="20" >
            検索方法を選択してください
          </Text>
        </Box>
        <Flex direction="column" maxW="450px" >
          <Text fontSize="xl" mt="5" >
            最近の定番をチェック
          </Text>
          <Button onClick={() => navigate(`${homeUrl}/gender`)} size="xl" mt="1">
            流行から選ぶ
          </Button>
          <Text fontSize="xl" mt="5" >
            好みを知っている方向け
          </Text>
          <Button onClick={() => navigate(`${homeUrl}/pregender`)} size="xl" mt="1">
            好みから選ぶ
          </Button>
          <Text fontSize="xl" mt="8" >
            「後で見る」を確認
          </Text>
          <Button onClick={() => navigate(`${homeUrl}/Favorite`)} size="md" mb="5">
            お気に入り
          </Button>
        </Flex>
      </Flex>
      <Button onClick={() => navigate(`${homeUrl}/description1`)} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} variant='outline' colorScheme='twitter'>
        使い方
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
            <PopoverCloseButton size='lg' />
            <PopoverHeader><Text fontSize='3xl'><b>ヘルプ</b></Text></PopoverHeader>
            <PopoverBody><Text fontSize='3xl'>「流行」または「好み」を選択してください</Text></PopoverBody>
            <PopoverBody><Text fontSize='3xl'>「お気に入り」から後で見るに設定した商品を確認できます</Text></PopoverBody>
            <PopoverHeader>
              <a href="https://sites.google.com/view/trend-help/使い方/基本画面/検索方法選択画面" target="_blank">
                <Button colorscheme='twitter'>ヘルプページ</Button>
              </a>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>
    </>

  );
};
export default Firstchoice;

    // <div>
    //   <div className="app-container">
    //     <div className="body">
    //       <div className="description">
    //         <h1>どちらかを選択<br></br>してください</h1>
    //       </div>
    //     </div>
    //     <Button onClick={() => navigate(`${homeUrl}/gender`)}style={{ fontSize: '1em' }}>流行から選ぶ</Button>
    //     <Button onClick={() => navigate(`${homeUrl}/preselect`)}style={{ fontSize: '1em' }}>好みから選ぶ</Button>
    //   </div>
    // </div>




// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import { useNavigate } from "react-router-dom"
// import './styles.css';


// import Op1 from './images/TrendSearch 流行 kari.png'

// const Gender = () => {
//   const navigate = useNavigate()

//   return (
//     <div>
//       <Header />
//       <div className="app-container">
//         <header className="header">
//         </header>
//         <div className="body">
//           <div className="description">
//             <h1>どちらかを選択<br></br>してください</h1>
//           </div>
//         </div>
//             <img src={Op1} alt="アイコン" className="op1" />
//             <img src={Op1} alt="アイコン" className="op1" />
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default Gender