// 18. Write a program which tells the number of days in a month, now consider leap year.

const prompt = require("prompt-sync")({ sigint: true });

let getDaysInMonth = () => {
  const month = prompt("Enter the month in numbers: ");
  const year = prompt("Enter the year: ");
  return new Date(year, month, 0).getDate();
};

console.log(getDaysInMonth());