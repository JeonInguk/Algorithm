function solution(i, j, k) {
    let arr = [];
    let new_arr = [];
    let answer = 0;
    for (let t = i; t <= j; t++) {
        arr.push(new String(t));
    }
    arr.map((item) => {
        new_arr.push(item.split(''));
    });
    new_arr.flat().map((item) => {
        if (1 * item === k) {
            answer += 1;
        }
    });
    return answer;
}