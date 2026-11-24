const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('./app');

test('greet returns the expected message', () => {
  assert.strictEqual(greet('DevOps'), 'Hello, DevOps! Deployed via GitHub Actions.');
});
