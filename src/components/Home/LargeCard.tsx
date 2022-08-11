import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

type Props = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};

export function LargeCard({ img, title, description, buttonText }: Props) {
  return (
    <Flex justifyContent="center" w="100%" position="relative">
      <Box width="80%" height={80} position="relative" textAlign="left">
        <Image src={img} layout="fill" objectFit="cover" style={{ borderRadius: '10px' }} />
        <Box position="absolute" top="25%" left="7%" color="black">
          <Heading size="md" w="150px" noOfLines={2} mb={3}>
            {title}
          </Heading>
          <Text fontSize="sm" mb={3}>
            {description}
          </Text>
          <Button bg="black" color="white">
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
