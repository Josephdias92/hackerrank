function repeatedString(s: string, n: number): number {
    // Write your code here
    let repeat = 1;
    const count = (s.slice(0, n).match(/a/g) || []).length;
    if (n>s.length) {
        repeat = Math.floor(n/s.length);  
    }

    const numberOfAInRepeat = repeat * count;
    const remainder = n % repeat;
    
    const x = s.slice(0, remainder);
    return numberOfAInRepeat + (x.match(/a/g) || []).length;
    
}