# Relative Time Converter

**relative-time-converter** is a lightweight utility that converts absolute dates or timestamps into human-friendly, relative time phrases like "2 hours ago" or "in 3 days." Perfect for improving date displays in apps, websites, or dashboards.

## Features

- Convert relative time strings into Date objects.
- Parse time durations from strings.
- Support for multiple time units (seconds, minutes, hours, days, weeks, months, years).
- Lightweight and easy to use.

## Installation

You can install the package using npm:

```bash
npm install relative-time-converter
```

## Usage

Here's a basic example of how to use the Relative Time Converter:

```javascript
import { RelativeTimeConverter } from 'relative-time-converter';

const rtc = new RelativeTimeConverter();

// Convert a relative time string to a Date object
const date = rtc.convert('2 days ago');
console.log(date); // Outputs the Date object for 2 days ago

// Convert a relative time string to milliseconds
const milliseconds = rtc.toMilliseconds('3 hours ago');
console.log(milliseconds); // Outputs the milliseconds for 3 hours ago

// Get the relative time from a Date object
const relativeTime = rtc.fromDate(new Date(Date.now() - 1000 * 60 * 60 * 3)); // 3 hours ago
console.log(relativeTime); // Outputs: "3 hours ago"
```

## API

### `convert(relativeTime: string): Date`

Converts a relative time string into a Date object.

**Parameters:**

- `relativeTime`: A string representing the relative time (e.g., "2 days ago", "in 5 minutes").

**Returns:**

- A Date object representing the calculated time.

### `toMilliseconds(relativeTime: string): number`

Converts a relative time string into milliseconds.

**Parameters:**

- `relativeTime`: A string representing the relative time (e.g., "1 hour ago").

**Returns:**

- The equivalent milliseconds as a number.

### `fromDate(date: Date): string`

Converts a Date object into a relative time string.

**Parameters:**

- `date`: A Date object to be converted.

**Returns:**

- A string representing the relative time (e.g., "3 hours ago").

## Setup on Your Local Machine

To set up the project on your local machine, follow these steps:

Clone the repository:

```bash
git clone git@github.com:evrentan/relative-time-converter.git
```

Navigate to the project directory:

```bash
cd relative-time-converter
```

Install the dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

Test the project:

```bash
npm test
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/yourFeature`).
3. Commit your changes (`git commit -m 'feat(Feature): Add some Feature'`).
4. Push to the branch (`git push origin feature/yourFeature`).
5. Open a pull request.

## License

This project is licensed under the [ISC License](LICENSE).

## About

This library was created to help developers easily convert relative time strings into human-readable formats. If you have any questions or suggestions, feel free to reach out!

## Sponsoring

If you enjoy this project and would like to support its development, please consider sponsoring. Your support helps me continue improving and maintaining the project.

You can sponsor me via:

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20on-GitHub-blue?style=for-the-badge&logo=github)][github-sponsors-url]

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-yellow?style=for-the-badge&logo=buy-me-a-coffee)][buy-me-a-coffee-url]

Thank you for your support!


[github-sponsors-url]: https://github.com/sponsors/evrentan
[buy-me-a-coffee-url]: https://www.buymeacoffee.com/evrentan

