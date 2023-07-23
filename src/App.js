import React from 'react';
import Routers from './Routers';
import "./App.css"
import { ChakraProvider } from '@chakra-ui/provider';
import { extendTheme } from '@chakra-ui/theme-utils';


const customTheme = extendTheme({
  components: {
    Button: {
      sizes: {
        xl: {
          h: '80px', 
          fontSize: '3xl',
          px: '40px',
        },
        lg: {
          h: '60px',
          fontSize: '2xl',
          px: '32px',
        },
      },
    },
  },
});


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