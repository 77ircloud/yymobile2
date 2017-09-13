const libDir = process.env.LIB_DIR;

const transformIgnorePatterns = [
  '/dist/',
  'node_modules\/[^/]+?\/(?!(es|node_modules)\/)', // Ignore modules without es dir
];

module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'md',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '_site',
    'site',
    'components'
  ],
  transform: {
    '\\.tsx?$': './antd-tools/lib/jest/codePreprocessor',
    '\\.js$': './antd-tools/lib/jest/codePreprocessor',
    '\\.md$': './antd-tools/lib/jest/demoPreprocessor',
  },
  testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
  collectCoverageFrom: [
    'yymobile/**/*.{ts,tsx}',
    '!yymobile/**/*.native.{ts,tsx}',
    '!yymobile/*/style/*.{ts,tsx}',
  ],
  transformIgnorePatterns,
  testEnvironment: 'jsdom',
};
