const valueArr = [1, 2, 7, 8, 3, 4, 5, 9, 6, 123, 0];

const checkLargest = (arr) => {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (largest <= arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(checkLargest(valueArr));
