const ftoc = function (x) {
  x = (x - 32) * (5 / 9);
  let rounded = Math.round(x * 10) / 10;
  return rounded;
};

const ctof = function (x) {
  x = x * (9 / 5) + 32;
  let rounded = Math.round(x * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
