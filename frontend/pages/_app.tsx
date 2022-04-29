import { ChakraProvider } from '@chakra-ui/react';
import Navigation from 'components/global/navigation/Navigation';
import { CookiesProvider } from 'react-cookie';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <CookiesProvider>
          <Navigation />
          <Component {...pageProps} />
        </CookiesProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;