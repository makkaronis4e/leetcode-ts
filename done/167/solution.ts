export function twoSum(nums: number[], target: number): number[] {

    let left = {
        val: nums[0],
        index: 0,
    };
    let right = {
        val: nums[nums.length - 1],
        index: nums.length - 1,
    };
    let sum = left.val + right.val;

    while (sum !== target) {
        if (sum > target) {
            right.index -= 1;
            right.val = nums[right.index];
        } else if (sum < target) {
            left.index += 1;
            left.val = nums[left.index];
        }

        sum = left.val + right.val;
    }
    return [left.index + 1, right.index + 1];
}

