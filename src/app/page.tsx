'use client';

import React, { useState } from 'react';
import SearchBar from '../components/SearchBar'; 
import WeatherCard from '../components/WeatherCard'; 
import { Box, Heading } from '@chakra-ui/react';

const Page: React.FC = () => {
  const [city, setCity] = useState('São Paulo');

  return (
    <Box p={4} maxW="600px" mx="auto">
      <Heading mb={4}>Previsão do Tempo</Heading>
      <SearchBar onSearch={setCity} />
      <WeatherCard city={city} />
    </Box>
  );
};

export default Page;
