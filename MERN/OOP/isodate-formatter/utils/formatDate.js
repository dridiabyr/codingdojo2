// utils/formatDate.js
import dayjs from 'dayjs';

export function formatISODate(isoDate) {
  return dayjs(isoDate).format('MMMM D, YYYY, h:mm:ss A [UTC]');
}

export function timeAgo(isoDate) {
  return dayjs(isoDate).fromNow();
}

export function fullDate(isoDate) {
  return dayjs(isoDate).format('dddd, MMMM D, YYYY');
}

export function shortDate(isoDate) {
  return dayjs(isoDate).format('MM/DD/YYYY');
}
