export function twoSum(nums: number[], target: number): number[] {
    let dict: {[key: number]: number} = {};
    let res: number[] = [];

    for(let i=0; i<nums.length; i++){

        if (nums[i] in dict) {
            res = [dict[nums[i]], i];
            break;
        }

        dict[target - nums[i]] = i;
    }
    return res;
}
