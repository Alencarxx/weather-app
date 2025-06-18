// src/tests/hooks/useWeather.test.tsx
import { renderHook, waitFor } from '@testing-library/react'
import { useWeather } from '@/hooks/useWeather'
import * as api from '@/services/weatherApi'
import { createTestQueryClient } from '../test-utils'
import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

// wrapper como React.FC para JSX
const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={createTestQueryClient()}>
    {children}
  </QueryClientProvider>
)

describe('useWeather', () => {
  const fake = { temp: 25, description: 'Ensolarado' }

  beforeEach(() => {
    jest.spyOn(api, 'getWeatherByCity').mockResolvedValue(fake)
  })
  afterEach(() => jest.resetAllMocks())

  it('deve retornar dados após sucesso', async () => {
    const { result } = renderHook(() => useWeather('SP'), { wrapper })
    expect(result.current.isLoading).toBe(true)

    await waitFor(() =>
      expect(result.current.isSuccess).toBe(true)
    )

    expect(result.current.data).toEqual(fake)
    expect(api.getWeatherByCity).toHaveBeenCalledWith('SP')
  })

  it('deve falhar corretamente', async () => {
    jest.spyOn(api, 'getWeatherByCity').mockRejectedValue(new Error('x'))
    const { result } = renderHook(() => useWeather('RJ'), { wrapper })

    await waitFor(() =>
      expect(result.current.isError).toBe(true)
    )

    expect(result.current.error).toBeInstanceOf(Error)
  })
})
