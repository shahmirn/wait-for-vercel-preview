import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./test/support/setupTests.ts'],
  collectCoverageFrom: ['action.ts', 'index.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(msw|@mswjs|until-async)/)',
  ],
  moduleFileExtensions: ['ts', 'js', 'json'],
};

export default config;

