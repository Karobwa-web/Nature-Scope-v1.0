const { test, describe } = require('node:test');
const assert = require('node:assert');
const app = require('../src/app');

describe('API Health Check Test', () => {
  test('app exports express application instance', () => {
    assert.strictEqual(typeof app, 'function');
  });
});
