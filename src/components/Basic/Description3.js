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
      <Center>
<Box position='fixed' top='18%'style={{ display: 'flex', justifyContent: 'center' }}>
  {/*<Box bottom='20px' style={{ display: 'flex', justifyContent: 'center' }} >*/}

      <img
        src={Des3}
        alt='Dan Abramov'
        style={{ maxWidth: '75%', height: 'auto' }}
      />

    </Box>
    </Center>

      <Center>
  <Box position='fixed' top='57%'>
    <Text fontSize='27px' width='300px' textAlign='left'>
    回答をすべて終えると<br />
    おすすめの商品一覧を<br />
    確認できます。

    </Text>
  </Box>
</Center>

<Box position='fixed' bottom='125px' left='50%' transform='translateX(-50%)'>
        <Center>
        <img src={Stepper} style={{ width: '40%' }} alt='Stepper' />
        </Center>
      </Box>

      <Box position='fixed' bottom='65px' left='50%' transform='translateX(-50%)'>
        <Button fontSize='30px' height='50px' width='250px' colorscheme='twitter'>
        <h1 className='BottomRadius' onClick={() => navigate(`${homeUrl}/description4`)}>次へ</h1>
        </Button>
      </Box>

      <Box position='fixed' bottom='15px' left='50%' transform='translateX(-50%)'>
        <h1 className='BottomRadius' onClick={() => navigate(`${homeUrl}/firstchoice`)} style={{ fontSize: '25px' }}>スキップ</h1>
      </Box>
    </>
  );
};

export default Description;
