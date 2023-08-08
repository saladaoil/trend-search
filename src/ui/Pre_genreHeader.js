import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Pre_genreHeader = () => {
    const gender = useSelector((state) => state.gender);
    const type = useSelector((state) => state.genreType);
    const [gender_val] = gender;
  
    return (
    <Box as="header" bg="#1DA1F2" py="3" color="white" position="fixed" top="0" left="0" right="0" zIndex="1">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          {gender_val === 1 && "男子向け"}{gender_val === 2 && "女子向け"}の
          {type === 1 && "キャラクター"}{type === 2 && "ブランド"}
          一覧
        </Text>
      </Box>
    );
};

export default Pre_genreHeader