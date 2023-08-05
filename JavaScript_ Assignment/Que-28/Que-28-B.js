// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

const prompt = require("prompt-sync")({ sigint: true });

const squarePattern = () => {
  const length = prompt("Enter the height or width of the square: ");
  for (let i = 1; i <= length; i++) {
    for(let j = 1 ; j<=length ; j++){
        document.write("*");
    }
    document.write("\n");
  }
};
squarePattern();