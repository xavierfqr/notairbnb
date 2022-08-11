import { Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';

function Searchbar() {
  return (
    <InputGroup flex={1} borderRadius="full" _hover={{ boxShadow: '0 5px 20px #eee' }}>
      <Input
        type="text"
        variant="standard"
        placeholder="Rechercher une destination"
        border="1px solid #eee"
        borderRadius="full"
        pr={12}
      ></Input>
      <InputRightElement cursor="pointer" p={1}>
        <Flex alignItems="center" justifyContent="center" bg="red.400" borderRadius="full" width="100%" height="100%">
          <SearchIcon color="white"></SearchIcon>
        </Flex>
      </InputRightElement>
    </InputGroup>
  );
}

export default Searchbar;
