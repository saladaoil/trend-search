import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const PregenderHeader = () => {
    const type = useSelector((state) => state.genreType);
  
    return (
      <Box as="header" bg="#1DA1F2" py="4" color="white" mt="0">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          {type === 1 && "キャラクター"}
          {type === 2 && "ブランド"}
          から探す
        </Text>
      </Box>
    );
  };
  
  export default PregenderHeader;