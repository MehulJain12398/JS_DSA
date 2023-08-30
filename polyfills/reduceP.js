// array.reduce((acc,curr) => {},initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const checkArr = [1, 2, 3, 4, 5];

const newSum = checkArr.myReduce((acc, curr) => {
  return acc + curr;
}, 10);
console.log(newSum);
