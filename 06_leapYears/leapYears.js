const leapYears = function (year) {
  let zero = 0;
  if (year % 4 == zero && year % 100 != zero) {
    return true;
  } else if (year % 100 == zero && year % 400 == zero) {
    return true;
  } else if (year % 100 == zero) {
    return false;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
