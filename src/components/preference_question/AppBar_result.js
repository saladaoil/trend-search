import React from 'react';
import './../Basic/AppBar.css';
import { Box, Text,} from '@chakra-ui/react';
import { useSelector,} from 'react-redux';

const AppBargender = () => {
  const gender = useSelector((state) => state.gender);
  const type = useSelector((state) => state.genreType);
  const [gender_val] = gender;

  return (
    <div className="custom-appbar">
      <div className="appbar-content">
        <Box position='fixed'>
        <Text fontSize='2xl' as='b' >
        {gender_val === 1 && "男子向け"}{gender_val === 2 && "女子向け"}の
          {type === 1 && "キャラクター"}{type === 2 && "ブランド"}
          一覧</Text>
        </Box>
      </div>
    </div>
  );
};

export default AppBargender;