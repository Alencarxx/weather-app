# Weather App Next.js

![image](https://github.com/user-attachments/assets/eae54a60-f866-4f45-916b-87fb2e4d4a5f)


Aplicação de previsão do tempo desenvolvida em Next.js, com React Query e Chakra UI.  
Permite consultar a meteorologia de qualquer cidade, consumindo uma API pública.

## Sumário

- [Visão Geral](#visão-geral)  
- [Demonstração](#demonstração)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias](#tecnologias)  
- [Instalação](#instalação)  
- [Uso](#uso)  
- [Estrutura de Pastas](#estrutura-de-pastas)  
- [Testes](#testes)  
- [Contribuição](#contribuição)  
- [Licença](#licença)  
- [Autor](#autor)

## Visão Geral

Este projeto exemplifica boas práticas em Next.js:

- Componentização e reutilização  
- Consumo de API com React Query  
- Estilização com Chakra UI  
- Organização de código e testes unitários

## Demonstração

1. Clone este repositório  
2. Instale dependências e rode em localhost  
   ```bash
   git clone https://github.com/alencarxx/weather-app-nextjs.git
   cd weather-app-nextjs
   npm install
   npm run dev

3. Acesse http://localhost:3000

Funcionalidades
Consulta de previsão por cidade


Tecnologias
Next.js 15
React 18
TypeScript
Chakra UI
React Query (@tanstack/react-query v5)
Jest + React Testing Library

Instalação
Pré-requisitos:

Node.js ≥ 18
npm ou yarn
Passos:

git clone https://github.com/alencarxx/weather-app-nextjs.git
cd weather-app-nextjs
npm install (ou yarn install)
Criar um arquivo .env.local com sua chave de API (se necessário)
npm run dev (ou yarn dev)
Uso
Abra http://localhost:3000
Digite o nome da cidade no campo de busca
Veja a previsão atual e nos próximos dias

Estrutura de Pastas
├── app/               # Roteamento e layout (Next.js App Router)
├── components/        # Componentes reutilizáveis
├── hooks/             # Hooks personalizados (useWeather)
├── services/          # Funções de integração com API
├── src/               # Código-fonte (opcional)
├── tests/             # Testes unitários
├── public/            # Arquivos estáticos
├── .gitignore
├── package.json
└── README.md

Contribuição
Contribuições são bem-vindas!

Fork este repositório
Crie uma branch: git checkout -b feature/nova-funcionalidade
Commit suas alterações: git commit -m "feat: descrição da mudança"
Push para a branch: git push origin feature/nova-funcionalidade
Abra um Pull Request
Licença
Este projeto está sob a licença MIT. Veja LICENSE para mais detalhes.

Autor
Alencar Porto

GitHub: https://github.com/alencarxx
Email: alencarporto2008@gmail.com

