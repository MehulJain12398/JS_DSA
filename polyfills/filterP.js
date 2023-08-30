Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const element = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const checkArr = element.myFilter((num) => {
  return num > 4;
});

console.log(checkArr);
