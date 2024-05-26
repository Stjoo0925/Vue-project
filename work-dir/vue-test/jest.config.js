const { resolve } = require('path');

module.exports = {
  // Jest 구성 옵션 설정
  moduleNameMapper: {
    '^@/(.*)$': resolve(__dirname, 'src/$1'),
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/assets/fileMock.js',
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testEnvironment: 'jest-environment-jsdom',
  
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 }, // Vue가 찾아지지 않는 경우 추가해볼것
};
