const valueArr = [1, 2, 7, 123, 8, 3, 4, 5, 9, 6, 123, 0];

const checkLargest = (arr) => {
  let largest = -Infinity;
  let Slargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      Slargest = largest;
      largest = arr[i];
    } else if (arr[i] > Slargest && arr[i] !== largest) {
      Slargest = arr[i];
    }
  }
  return Slargest;
};

console.log(checkLargest(valueArr));
