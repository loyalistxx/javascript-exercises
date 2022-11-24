const removeFromArray = function (...args) {
  const arr1 = args[0];
  const newArr1 = [];
  arr1.forEach((item) => {
    if (!args.includes(item)) {
      newArr1.push(item);
    }
  });
  return newArr1;
};

/*const removeFromArray = function (arr1, num1, num2, num3, num4, num5) {
  arr1.forEach(
    (revolver = () => {
      const index1 = arr1.indexOf(num1);
      const index2 = arr1.indexOf(num2);
      const index3 = arr1.indexOf(num3);
      const index4 = arr1.indexOf(num4);
      const index5 = arr1.indexOf(num5);
      if (index1 > -1) {
        arr1.splice(index1, 1);
      }
      if (index2 > -1) {
        arr1.splice(index2, 1);
      }
      if (index3 > -1) {
        arr1.splice(index3, 1);
      }
      if (index4 > -1) {
        arr1.splice(index4, 1);
      }
      if (index5 > -1) {
        arr1.splice(index5, 1);
      }
    })
  );
  return arr1;
};*/

// Do not edit below this line
module.exports = removeFromArray;
