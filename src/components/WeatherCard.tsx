// src/components/WeatherCard.tsx
import { Box, Text, Image, Spinner } from '@chakra-ui/react';
import { useWeather } from '@/hooks/useWeather';

interface WeatherCardProps {
  city: string;
}

export default function WeatherCard({ city }: WeatherCardProps) {
  const { data, isLoading, error } = useWeather(city);

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">Erro ao carregar dados</Text>;

  return (
    <Box borderWidth={1} borderRadius="lg" p={4} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold">{data.location.name}</Text>
      <Image src={`https:${data.current.condition.icon}`} alt="Ícone do clima" mx="auto" />
      <Text fontSize="lg">{data.current.condition.text}</Text>
      <Text fontSize="4xl">{data.current.temp_c}°C</Text>
    </Box>
  );
}
