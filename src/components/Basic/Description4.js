import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button, Center, Image, Stack } from '@chakra-ui/react';
import Stepper from '../images/stepper4.png';
import Des4 from '../images/Des4 image.png'

const homeUrl = process.env.PUBLIC_URL;

const Description = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box position='fixed' top='6%' left='50%' transform='translateX(-50%)'>
        <Text fontSize='40px' width='350px' as='b'>
          始めよう
        </Text>
      </Box>
      <Center>
<Box position='fixed' top='18%'style={{ display: 'flex', justifyContent: 'center' }}>
  {/*<Box bottom='20px' style={{ display: 'flex', justifyContent: 'center' }} >*/}

      <img
        src={Des4}
        alt='Dan Abramov'
        style={{ maxWidth: '65%', height: 'auto' }}
      />

    </Box>
    </Center>

      <Center>
  <Box position='fixed' top='57%'>
    <Text fontSize='27px' width='300px' textAlign='left'>
    使い方は以上です。<br />
    困った時は❓マーク<br />
    をタップしてください。
    </Text>
  </Box>
</Center>

<Box position='fixed' bottom='125px' left='50%' transform='translateX(-50%)'>
        <Center>
        <img src={Stepper} style={{ width: '40%' }} alt='Stepper' />
        </Center>
      </Box>

      <Box position='fixed' bottom='65px' left='50%' transform='translateX(-50%)'>
        <Button fontSize='30px' height='50px' width='250px' colorScheme='twitter'>
        <h1 className='BottomRadius' onClick={() => navigate(`${homeUrl}/firstchoice`)}>開始</h1>
        </Button>
      </Box>

    </>
  );
};

export default Description;
