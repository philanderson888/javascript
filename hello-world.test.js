const { execSync } = require('child_process');

test('prints hello world', () => {
  const output = execSync('node hello-world.js').toString().trim();
  expect(output).toBe('hello world');
});
