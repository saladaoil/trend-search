import { extendTheme } from "@chakra-ui/react";

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
        md: {
          h: '50px', 
          fontSize: 'xl', 
          px: '28px', 
        },
      },
    },
  },
});

export default customTheme;
