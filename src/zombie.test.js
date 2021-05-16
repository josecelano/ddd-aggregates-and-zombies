import is_dead from './zombie';

test('zombie is dead', () => {
  expect(is_dead()).toBe(true);
});