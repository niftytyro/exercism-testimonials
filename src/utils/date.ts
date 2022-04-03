import dayjs from "dayjs";

export const formatDate = (value: string) => {
  const date = dayjs(value);
  const now = dayjs();
  const secsDiff = now.diff(date, "seconds");
  const minsDiff = now.diff(date, "minutes");
  const hoursDiff = now.diff(date, "hours");
  const dayDiff = now.diff(date, "days");
  const monthDiff = now.diff(date, "months");
  const yearDiff = now.diff(date, "years");

  if (yearDiff === 1) {
    return "a year ago";
  }
  if (yearDiff > 1) {
    return `${yearDiff} years ago`;
  }

  if (monthDiff === 1) {
    return "a month ago";
  }
  if (monthDiff > 1) {
    return `${monthDiff} months ago`;
  }

  if (dayDiff === 1) {
    return "a day ago";
  }
  if (dayDiff > 7) {
    const weeks = Math.floor(dayDiff / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  }
  if (dayDiff > 1) {
    return `${dayDiff} days ago`;
  }

  if (hoursDiff === 1) {
    return "an hour ago";
  }
  if (hoursDiff > 1) {
    return `${hoursDiff} hours ago`;
  }

  if (minsDiff === 1) {
    return "a minute ago";
  }
  if (minsDiff > 0) {
    return `${minsDiff} minutes ago`;
  }

  if (secsDiff > 0) {
    return "few seconds ago";
  }
  return "now";
};
