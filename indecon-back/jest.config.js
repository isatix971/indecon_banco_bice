module.exports = {
    roots: ['<rootDir>__test__/'],
    preset: 'ts-jest',
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(__test__/*.test.ts|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/dist/',
      '__test__',
      '/src/inputs/',
      '/src/models/',
      '/src/gateway/'
    ],
    coverageThreshold: {
      global: {
        branches: 0,
        functions: 60,
        lines: 60,
        statements: 60
      }
    }
    
  }
  