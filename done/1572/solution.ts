export function diagonalSum(mat: number[][]): number {
    let sum = 0;
    if (mat.length === 1) {
        return mat[0][0];
    }

    for (let i = 0; i < mat.length; i++) {
       sum += mat[i][i];
        if (!(mat.length % 2 !== 0 && i === Math.floor(mat.length / 2))) {
            sum +=  mat[i][mat.length - 1 - i];
        }
    }
    return sum;
};



