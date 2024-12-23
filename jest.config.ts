export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.svg$': 'jest-svg-transformer',
    '\\.(jpg|jpeg|png|gif)$': 'jest-transform-stub',
  },
};
