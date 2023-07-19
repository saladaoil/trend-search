import React, { useEffect } from 'react';
import './commonstyles.css';
import TrendSearchIcon from '../images/Trend Icon.png';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button, Center, Image, Stack } from '@chakra-ui/react';


const homeUrl = process.env.PUBLIC_URL;

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`${homeUrl}/description1`);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    
    <Box position='fixed' bottom='45%' left='50%' transform='translateX(-50%)'>
    <Center>
      <Image src={TrendSearchIcon} alt='Dan Abramov' display='block' mx='auto' />
      
    </Center>
  </Box>
  );
};

export default Splash;
