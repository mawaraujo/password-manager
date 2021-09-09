import React, { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const HomePageComponet = React.lazy(() => import('./pages/home'));

export default function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <ChakraProvider>
        <HomePageComponet />
      </ChakraProvider>
    </Suspense>
  );
};
