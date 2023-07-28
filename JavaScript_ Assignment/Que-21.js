// Question:21-------

// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


// Solution:--

const countries = ["India", "Romania", "Ethiopia", "Netherland", "Sweden", "Australia"];

if (countries.includes("Ethiopia")) {
  const index = countries.indexOf("Ethiopia");
  console.log(countries[index].toUpperCase());
} else {
  countries.push("Ethiopia");
  console.log(countries);
}