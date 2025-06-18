// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',          // ou 'jest-environment-jsdom'
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },  
}