import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner } from '../src/components/Home/Banner';
import { Header } from '../src/components/Home/Header';
import { LargeCard } from '../src/components/Home/LargeCard';
import { Explore } from '../src/components/Home/main/Explore';
import { LiveAnywhere } from '../src/components/Home/main/LiveAnywhere';

import {
  BASE_PAPA_URL,
  ExploreData,
  fetchExploreNearby,
  fetchLiveAnywhere,
  LiveAnywhereData,
} from '../src/fetching/fetch';

export async function getStaticProps() {
  const exploreDatas = await fetchExploreNearby();
  const liveAnywhereDatas = await fetchLiveAnywhere();
  return {
    props: {
      exploreDatas,
      liveAnywhereDatas,
    },
  };
}

type Props = {
  exploreDatas: ExploreData[];
  liveAnywhereDatas: LiveAnywhereData[];
};

const Home: NextPage<Props> = ({ exploreDatas, liveAnywhereDatas }: Props) => {
  return (
    <Box>
      <Head>
        <title>My airbnb</title>
        <link rel="icon" href={`${BASE_PAPA_URL}/qd3`}></link>
      </Head>
      <Header />
      <Banner />
      <Explore exploreDatas={exploreDatas} />
      <LiveAnywhere liveAnywhereDatas={liveAnywhereDatas} />
      <LargeCard
        img={`${BASE_PAPA_URL}/4cj`}
        title="The Greatest Outdoors"
        description="Whishlists curated by Airbnb."
        buttonText="Get inspired"
      />
    </Box>
  );
};

export default Home;
