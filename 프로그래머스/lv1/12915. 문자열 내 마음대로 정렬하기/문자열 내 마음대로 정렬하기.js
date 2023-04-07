function solution(strings, n) {
    const arr = [];
    const answer = [];
    for (let i = 0; i < strings.length; i++) {
        arr.push([strings[i].split('')[n], strings[i]]);
    }
    arr.sort();
    arr.map((item) => {
        answer.push(item[1]);
    });
    return answer;
}