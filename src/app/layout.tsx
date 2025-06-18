// app/layout.tsx
'use client'

import { ReactNode, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {  
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 1000 * 60 * 5,
      },
    },
  }))

  return (
    <html lang="pt-BR">
      <body>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}