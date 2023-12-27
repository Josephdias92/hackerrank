interface ICountNumbers {
    [key: string]: number;
 }
function equalizeArray(arr: number[]): number {
    // Write your code here
    let counts:ICountNumbers = {};
    for (const i of arr) {
        if (counts[i] === undefined) {
            counts[i] = 0;
        }
        counts[i]++;
    }
    
    let max = 0
    let total = 0
    for (const [key, value] of Object.entries<number>(counts)) {
        if (max < value) {
            max = value;
        }
        total +=value;
    }
    return total - max;
}