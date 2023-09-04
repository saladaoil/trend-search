import { Container, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import React, { useEffect } from 'react';
import './commonstyles.css';
import TrendSearchIcon from '../images/Trend Icon.png';
import { useNavigate } from 'react-router-dom';
import {Text, Box, Center, Image,} from '@chakra-ui/react';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});



const homeUrl = process.env.PUBLIC_URL;

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`${homeUrl}/description1`);
    }, 5000-Math.random()*3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    
    <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
      <ChakraBox
        animate={{
          scale: [1.5, 1, 1, 1.5, 1.5],
          rotate: [0, 0, 360, 360, 360],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
      >
<Image src={TrendSearchIcon} alt='Dan Abramov' display='block' mx='auto' />
</ChakraBox>
    </Container>

    
  )
}
export default Splash;
