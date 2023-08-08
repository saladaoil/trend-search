import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const PregenderHeader = () => {
    const type = useSelector((state) => state.genreType);
  
    return (
    <Box as="header" bg="#1DA1F2" py="3" color="white" position="fixed" top="0" left="0" right="0" zIndex="1">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          {type === 1 && "キャラクター"}
          {type === 2 && "ブランド"}
          から探す
        </Text>
      </Box>
    );
  };
  
  export default PregenderHeader;