// src/services/weatherApi.ts
import axios from 'axios';

const API_KEY = 'e17802fb115d4ca798e152406251706';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

export const getWeatherByCity = async (city: string) => {
  const res = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: city,
      lang: 'pt',
    },
  });
  return res.data;
};
