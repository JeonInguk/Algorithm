function solution(my_string) {
    let arr = [...my_string];
    return [...new Set(arr)].join('');
}