import React from 'react';
import Routers from './Routers';
import "./App.css"
import { ChakraProvider} from '@chakra-ui/react';
import customTheme from './ui/CustomTheme';

const App = () => {
    return (
      <div className='App'>
        <ChakraProvider theme={customTheme}>
          <Routers/>
        </ChakraProvider>
      </div>
    );
}
export default App;