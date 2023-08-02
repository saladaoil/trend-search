import React, { useState } from 'react';
import toys_db from '../../db/toy_db';
import { Box, Flex, VStack, Image, Text, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import Header from '../../ui/Header';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const homeUrl = process.env.PUBLIC_URL;

const SelectedToysPage = () => {
  // Load the selected toy numbers from localStorage
  const selectedToyNumbers = JSON.parse(localStorage.getItem('selectedToys')) || [];

  const navigate = useNavigate();

  // Fetch toy data from toy_db
  const toys = toys_db;

  // Create state to manage modal visibility and toy deletion
  const [selectedToyToDelete, setSelectedToyToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle deleting a selected toy
  const handleDeleteToyName = (toyNumber) => {
    const selectedToy = toys.find((toy) => toy.toy_number === toyNumber);
    setSelectedToyToDelete(selectedToy);
    setIsModalOpen(true);
  };

  // Function to confirm toy deletion and perform the actual deletion
  const confirmDeleteToy = () => {
    const updatedToys = selectedToyNumbers.filter((number) => number !== selectedToyToDelete.toy_number);
    localStorage.setItem('selectedToys', JSON.stringify(updatedToys));
    setIsModalOpen(false);
    // You may want to update the component state here if you're using React hooks
    // For simplicity, I'm assuming the page will reload, and the deleted toy will disappear from the list.
    window.location.reload();
  };

  return (
    <>
      <Header text="お気に入り" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1 }} />


      <Box mt="70px" mb="80px" px="1">
        {selectedToyNumbers.length > 0 ? (
          <VStack spacing={1} align='stretch'>
            {selectedToyNumbers.map((toyNumber, index) => {
              const selectedToy = toys.find((toy) => toy.toy_number === toyNumber);
              return selectedToy ? (
                <Flex key={`${selectedToy.name}-${selectedToy.price}`} borderWidth='1px' borderRadius='lg' boxShadow='md' mb={1} w="100%" justifyContent="flex-start" position="relative">
                  <Button onClick={() => navigate(`${homeUrl}/firstchoice`)} size="md" style={{ position: "fixed", bottom: "5%", left: "5%" }} fontSize="md">
                    戻る
                  </Button>
                  <a href={selectedToy.page_url} target='_blank' rel='noopener noreferrer' style={{ flexGrow: 1, textDecoration: 'none' }}>
                    <Flex alignItems='center' justifyContent='flex-start' _hover={{ cursor: 'pointer' }}>
                      <Image src={selectedToy.image_url} alt={selectedToy.name} boxSize='80px' h='80px' />
                      <VStack align='flex-start' ml={2} flexGrow={1}>
                        <Text fontSize='md' textAlign='left' fontWeight="bold" noOfLines={2}>
                          {selectedToy.name}
                        </Text>
                        <Text fontSize='md' color='firebrick'>
                          {selectedToy.price.toLocaleString()}円(税込)
                        </Text>
                      </VStack>
                    </Flex>
                  </a>
                  <Flex justifyContent="flex-end" position="absolute" bottom="1" right="1" w="100%">
                    <Button size='sm' colorScheme='gray' onClick={() => handleDeleteToyName(toyNumber)}>削除</Button>
                  </Flex>
                </Flex>
              ) : null;
            })}
          </VStack>
        ) : (
          <Flex direction="column" maxW="500px" mx="auto" p="6"  >
          <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="left" mt="8%" >
                  商品はありません
          </Text>
            <Text fontSize="2xl" color="gray" textAlign="left" mt="1%">
            商品一覧から <Button size='sm' colorScheme='blackAlpha'> 後で見る </Button>を選択して追加できます
            </Text>

            <Button onClick={() => navigate(`${homeUrl}/firstchoice`)} size="lg" mt="15%">
              戻る
            </Button>
          </Flex>
        )}
      </Box>

      {/* Modal for confirming toy deletion */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>削除確認</ModalHeader>
          <ModalBody>
            {selectedToyToDelete && (
              <Flex alignItems='center' justifyContent='flex-start' _hover={{ cursor: 'pointer' }}>
                <Image src={selectedToyToDelete.image_url} alt={selectedToyToDelete.name} boxSize='80px' h='80px' />
                <VStack align='flex-start' ml={2} flexGrow={1}>
                  <Text fontSize='md' textAlign='left' noOfLines={2}>
                    {selectedToyToDelete.name}
                  </Text>
                  <Text fontSize='md' color='firebrick'>
                    {selectedToyToDelete.price.toLocaleString()}円(税込)
                  </Text>
                </VStack>
              </Flex>
            )}

            <Flex right="1" r="100%">
              <Text fontSize='md' fontWeight="bold">
                をお気に入りから削除しますか？
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={confirmDeleteToy}>
              削除
            </Button>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>キャンセル</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectedToysPage;
