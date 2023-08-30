const valueArr = [1, 2, 7, 12, 12, 12, 12, 132, 33];

const removeDuplicates = (arr) => {
  const hashMap = {};
  const newArr = [];
  for (const num of arr) {
    if (!hashMap[num]) {
      newArr.push(num);
      hashMap[num] = "true";
    }
  }
  return newArr;
};

console.log(removeDuplicates(valueArr));
