/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let first = nums[0]; let second = -1;

    if(nums.some(isNaN))
        throw new Error("Please provide number array")
    for(let i = 0; i < nums.length; i++)
    {
        if (nums[i] > first) {
        second = first;
        first = nums[i]
    }

    if (nums[i] > second && nums[i] < first) {
        second = nums[i];
    }
    }
    return second
}

