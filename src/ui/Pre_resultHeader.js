import { Box, Text,} from '@chakra-ui/react';
import { useSelector,} from 'react-redux';

const Pre_resultHeader = () => {
    const genre = useSelector((state) => state.genre.genre);

  return (
    <Box as="header" bg="#1DA1F2" py="4" color="white" mt="0">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        商品一覧
      </Text>
    </Box>
  )
}

export default Pre_resultHeader