class TimeConverterUtils {
    /**
     * Converts a given date into a relative time string.
     * @param {Date | string} date - The date to convert. Can be a Date object or a date string.
     * @returns {{relativeTime: string, hours: number, seconds: number, months: number, minutes: number, days: number, years: number}} - The relative time string (e.g., "1 year 3 months 5 days ago" or "in 1 year 5 months 3 days").
     */
    convertPastDateTime(date) {
        const now = new Date();
        const targetDate = new Date(date);

        let years = now.getFullYear() - targetDate.getFullYear();
        let months = now.getMonth() - targetDate.getMonth();
        let days = now.getDate() - targetDate.getDate();
        let hours = now.getHours() - targetDate.getHours();
        let minutes = now.getMinutes() - targetDate.getMinutes();
        let seconds = now.getSeconds() - targetDate.getSeconds();

        let relativeTimeParts = this.generateRelativeTime(now,
            years,
            months,
            days,
            hours,
            minutes,seconds
        );

        const relativeTime = relativeTimeParts.join(' ') + ' ago';

        return {
            relativeTime: relativeTime.trim(),
            years,
            months,
            days,
            hours,
            minutes,
            seconds
        }
    }

    /**
     * Converts a given date into a future relative time string.
     * @param {Date | string} date - The date to convert. Can be a Date object or a date string.
     * @returns {{relativeTime: string, hours: number, seconds: number, months: number, minutes: number, days: number, years: number}} - The relative time string (e.g., "in 1 year 3 months 5 days").
     */
    convertFutureDateTime(date) {
        const now = new Date();
        const targetDate = new Date(date);

        let years = targetDate.getFullYear() - now.getFullYear();
        let months = targetDate.getMonth() - now.getMonth();
        let days = targetDate.getDate() - now.getDate();
        let hours = targetDate.getHours() - now.getHours();
        let minutes = targetDate.getMinutes() - now.getMinutes();
        let seconds = targetDate.getSeconds() - now.getSeconds();

        let relativeTimeParts = this.generateRelativeTime(now,
            years,
            months,
            days,
            hours,
            minutes,seconds
        );

        const relativeTime = 'in ' + relativeTimeParts.join(' ');

        return {
            relativeTime: relativeTime.trim(),
            years,
            months,
            days,
            hours,
            minutes,
            seconds
        }
    }

    /**
     * Builds relative time parts based on years, months, and days.
     * @param {number} years - The number of years.
     * @param {number} months - The number of months.
     * @param {number} days - The number of days.
     * @param {number} hours - The number of hours.
     * @param {number} minutes - The number of minutes.
     * @param {number} seconds - The number
     * @returns {string[]} - An array of relative time parts.
     */
    buildRelativeTimeParts(years, months, days, hours, minutes, seconds) {
        let relativeTimeParts = [];

        // Add years
        if (years > 0) {
            relativeTimeParts.push(`${years} year${years > 1 ? 's' : ''}`);
        }
        // Add months
        if (months > 0) {
            relativeTimeParts.push(`${months} month${months > 1 ? 's' : ''}`);
        }
        // Add days
        if (days > 0) {
            relativeTimeParts.push(`${days} day${days > 1 ? 's' : ''}`);
        }
        // Add hours
        if (hours > 0) {
            relativeTimeParts.push(`${hours} hour${hours > 1 ? 's' : ''}`);
        }
        // Add minutes
        if (minutes > 0) {
            relativeTimeParts.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
        }
        // Add seconds
        if (seconds > 0) {
            relativeTimeParts.push(`${seconds} second${seconds > 1 ? 's' : ''}`);
        }

        return relativeTimeParts;
    }

    /**
     * Returns the number of days in a specific month of a specific year.
     * @param {number} year - The year.
     * @param {number} month - The month (0-11).
     * @returns {number} - The number of days in the month.
     */
    getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    /**
     * Generates a relative time string based on the given years, months, days, hours, minutes, and seconds.
     * @param {Date} now - The current date.
     * @param {number} years - The number of years.
     * @param {number} months - The number of months.
     * @param {number} days - The number of days.
     * @param {number} hours - The number of hours.
     * @param {number} minutes - The number of minutes.
     * @param {number} seconds - The number of seconds
     * @returns {string[]} - An array of relative time parts.
     */
    generateRelativeTime(now, years, months, days, hours, minutes, seconds) {
        if (seconds < 0) {
            minutes--;
            seconds += 60;
        }
        if (minutes < 0) {
            hours--;
            minutes += 60;
        }
        if (hours < 0) {
            days--;
            hours += 24;
        }
        if (days < 0) {
            months--;
            days += this.getDaysInMonth(now.getFullYear(), now.getMonth());
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        return this.buildRelativeTimeParts(years, months, days, hours, minutes, seconds);
    }
}

export default TimeConverterUtils;
