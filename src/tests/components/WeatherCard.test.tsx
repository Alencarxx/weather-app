// src/tests/components/WeatherCard.test.tsx
import React from 'react'
import { render, screen, waitFor } from '../test-utils'
import WeatherCard from '@/components/WeatherCard'
import * as api from '@/services/weatherApi'

describe('<WeatherCard />', () => {
  const fake = { temp:30, description:'Nublado' }

  beforeEach(() => {
    jest.spyOn(api, 'getWeatherByCity').mockResolvedValue(fake)
  })
  afterEach(() => jest.resetAllMocks())

  it('mostra loading', () => {
    render(<WeatherCard city="Paris"/>)
    expect(screen.getByText(/carregando/i)).toBeInTheDocument()
  })

  it('mostra dados no sucesso', async () => {
    render(<WeatherCard city="Paris"/>)
    await waitFor(() => {
      expect(screen.getByText(/30°C/)).toBeInTheDocument()
      expect(screen.getByText(/Nublado/)).toBeInTheDocument()
    })
  })

  it('mostra erro', async () => {
    jest.spyOn(api, 'getWeatherByCity').mockRejectedValue(new Error())
    render(<WeatherCard city="Paris"/>)
    await waitFor(() =>
      expect(screen.getByText(/erro ao buscar/i)).toBeInTheDocument()
    )
  })
})
