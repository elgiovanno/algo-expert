function validateSubsequence(array, sequence) {
  // sequence position pointer
  let sequencePosition = 0;

  for (let i of array) {
    if (i === sequence[sequencePosition]) {
      sequencePosition++;
    }
  }

  return sequencePosition === sequence.length;
}

// validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
console.log(
  validateSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 22, 25, 6, -1, 8, 10, 12]
  )
);
