const valueArr = [1, 2, 7, 12, 12, 12, 12, 132];

const checkingSorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
    } else {
      return "not sorted";
    }
  }
  return "Sorted";
};

console.log(checkingSorted(valueArr));
