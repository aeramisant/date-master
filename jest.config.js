process.env.TZ = 'GMT';

module.exports = {
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
