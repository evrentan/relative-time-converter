import RelativeTimeConverter from '../src/services/RelativeTimeConverter.js';

describe('RelativeTimeConverter', () => {
    let converter;

    beforeEach(() => {
        converter = new RelativeTimeConverter();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('should return "just now" for the current date', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2024-10-04T10:00:00Z'));
        expect(converter.convertToRelativeTime(new Date()).relativeTime).toBe('Just Now!');
    });

    test('should return "1 year ago" for a date 1 year in the past', () => {
        const pastDate = new Date();
        pastDate.setFullYear(pastDate.getFullYear() - 1);
        expect(converter.convertToRelativeTime(pastDate).relativeTime).toBe('1 year ago');
    });

    test('should return "1 month ago" for a date 1 month in the past', () => {
        const pastDate = new Date();
        pastDate.setMonth(pastDate.getMonth() - 1);
        expect(converter.convertToRelativeTime(pastDate).relativeTime).toBe('1 month ago');
    });

    test('should return "1 day ago" for a date 1 day in the past', () => {
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 1);
        expect(converter.convertToRelativeTime(pastDate).relativeTime).toBe('1 day ago');
    });

    test('should return "1 year 1 month ago" for a date 1 year and 1 month in the past', () => {
        const pastDate = new Date();
        pastDate.setFullYear(pastDate.getFullYear() - 1);
        pastDate.setMonth(pastDate.getMonth() - 1);
        expect(converter.convertToRelativeTime(pastDate).relativeTime).toBe('1 year 1 month ago');
    });

    test('should return "2 years 2 months ago" for a date 2 years and 2 months in the past', () => {
        const pastDate = new Date();
        pastDate.setFullYear(pastDate.getFullYear() - 2);
        pastDate.setMonth(pastDate.getMonth() - 2);
        expect(converter.convertToRelativeTime(pastDate).relativeTime).toBe('2 years 2 months ago');
    });

    test('should return "1 year 1 month 1 day ago" for a date 1 year, 1 month, and 1 day in the past', () => {
        const pastDate = new Date();
        pastDate.setFullYear(pastDate.getFullYear() - 1);
        pastDate.setMonth(pastDate.getMonth() - 1);
        pastDate.setDate(pastDate.getDate() - 1);
        expect(converter.convertToRelativeTime(pastDate).relativeTime).toBe('1 year 1 month 1 day ago');
    });

    test('should return "1 year in the future" for a date 1 year in the future', () => {
        const futureDate = new Date();
        futureDate.setFullYear(futureDate.getFullYear() + 1);
        expect(converter.convertToRelativeTime(futureDate).relativeTime).toBe('in 1 year');
    });

    test('should return "1 month in the future" for a date 1 month in the future', () => {
        const futureDate = new Date();
        futureDate.setMonth(futureDate.getMonth() + 1);
        expect(converter.convertToRelativeTime(futureDate).relativeTime).toBe('in 1 month');
    });

    test('should return "1 day in the future" for a date 1 day in the future', () => {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 1);
        expect(converter.convertToRelativeTime(futureDate).relativeTime).toBe('in 1 day');
    });

    test('should return "1 year 1 month in the future" for a date 1 year and 1 month in the future', () => {
        const futureDate = new Date();
        futureDate.setFullYear(futureDate.getFullYear() + 1);
        futureDate.setMonth(futureDate.getMonth() + 1);
        expect(converter.convertToRelativeTime(futureDate).relativeTime).toBe('in 1 year 1 month');
    });

    test('should handle leap years correctly', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2020-02-29T00:00:00Z'));
        expect(converter.convertToRelativeTime(new Date('2024-10-04T00:00:00')).relativeTime).toBe('in 4 years 7 months 3 days 21 hours');
    });

    test('should handle different month lengths', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2024-01-01T00:00:00Z'));
        const endOfMonthDate = new Date('2024-01-31T00:00:00');
        const startOfNextMonthDate = new Date('2024-02-01T00:00:00');
        const startOfMarchDate = new Date('2024-03-01T00:00:00');
        expect(converter.convertToRelativeTime(endOfMonthDate).relativeTime).toContain('in 29 days 21 hours');
        expect(converter.convertToRelativeTime(startOfNextMonthDate).relativeTime).toContain('in 30 days 21 hours');
        expect(converter.convertToRelativeTime(startOfMarchDate).relativeTime).toContain('in 1 month 30 days 21 hours');
    });

    test('should handle seconds correctly', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2024-10-04T10:00:00Z'));
        const pastDate = new Date();
        pastDate.setSeconds(pastDate.getSeconds() - 59);
        expect(converter.convertToRelativeTime(pastDate).relativeTime).toBe('59 seconds ago');

        const futureDate = new Date();
        futureDate.setSeconds(futureDate.getSeconds() + 59);
        expect(converter.convertToRelativeTime(futureDate).relativeTime).toBe('in 59 seconds');
    });

    test('should handle hours correctly', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2024-10-04T10:00:00Z'));
        const pastDate = new Date();
        pastDate.setHours(pastDate.getHours() - 1);
        expect(converter.convertToRelativeTime(pastDate).relativeTime).toBe('1 hour ago');

        const futureDate = new Date();
        futureDate.setHours(futureDate.getHours() + 1);
        expect(converter.convertToRelativeTime(futureDate).relativeTime).toBe('in 1 hour');
    });

    test('should handle minute and second overlap correctly', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2024-10-04T10:00:00Z'));
        const pastDate = new Date();
        pastDate.setMinutes(pastDate.getMinutes() - 1);
        pastDate.setSeconds(pastDate.getSeconds() + 30);
        expect(converter.convertToRelativeTime(pastDate).relativeTime).toBe('30 seconds ago');

        const futureDate = new Date();
        futureDate.setMinutes(futureDate.getMinutes() + 1);
        futureDate.setSeconds(futureDate.getSeconds() - 30);
        expect(converter.convertToRelativeTime(futureDate).relativeTime).toBe('in 30 seconds');
    });

    test('should handle negative month lengths correctly in the past', () => {
        const pastDate = new Date('2023-02-28T00:00:00Z');
        jest.useFakeTimers('modern').setSystemTime(new Date('2024-03-01T00:00:00Z'));
        expect(converter.convertToRelativeTime(pastDate).relativeTime).toBe('1 year 4 days ago');
    });

    test('should handle leap years correctly in the future', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2023-02-28T00:00:00Z'));
        const futureDate = new Date('2024-02-29T00:00:00Z');
        expect(converter.convertToRelativeTime(futureDate).relativeTime).toBe('in 1 year 1 day');
    });

    test('should handle edge case of just after midnight', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2024-10-04T00:00:00Z'));
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 1);
        expect(converter.convertToRelativeTime(pastDate).relativeTime).toBe('1 day ago');

        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 1);
        expect(converter.convertToRelativeTime(futureDate).relativeTime).toBe('in 1 day');
    });

    test('should return empty string for invalid date input', () => {
        expect(() => converter.convertToRelativeTime(null)).toThrow('Invalid date object!');
        expect(() => converter.convertToRelativeTime('Invalid Date')).toThrow('Invalid date object!');
    });
});
