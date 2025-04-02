function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // Using Set for O(1) lookup
  
  for (const num of array) {
      const complement = target - num;
      if (seenNumbers.has(complement)) {
          return true;
      }
      seenNumbers.add(num);
  }
  return false;
}

// Alternative Brute Force Solution (for comparison):
function hasTargetSumBruteForce(array, target) {
  for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] + array[j] === target) {
              return true;
          }
      }
  }
  return false;
}

// 5. Make It Clean and Readable:
function hasTargetSum(array, target) {
  // Use Set to store numbers we've seen for quick lookup
  const seenNumbers = new Set();
  
  // Check each number in the array
  for (const currentNum of array) {
      // If we've seen the number that would complete the sum, we found a pair
      const neededNumber = target - currentNum;
      if (seenNumbers.has(neededNumber)) {
          return true;
      }
      // Add current number to our set
      seenNumbers.add(currentNum);
  }
  
  // No pair found that adds to target
  return false;
}

// 6. Optimize:
// Optimized solution is already implemented above
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(n) - storing up to n numbers in Set
// Brute force solution was O(n²) time, O(1) space

// Additional test cases
console.log(hasTargetSum([1, 2, 3], 7));     // false
console.log(hasTargetSum([5, 5], 10));       // true
console.log(hasTargetSum([], 5));            // false
console.log(hasTargetSum([0, 5, -5], 0));    // true

// Export for testing
module.exports = hasTargetSum;

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
