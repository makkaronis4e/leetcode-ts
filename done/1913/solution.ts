
export function maxProductDifference(nums: number[]): number {
    let k = 4; // (a*b) - (c*d)
    let big = 1;
    let small = 1;


    for (let i = 0; i < k / 2; i ++) {
        let smallest = {
            index: 0,
            value: NaN
        };
        let biggest = {
            index: 0,
            value: -1
        };
        for (let i = 0; i < nums.length; i++) {
            if (!isNaN(nums[i])) {
                if (nums[i] > biggest.value) {
                    biggest.value = nums[i];
                    biggest.index = i;
                }
                if (nums[i] < smallest.value || !smallest.value) {
                    smallest.value = nums[i];
                    smallest.index = i;
                }
            }
        }
        nums[biggest.index] = NaN;
        nums[smallest.index] = NaN;
        big *= biggest.value;
        small *= smallest.value;
    }
    return big - small;
};
