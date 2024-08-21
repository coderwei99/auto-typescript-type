// sum.test.js
import { expect, test } from 'vitest';
import { log } from '../src/index';

test('test vitest', () => {
  expect(log()).toBe(2);
});