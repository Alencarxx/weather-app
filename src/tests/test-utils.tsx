// src/tests/test-utils.tsx
import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'

export function createTestQueryClient() {
  return new QueryClient({ defaultOptions:{ queries:{ retry:false } } })
}

const AllProviders: React.FC<{children:React.ReactNode}> = ({ children }) => (
  <QueryClientProvider client={createTestQueryClient()}>
    <ChakraProvider>{children}</ChakraProvider>
  </QueryClientProvider>
)

export function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: AllProviders, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
