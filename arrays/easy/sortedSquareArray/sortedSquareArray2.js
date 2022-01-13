function sortedSquareArray(array) {
  let squared = [];
  let start = 0;
  let end = array.length - 1;

  for (let num of array) {
    if (Math.abs(array[start]) < Math.abs(array[end])) {
      squared.unshift(Math.abs(array[end] * array[end]));
      end -= 1;
    } else {
      squared.unshift(Math.abs(array[start] * array[start]));
      start += 1;
    }
  }

  return squared;
}

sortedSquareArray([1, 2, 3, 5, 6, 8, 9]); //?+
// sortedSquareArray([-5, -4, -3, -2, -1]); //?+
