import not from '../src/index';

describe('blah', () => {
  it('works', () => {
    expect(not(false)).toBe(true);
  });
  it('works with numbers', () => {
    expect(not(5)).toBe(false);
  });
  it('works with strings', () => {
    expect(not('')).toBe(true);
  });
});
