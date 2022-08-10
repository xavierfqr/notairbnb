import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <Box h="100vh">
      <Header />
      <Banner />
    </Box>
  );
};

export default Home;
