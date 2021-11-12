export function mostCompetitive(nums: number[], k: number): number[] {
    let res: number[] = [];
    let index = 0;

    for (let i = 0; i < k; i++) {
        let smallest: number | null = null;
        for (let j = index; j <= nums.length - k + res.length; j++) {
            if (smallest === null || smallest > nums[j]) {
                smallest = nums[j];
                index = j + 1;
            }
        }
        res[i] = smallest as number;
    }

    return res;
};
