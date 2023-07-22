import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button, Center, Image, } from '@chakra-ui/react';
import Stepper from './Stepper.png';
import Desicon from './Des1 icon.png';


const homeUrl = process.env.PUBLIC_URL;

const Description = () => {
  const navigate = useNavigate();

  return (
    <Center>

      <Box position='fixed' bottom='440px' left='50%' transform='translateX(-50%)'>
        <Center>
          <Image src={Desicon} alt='Dan Abramov' display='block' mx='auto' />
          
        </Center>
      </Box>

      <Box position='fixed' bottom='350px'>
        <Text fontSize='27px' width='300px'>
          <Heading mb={4}>ようこそ</Heading>
        </Text>
      </Box>


      <Center>
        <Box position='fixed' bottom='230px'>
          <Text fontSize='27px' width='300px'>
            TrendSearchは孫に<br />ピッタリのプレゼントを選べるアプリです
          </Text>
        </Box>
      </Center>

      <Box position='fixed' bottom='185px' left='50%' transform='translateX(-50%)'>
        <Center>
          <img src={Stepper} style={{ width: '80%' }} alt='Stepper' />
        </Center>
      </Box>

      <Box position='fixed' bottom='95px' left='50%' transform='translateX(-50%)'>
        <Button fontSize='45px' height='70px' width='250px' colorscheme='teal'>
        <h1 className='BottomRadius' onClick={() => navigate(`${homeUrl}/description2`)}>次へ</h1>
        </Button>
      </Box>

      <Box position='fixed' bottom='40px' left='50%' transform='translateX(-50%)'>
        <h1 className='BottomRadius' onClick={() => navigate(`${homeUrl}/firstchoice`)} style={{ fontSize: '25px' }}>スキップ</h1>
        <h1 className='BottomRadius' onClick={() => navigate(`${homeUrl}/firstchoice`)} style={{ fontSize: '25px' }}>スキップ</h1>
      </Box>
    </Center>
  );
};

export default Description;
