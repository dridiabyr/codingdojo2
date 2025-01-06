
import chalk from 'chalk';
import { formatISODate, timeAgo, fullDate, shortDate } from './utils/formatDate.js';

const dates = [
  '2023-01-01T12:34:56Z',
  '2023-08-15T09:25:00Z',
  '2022-11-10T18:05:30Z',
  '2021-04-22T14:15:00Z',
  '2024-03-05T16:22:10Z',
];

dates.forEach((date) => {
  console.log(chalk.green('ISO Date:') + ' ' + date);
  console.log(chalk.blue('Formatted Date:') + ' ' + formatISODate(date));
  console.log(chalk.yellow('Time Ago:') + ' ' + timeAgo(date));
  console.log(chalk.magenta('Full Date:') + ' ' + fullDate(date));
  console.log(chalk.cyan('Short Date:') + ' ' + shortDate(date));
  console.log('------------------------');
});
