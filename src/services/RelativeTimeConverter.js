import TimeConverterUtils from "../utils/TimeConverterUtils.js";

class RelativeTimeConverter {
    /**
     * Converts a given date into a concatenated relative time string.
     * @param {Date | string} date - The date to convert. Can be a Date object or a date string.
     * @returns {{relativeTime: string, hours: number, seconds: number, months: number, minutes: number, days: number, years: number}} - The concatenated relative time string (e.g., "1 year 3 months 5 days ago" or "in 1 year 5 months 3 days").
     * @throws {Error} - A custom error message for an invalid date object.
     */
    convertToRelativeTime(date) {
        const timeConverterUtils = new TimeConverterUtils();

        if (!(date instanceof Date)) {
            throw new Error('Invalid date object!');
        }

        const targetDate = new Date(date);

        if (targetDate < new Date()) {
            return timeConverterUtils.convertPastDateTime(targetDate);
        } else if (targetDate > new Date()) {
            return timeConverterUtils.convertFutureDateTime(targetDate);
        }

        return {
            relativeTime: 'Just Now!',
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
}

export default RelativeTimeConverter;
