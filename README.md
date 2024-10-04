# Relative Time Converter

![NPM Version](https://img.shields.io/npm/v/relative-time-converter)
![License](https://img.shields.io/npm/l/relative-time-converter)

**relative-time-converter** is a lightweight utility that converts absolute dates or timestamps into human-friendly, relative time phrases like "2 hours ago" or "in 3 days." Perfect for improving date displays in apps, websites, or dashboards.

## Features

- Convert absolute dates into relative time phrases.
- Get the difference between two dates in years, months, days, hours, minutes, and seconds.
- Display relative time strings for past and future dates.
- Error handling for invalid date objects.

## Installation

You can install the package using npm:

```bash
npm install relative-time-converter
```

## Usage

Here's a basic example of how to use the Relative Time Converter:

```javascript
import { RelativeTimeConverter } from 'relative-time-converter';

const converter = new RelativeTimeConverter();

try {
    const pastDate = new Date('2023-10-01T10:00:00');
    const futureDate = new Date('2025-10-01T10:00:00');
    const invalidDate = 'invalid date string';

    const pastResult = converter.convertToRelativeTime(pastDate);
    console.log(pastResult);
    // Sample output: 
    // {
    //   relativeTime: "1 year 1 month 3 days ago",
    //   years: 1,
    //   months: 1,
    //   days: 3,
    //   hours: 0,
    //   minutes: 0,
    //   seconds: 0
    // }

    const futureResult = converter.convertToRelativeTime(futureDate);
    console.log(futureResult);
    // Sample output: 
    // {
    //   relativeTime: "in 1 year 1 month",
    //   years: 1,
    //   months: 1,
    //   days: 0,
    //   hours: 0,
    //   minutes: 0,
    //   seconds: 0
    // }
} catch (error) {
    console.error(error.message);
}

```

## Method

### `convertToRelativeTime(date: Date): RelativeTimeResult`

Converts a Date object into a relative time object.

**Parameters:**

- `date`: A Date object to be converted.

**Returns:**

- A JSON object containing the relative time string and the difference between the input date and the current date in years, months, days, hours, minutes, and seconds or throws an error if the input is not a valid Date object.

#### Example Responses

**Example For a Past Date:**

```json
{
    "relativeTime": "1 year 3 months 5 days ago",
        "years": 1,
        "months": 3,
        "days": 5,
        "hours": 0,
        "minutes": 0,
        "seconds": 0
}
```

**Example For a Future Date:**

```json
{
  "relativeTime": "in 2 years 5 months 3 days",
  "years": 2,
  "months": 5,
  "days": 3,
  "hours": 0,
  "minutes": 0,
  "seconds": 0
}
```

***Example For Now:***

```json
{
  "relativeTime": "Just Now!",
  "years": 0,
  "months": 0,
  "days": 0,
  "hours": 0,
  "minutes": 0,
  "seconds": 0
}
```

#### Error Handling

If the input is not a valid Date object, the method will throw an error.

```javascript
try {
    converter.convertToRelativeTime("invalid date string");
} catch (error) {
    console.error(error.message); // Output: "Invalid date object!"
}
```

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

This library was created to help developers display human-friendly relative time phrases in their applications. If you have any questions or suggestions, feel free to reach out!

## Sponsoring

If you enjoy this project and would like to support its development, please consider sponsoring. Your support helps me continue improving and maintaining the project.

You can sponsor me via:

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20on-GitHub-blue?style=for-the-badge&logo=github)][github-sponsors-url]

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-yellow?style=for-the-badge&logo=buy-me-a-coffee)][buy-me-a-coffee-url]

Thank you for your support!


[github-sponsors-url]: https://github.com/sponsors/evrentan
[buy-me-a-coffee-url]: https://www.buymeacoffee.com/evrentan
