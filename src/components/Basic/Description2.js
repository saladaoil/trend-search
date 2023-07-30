import React from 'react';
import toys_db from '../../db/toy_db';
import { Box, Flex, VStack, Image, Text, Button } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import './commonstyles.css';
import { useNavigate } from "react-router-dom"
import Header from '../../ui/Header';

const homeUrl = process.env.PUBLIC_URL;

const SelectedToysPage = () => {
  // Load the selected toy numbers from localStorage
  const selectedToyNumbers = JSON.parse(localStorage.getItem('selectedToys')) || [];

  const navigate = useNavigate()


  // Fetch toy data from toy_db
  const toys = toys_db;

  // Filter the selected toys based on their numbers
  const selectedToysData = selectedToyNumbers.map((toyNumber) => {
    const selectedToy = toys.find((toy) => toy.toy_number === toyNumber);
    return selectedToy ? (
      <Box key={`${selectedToy.name}-${selectedToy.price}`} borderWidth='1px' borderRadius='lg' boxShadow='md'>
        <a href={selectedToy.page_url} target='_blank' rel='noopener noreferrer'>
          <Flex alignItems='center' justifyContent='flex-start' p={2} _hover={{ cursor: 'pointer' }}>
            <Image src={selectedToy.image_url} alt={selectedToy.name} boxSize='80px' />
            <VStack align='flex-start' ml={2}>
              <Text fontSize='lg' textAlign='left' as='b'>
                {selectedToy.name}
              </Text>
              <Text fontSize='lg' color='firebrick'>
                {selectedToy.price.toLocaleString()}円(税込)
              </Text>
            </VStack>
          </Flex>
        </a>
      </Box>
    ) : null;
  });

  return (
    <>
      <h1>選択したおもちゃのリスト</h1>
      {selectedToysData}
      
      <Button onClick={() => navigate(`${homeUrl}/firstchoice`)} size="md" style={{ position: "fixed", bottom: "40px", left: "30px" }}>
        戻る
      </Button>
    </>
  );
};

export default SelectedToysPage;
