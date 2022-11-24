const palindromes = function (arr1) {
  let re = /[^A-Za-z0–9]/g;
  const lowerCase = arr1.toLowerCase().replace(re, "");
  const reverse = lowerCase.split("").reverse().join("");
  return lowerCase === reverse;
};
// Do not edit below this line
module.exports = palindromes;
