module.exports = {
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tests/tsconfig.json',
    },
  },
  testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.tsx'],
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src'],
};
