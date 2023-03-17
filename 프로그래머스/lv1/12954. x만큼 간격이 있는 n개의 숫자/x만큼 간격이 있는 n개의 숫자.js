function solution(x, n) {
    let arr = [x];
    let count = x;
    for (let i = 0; i < n - 1; i++) {
        count += x;
        arr.push(count);
    }
    return arr;
}