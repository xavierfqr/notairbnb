import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { LiveAnywhereData } from '../../fetching/fetch';

type Props = LiveAnywhereData;

export function MiddleCard({ img, title }: Props) {
  return (
    <Box cursor="pointer" borderRadius={10} transition="all 0.25s ease" _hover={{ transform: 'scale(1.05)' }} p={2}>
      <Box width={80} height={80} position="relative">
        <Image src={img} layout="fill" style={{ borderRadius: '10px' }} />
      </Box>
      <Flex direction="column" justifyContent="center">
        <Text fontWeight="bold">{title}</Text>
      </Flex>
    </Box>
  );
}
