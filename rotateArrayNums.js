// rotate array nums by integer k times from left to right

const rotateElemNotOptimized = (k, arr) => {
  if (k > arr.length) {
    k = k % arr.length;
  }
  for (let i = 0; i < k; i++) {
    let popElem = arr.pop();
    arr.unshift(popElem);
  }
  return arr;
};

//optimized way to do it
const rotateElemOptimized = (k, arr) => {
  if (k > arr.length) {
    k = k % arr.length;
  }

  const rotated = arr.splice(arr.length - k, arr.length);
  arr.unshift(...rotated);
  return arr;
};

// without using inbuilt fn
const rotateElem = (k, arr) => {
  if (k > arr.length) {
    k = k % arr.length;
  }

  reverseFn(arr, 0, arr.length - 1);
  reverseFn(arr, 0, k - 1);
  reverseFn(arr, k, arr.length - 1);
  return arr;
};

const reverseFn = (arr, left, right) => {
  while (left < right) {
    const temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
  return arr;
};

//another O(n) way
const checkArr = [1, 2, 3, 4, 5, 6, 7, 8];

const rotateArray = (arr, k) => {
  const rotatedArr = [];
  const len = arr.length;
  k = k % len; // Adjusting k if it is larger than the array length

  // Copy the elements from the original array to the rotated array
  for (let i = 0; i < len; i++) {
    rotatedArr[i] = arr[i];
  }

  // Rotate the elements
  for (let i = 0; i < len; i++) {
    const newIndex = (i + k) % len;
    rotatedArr[newIndex] = arr[i];
  }

  return rotatedArr;
};
console.log(rotateArray(checkArr, 3));
