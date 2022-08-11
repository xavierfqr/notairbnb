import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export function Banner() {
  const textColor = useColorModeValue('black', 'black');

  return (
    <Box position="relative" h="300px">
      <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" objectPosition="50% 100%"></Image>
      <Box position="absolute" top="35%" w="100%" h="100%" textAlign="center">
        <Text as="p" mb={3} color={textColor}>
          Not sure where to go ? Perfect.
        </Text>
        <Button color="black" _hover={{ bg: 'white.900' }} rounded="full" fontWeight="bold" boxShadow="base">
          {"I'm flexible"}
        </Button>
      </Box>
    </Box>
  );
}
