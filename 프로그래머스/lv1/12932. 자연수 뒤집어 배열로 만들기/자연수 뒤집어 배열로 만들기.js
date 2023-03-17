function solution(n) {
    let arr = [...n.toString()].reverse();
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 1, arr[i] * 1);
    }
    return arr;
}