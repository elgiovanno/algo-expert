// function twoNumberSum(arr, targetSum) {
//   for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === targetSum) {
// 				return [arr[i], arr[j]]
// 			}
// 		}
// 	}

// 	return []
// }

// twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);

// function twoNumberSum(array, targetSum) {
// 	let numberHash = {}

// 	for (let i in array) {
// 		if (numberHash[targetSum - i]) {
// 			return [targetSum - i, i]
// 		} else {
// 			numberHash[i] = 'true'
// 		}
// 	}

// 	return []
// }

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      console.log(array[left]);
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    }
  }

  return [];
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
