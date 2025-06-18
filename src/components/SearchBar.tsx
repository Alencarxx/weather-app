'use client';

import {
  Box,
  Input,
  IconButton,
  Flex
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <Box mb={4}>
      <Flex gap={2}>
        <Input
          placeholder="Digite uma cidade"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        />
        <IconButton
          aria-label="Buscar"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Flex>
    </Box>
  );
}