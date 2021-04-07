Array.prototype.sum = function () {
  let total = 0;
  for (const element of this) {
    total += element;
  }

  return total;
};

Array.prototype.average = function () {
  let total = 0;
  for (const element of this) {
    total += element;
  }

  return total / this.length;
};

// Alternate version, using the `sum` method from above.
// Array.prototype.average = function () {
//   return this.sum() / this.length;
// };

// Testing it all!

const nums = [2, 3, 10, 5];
console.log(nums.sum());

console.log(nums.average());
