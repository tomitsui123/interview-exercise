/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  verbose: true,
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
}

export default config
