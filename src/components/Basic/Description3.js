import { useNavigate } from 'react-router-dom';
import { Box, Text, Button, Center, } from '@chakra-ui/react';
import Stepper from '../images/stepper3.png';
import Des3 from '../images/Des3 image.png';


const homeUrl = process.env.PUBLIC_URL;

const Description = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box position='fixed' top='6%' left='50%' transform='translateX(-50%)'>
        <Text fontSize='40px' width='300px' as='b'>
          使い方②
        </Text>
      </Box>


      <Box position='fixed' bottom='65px' left='50%' transform='translateX(-50%)'>
        <Button fontSize='30px' height='50px' width='250px' colorscheme='twitter'>
        <h1 className='BottomRadius' onClick={() => navigate(`${homeUrl}/description4`)}>次へ</h1>
        </Button>
      </Box>

    </>
  );
};

export default Description;
