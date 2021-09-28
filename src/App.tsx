import React, { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { LoadingScreenComponent } from './components/LoadingScreen';

const HomePageComponet = React.lazy(() => import('./pages/home'));

export default function App() {
  return (
    <Suspense fallback={<LoadingScreenComponent />}>
      <ChakraProvider>
        <HomePageComponet />
      </ChakraProvider>
    </Suspense>
  );
};
