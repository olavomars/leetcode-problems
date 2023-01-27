// https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//loop through nums[i], until i < nums.length-1
//transform nums[i]+nums[i+1] into temp variable
// make nums[i + 1] = temp variable;

var runningSum = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let temp = nums[i] + nums[i + 1];
    nums[i + 1] = temp;
  }
  return nums;
};
