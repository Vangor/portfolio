const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 4,
      lines: 4,
      statements: 4,
    },
    // TODO: Gradually increase the thresholds as we add more tests
    // Target specific components that we've already tested well
    'src/components/Hero/**/*.{ts,tsx}': {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
    'src/components/Skills/Skills.tsx': {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
    // Once we add more tests, we can add more specific thresholds
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};

export default config;
