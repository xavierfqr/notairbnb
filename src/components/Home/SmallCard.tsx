import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { ExploreData } from '../../fetching/fetch';

type Props = ExploreData;

export function SmallCard({ img, distance, location }: Props) {
  return (
    <Flex
      width={[280, 220]}
      borderRadius={10}
      m={2}
      transition="all 0.25s ease"
      _hover={{ bg: 'gray.200', transform: 'scale(1.1)' }}
      cursor="pointer"
    >
      <Box width={16} height={16} position="relative" mr={1}>
        <Image src={img} layout="fill" style={{ borderRadius: '10px' }} />
      </Box>
      <Flex direction="column" justifyContent="center">
        <Text fontWeight="bold">{location}</Text>
        <Text as="i">{distance}</Text>
      </Flex>
    </Flex>
  );
}
