import { Flex, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import { LiveAnywhereData } from '../../../fetching/fetch';
import { MiddleCard } from '../MiddleCard';

type Props = {
  liveAnywhereDatas: LiveAnywhereData[];
};

export function LiveAnywhere({ liveAnywhereDatas }: Props) {
  return (
    <Flex width="100%" alignItems="center" flexDir="column" pt={6}>
      <Heading as="h2" size="xl" w="80%" mb={4}>
        Live Anywhere
      </Heading>
      <HStack w="80%" overflowX="scroll" overflowY="hidden" sx={{ '&::-webkit-scrollbar': { width: '0' } }}>
        {liveAnywhereDatas?.map((liveAnywhereData, index) => (
          <MiddleCard key={index} img={liveAnywhereData.img} title={liveAnywhereData.title} />
        ))}
      </HStack>
    </Flex>
  );
}
