module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      "\\.[jt]sx?$": "babel-jest",
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}