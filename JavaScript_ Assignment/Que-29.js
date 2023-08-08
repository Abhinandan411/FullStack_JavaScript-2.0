// Question:29------
// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.


// Solution:--
const prompt = require("prompt-sync")({ sigint: true });

const printExtension = () => {
  const string = prompt("Enter the file name : ");
  const arr = string.split(".");
  console.log(arr[arr.length - 1]);
};

printExtension();