export function leastInterval(tasks: string[], n: number): number {
    if(tasks.length < 2) {
        return tasks.length;
    }
    const total = tasks.length;
    const quantity: {[key: string]: number} = {};
    for (let i = 0; i < total; i++){
        if(!(tasks[i] in quantity)) {
            quantity[tasks[i]] = 1;
        }
        else {
            quantity[tasks[i]]++;
        }
    }
    const max = Math.max(...Object.values(quantity));
    const maxCount = Object.values(quantity).filter(a => a === max).length;
    return Math.max(total, max * maxCount + (max - 1) * (n - maxCount + 1));
};
