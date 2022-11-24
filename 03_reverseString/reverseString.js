const reverseString = function (string) {
  let text = string;
  let arr1 = text.split("");
  let result = arr1.reverse();
  let stringResult = result.join("");
  return stringResult;
};

// Do not edit below this line
module.exports = reverseString;
