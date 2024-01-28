describe('lang/pl.js', () => {
  test('should determine the noun case based on the format', () => {
    const format1 = 'dd MMMM';
    const result1 = determineNounCase(format1);
    expect(result1).toBe('accusative');

    const format2 = 'd MMM';
    const result2 = determineNounCase(format2);
    expect(result2).toBe('nominative');
  });
});

function determineNounCase(format) {
  return /dd?\s*MMMM?/.test(format) ? 'accusative' : 'nominative';
}
