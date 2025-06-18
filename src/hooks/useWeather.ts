// src/hooks/useWeather.ts
import { useQuery } from '@tanstack/react-query'
import { getWeatherByCity } from '@/services/weatherApi'

export const useWeather = (city: string) => {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: () => getWeatherByCity(city),
    retry: false,
    staleTime: 1000 * 60 * 5,
  })
}