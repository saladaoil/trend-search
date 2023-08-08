import { Box, Text,} from '@chakra-ui/react';
import { useSelector,} from 'react-redux';

const Pre_resultHeader = () => {
    const genre = useSelector((state) => state.genre.genre);

  return (
    <Box as="header" bg="#1DA1F2" py="3" color="white" position="fixed" top="0" left="0" right="0" zIndex="1">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        商品一覧
      </Text>
    </Box>
  )
}

export default Pre_resultHeader