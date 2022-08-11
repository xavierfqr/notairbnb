import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { BASE_PAPA_URL } from '../../fetching/fetch';

export function Banner() {
  const textColor = useColorModeValue('black', 'black');

  return (
    <Box position="relative" h="300px">
      <Image
        src={`${BASE_PAPA_URL}/0fm`}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 100%"
        priority={true}
      ></Image>
      <Box position="absolute" top="35%" w="100%" h="100%" textAlign="center">
        <Text as="p" mb={3} color={textColor}>
          Not sure where to go ? Perfect.
        </Text>
        <Button
          color="purple.400"
          bg="white"
          transition="all .25s ease"
          rounded="full"
          fontWeight="bold"
          boxShadow="base"
          _active={{ bg: 'purple.50', transform: 'scale(0.9)' }}
          _hover={{ bg: 'white.900', boxShadow: 'dark-lg' }}
        >
          {"I'm flexible"}
        </Button>
      </Box>
    </Box>
  );
}
