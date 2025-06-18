# Weather App Next.js

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE) [![Next.js](https://img.shields.io/badge/Next.js-15-blue?logo=next.js)](https://nextjs.org/) [![React Query](https://img.shields.io/badge/React%20Query-v5-orange?logo=tanstack)](https://tanstack.com/query/) [![Chakra UI](https://img.shields.io/badge/Chakra%20UI-2.8.2-blue?logo=chakraui)](https://chakra-ui.com/)

> Aplicação de previsão do tempo construída com Next.js, React Query e Chakra UI.

<br>

![Preview da aplicação](https://github.com/user-attachments/assets/eae54a60-f866-4f45-916b-87fb2e4d4a5f)

## Sumário

- [Visão Geral](#visão-geral)  
- [Demonstração](#demonstração)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias](#tecnologias)  
- [Pré-requisitos](#pré-requisitos)  
- [Instalação](#instalação)  
- [Configuração](#configuração)  
- [Uso](#uso)  
- [Estrutura de Pastas](#estrutura-de-pastas)  
- [Testes](#testes)  
- [Contribuição](#contribuição)  
- [Licença](#licença)  
- [Autor](#autor)  

## Visão Geral

Este projeto demonstra:  
- Componentização e organização com Next.js (App Router)  
- Gerenciamento de estado de dados de API usando React Query  
- Estilização e temas com Chakra UI  
- Padrões de código, testes unitários e mocks de API  

## Demonstração

1. Clone o repositório:  
   ```bash
   git clone https://github.com/alencarxx/weather-app-nextjs.git
   ```
2. Entre na pasta do projeto:  
   ```bash
   cd weather-app-nextjs
   ```
3. Instale as dependências e execute em modo de desenvolvimento:  
   ```bash
   npm install
   npm run dev
   ```
4. Acesse em seu navegador:  
   ```
   http://localhost:3000
   ```

## Funcionalidades

- Busca de previsão do tempo por cidade  
- Exibição de temperatura atual e descrição do clima  
- Indicadores de carregamento, sucesso e erro  
- Responsivo para dispositivos móveis  

## Tecnologias

- Next.js 15  
- React 18 + TypeScript  
- Chakra UI  
- React Query (@tanstack/react-query v5)  
- Jest + React Testing Library  
- TS-Jest  

## Pré-requisitos

- Node.js ≥ 18  
- npm ou yarn  

## Instalação

```bash
git clone https://github.com/alencarxx/weather-app-nextjs.git
cd weather-app-nextjs
npm install   # ou yarn install
```

## Configuração

1. Crie um arquivo `.env.local` na raiz do projeto com sua chave de API de clima (p.ex. OpenWeather):  
   ```env
   NEXT_PUBLIC_WEATHER_API_KEY=SuaChaveAqui
   ```
2. Ajuste variáveis de ambiente conforme necessário.

## Uso

1. Inicie o servidor de desenvolvimento:  
   ```bash
   npm run dev
   ```
2. No campo de busca, digite o nome de uma cidade e pressione Enter.  
3. Veja a previsão atual e nos próximos dias.

## Estrutura de Pastas

```text
├── app/                   # Roteamento, layouts e páginas (Next.js App Router)
├── components/            # Componentes React reutilizáveis
├── hooks/                 # Hooks personalizados (p.ex. useWeather)
├── services/              # Integração com API de clima
├── src/                   # Código-fonte principal
├── tests/                 # Testes unitários e utilitários de teste
├── public/                # Arquivos estáticos (imagens, ícones)
├── jest.config.js         # Configuração do Jest + TS-Jest
├── jest.setup.ts          # Setup do Jest (import jest-dom)
├── tsconfig.json          # Configuração TypeScript
└── README.md              # Documentação do projeto
```

## Testes

- Executar todos os testes:  
  ```bash
  npm run test
  ```
- Cobertura de testes:  
  ```bash
  npm run test:coverage
  ```

## Contribuição

1. Faça um _fork_ deste repositório.  
2. Crie uma branch para sua feature:  
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Realize suas alterações e crie commits descritivos.  
4. Faça o _push_ para sua branch:  
   ```bash
   git push origin feature/nome-da-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licen­ciado sob a [MIT License](./LICENSE).

## Autor

**Alencar Porto**  
- GitHub: [@alencarxx](https://github.com/alencarxx)  
- LinkedIn: [linkedin.com/in/alencarxx](https://linkedin.com/in/alencarxx)
