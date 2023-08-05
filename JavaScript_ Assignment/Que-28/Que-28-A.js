// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	


const prompt = require("prompt-sync")({ sigint: true });

const trianglePattern = () => {
    const input= prompt("Enter the height of the triangle: ")

    for (let i = 1; i <= input; i++){
        for (let j = 1; j <= i; j++) {
          document.write("*");
        }
       document.write("</br>");
    }

}

trianglePattern()