const { leadingZeroes, tokens, lang } = require('../unitTestingTask');
const unitTestingTask = require('../unitTestingTask');
const assert = require('assert');

const RealDate = Date;

beforeAll(() => {
  global.Date = class extends Date {
    constructor(date) {
      if (date) {
        // If the constructor is called with arguments, pass them to the original Date constructor
        return super(date);
      }
      // If no arguments are provided (i.e., Date is called without arguments), return a fixed date
      return new RealDate('2024-01-01T00:00:00Z');
    }
  };
});

afterAll(() => {
  global.Date = RealDate;
});

describe('leadingZeroes', () => {
  test('should handle numbers already at or above the specified length', () => {
    const result = leadingZeroes(123, 2);
    expect(result).toBe('123');
  });
});

describe('unitTestingTask - languages', () => {
  test('should set and get the current language', () => {
    const defaultLang = lang(); // Save the default language
    expect(lang()).toBe('en');
    // Reset the language to the default after the test
    lang(defaultLang);
  });
  beforeEach(() => {
    unitTestingTask.lang('en');
  });

  afterAll(() => {
    unitTestingTask.lang('en');
  });

  it('Should set new language correctly (be)', () => {
    const currentLanguage = unitTestingTask.lang('be');
    expect(currentLanguage).toBe('be');
  });
});

describe('Registering Custom Format', () => {
  it('Should register and format a custom date format', () => {
    const date = new Date('2023-01-01T12:34:56');
    const customFormat = 'YYYY-MM-dd HH:mm:ss';

    unitTestingTask.register('CustomFormat', customFormat);
    expect(unitTestingTask.formatters()).toContain('CustomFormat');

    const formattedDate = unitTestingTask('CustomFormat', date);
    expect(formattedDate).toBe('2023-01-01 12:34:56');
  });
});

describe('tokens', () => {
  const mockDate = new Date('2022-01-28T12:34:56');

  test.each`
    token     | input       | expected
    ${'M'}    | ${mockDate} | ${1}
    ${'d'}    | ${mockDate} | ${28}
    ${'H'}    | ${mockDate} | ${12}
    ${'h'}    | ${mockDate} | ${12}
    ${'m'}    | ${mockDate} | ${34}
    ${'s'}    | ${mockDate} | ${56}
    ${'MMMM'} | ${mockDate} | ${'January'}
    ${'MMM'}  | ${mockDate} | ${'Jan'}
    ${'D'}    | ${mockDate} | ${'Fr'}
    ${'hh'}   | ${mockDate} | ${'12'}
    ${'mm'}   | ${mockDate} | ${'34'}
    ${'ss'}   | ${mockDate} | ${'56'}
    ${'ff'}   | ${mockDate} | ${'000'}
    ${'f'}    | ${mockDate} | ${0}
    ${'a'}    | ${mockDate} | ${'pm'}
    ${'Z'}    | ${mockDate} | ${'+00:00'}
  `('should format $token', ({ token, input, expected }) => {
    const result = tokens[token](input);
    expect(result).toBe(expected);
  });
});

describe('unitTestingTask', () => {
  // Line 180
  test('should throw TypeError when format is not a string', () => {
    expect(() => unitTestingTask(123)).toThrow(TypeError);
  });
  // Line 195
  test('should throw error when invalid date is provided', () => {
    expect(() => unitTestingTask('YYYY-MM-DD', {})).toThrow();
  });
});

describe('unitTestingTask', () => {
  // Test for the case when date is not provided
  test('should handle when date is not provided', () => {
    const date = new Date();
    expect(unitTestingTask('YYYY')).toBe(date.getFullYear().toString());
  });
});
describe('unitTestingTask.noConflict', () => {
  it('should restore previous value of window.unitTestingTask', () => {
    const original = window.unitTestingTask;
    window.unitTestingTask = 'test';
    const result = unitTestingTask.noConflict();
    assert.strictEqual(window.unitTestingTask, original);
    assert.strictEqual(result, unitTestingTask);
  });
});
