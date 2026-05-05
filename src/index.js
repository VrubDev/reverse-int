module.exports = function reverse(n) {
  const reverseString = Math.abs(n).toString().split('').reverse().join('');
  return Number(reverseString);
};
