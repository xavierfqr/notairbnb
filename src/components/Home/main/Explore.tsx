import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { ExploreData } from '../../../fetching/fetch';
import { SmallCard } from '../SmallCard';

type Props = {
  exploreDatas: ExploreData[];
};

export function Explore({ exploreDatas }: Props) {
  return (
    <Flex width="100%" alignItems="center" flexDir="column" pt={6}>
      <Heading as="h2" size="xl" w="80%" mb={4}>
        Explore Nearby
      </Heading>
      <Flex w="80%" flexWrap="wrap">
        {exploreDatas?.map((exploreData, index) => (
          <SmallCard
            key={index}
            distance={exploreData.distance}
            img={exploreData.img}
            location={exploreData.location}
          />
        ))}
      </Flex>
    </Flex>
  );
}
