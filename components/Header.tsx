import React from 'react';
import { Box, Button, Grid, GridItem, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import Searchbar from './Searchbar';
import { GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid
      gridTemplateColumns={'repeat(3, 1fr)'}
      h="80px"
      w="100%"
      alignItems="center"
      position="sticky"
      top={0}
      zIndex={10}
      boxShadow="base"
      px={8}
    >
      <GridItem height="50%" position="relative">
        <Image
          alt="airbnb Logo"
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </GridItem>
      <GridItem width="80%">
        <Searchbar />
      </GridItem>
      <GridItem
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        justifySelf="flex-end"
        position="relative"
        height="100%"
      >
        <Button onClick={toggleColorMode} w="20px" mr={2}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Box>Become a Host</Box>
        <Box cursor="pointer" aria-label="ok" height="80%" display="flex" alignItems="center" ml={3} mr={3}>
          <GlobeAltIcon height="50%" />
        </Box>
        <Box
          height="50%"
          alignSelf="auto"
          display="flex"
          alignItems="center"
          borderRadius="full"
          border="1px solid #eee"
          p={1}
        >
          <MenuIcon height="90%" cursor="pointer" />
          <Box w={1} />
          <UserCircleIcon height="90%" cursor="pointer" />
        </Box>
      </GridItem>
    </Grid>
  );
}
