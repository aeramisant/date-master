// Import the unitTestingTask library
const unitTestingTask = require('../unitTestingTask');
require('../lang/ukr'); // Import the Ukrainian language file

describe('Ukrainian Language', () => {
  // Test for the 'months' function
  test('should format month names in nominative case', () => {
    const date = '2022-01-12T12:34:56';
    const formattedMonth = unitTestingTask('MMMM', date);
    expect(formattedMonth).toBe('січень');
  });

  test('should format month names in accusative case', () => {
    const date = '2022-01-12T12:34:56';
    const formattedMonth = unitTestingTask('dd MMMM', date);
    expect(formattedMonth.split(' ')[1]).toBe('січня');
  });

  // Test for the 'monthsShort' function
  test('should format short month names', () => {
    const date = '2022-01-12T12:34:56';
    const formattedMonthShort = unitTestingTask('MMM', date);
    expect(formattedMonthShort).toBe('січ');
  });

  // Test for the 'weekdays' function
  test('should format weekdays', () => {
    const date = '2022-01-12T12:34:56';
    const formattedWeekday = unitTestingTask('DDD', date);
    expect(formattedWeekday).toBe('середа');
  });

  // Test for the 'weekdaysShort' function
  test('should format short weekdays', () => {
    const date = '2022-01-12T12:34:56';
    const formattedWeekdayShort = unitTestingTask('DD', date);
    expect(formattedWeekdayShort).toBe('ср');
  });

  // Test for the 'meridiem' function
  test('should format meridiem', () => {
    const nightDate = '2024-01-11T01:15:34';
    const morningDate = '2024-01-12T10:15:34';
    const dayDate = '2024-01-12T14:15:34';
    const eveningDate = '2022-01-12T18:34:56';
    const nightMeridiem = unitTestingTask('A', nightDate);
    const morningMeridiem = unitTestingTask('A', morningDate);
    const dayMeridiem = unitTestingTask('A', dayDate);
    const eveningMeridiem = unitTestingTask('A', eveningDate);
    expect(nightMeridiem).toBe('ночі');
    expect(morningMeridiem).toBe('ранку');
    expect(dayMeridiem).toBe('дня');
    expect(eveningMeridiem).toBe('вечора');
  });
});
