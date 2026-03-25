/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],

  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],

  collectCoverageFrom: [
    'src/**/*.js',
    'gendiff.js',
    '!**/__tests__/**',
    '!**/node_modules/**',
    '!coverage/**',
  ],

  coveragePathIgnorePatterns: ['/node_modules/'],
}
