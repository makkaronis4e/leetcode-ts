export function minSwaps(s: string): number {
    let count = 0;
    let wrong = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[") {
            count += 1;
        } else {
            if (count > 0) {
                count -= 1;
            } else {
                wrong += 1;
            }

        }
    }
    return Math.ceil(wrong / 2);
};




