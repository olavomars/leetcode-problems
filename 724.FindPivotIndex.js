/**
 * @param {number[]} nums
 * @return {number}
 */

// define the value of the right sum from index
// define the value of the left sum from index
// compare right sum to left sum
// if leftSum === rightSum return index
// else return -1

var pivotIndex = function (nums) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < nums.length; i++) {
    right += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      right -= nums[i];
    } else {
      left += nums[i - 1];
      right -= nums[i];
    }
    if (left === right) return i;
  }

  return -1;
};
