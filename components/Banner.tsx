import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export function Banner() {
  return (
    <Box position="relative" h="300px">
      <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" objectPosition="50% 100%"></Image>
      <Box position="absolute" textAlign="center" top="35%" w="100%" h="100%">
        Not sure where to go ? Perfect
      </Box>
    </Box>
  );
}
