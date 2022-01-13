function sortedSquareArray(array) {
  let squared = [];

  for (let num of array) {
    squared.push(num * num);
  }

  return squared.sort((a, b) => a - b);
}

sortedSquareArray([1, 2, 3, 5, 6, 8, 9]); //?+
sortedSquareArray([-5, -4, -3, -2, -1]); //?+
