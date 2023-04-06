function solution(s, skip, index) {
    let alphabet_arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65).toLowerCase());
    const s_arr = s.split('');
    const skip_arr = skip.split('');
    const answer = [];
    for (let i = 0; i < skip_arr.length; i++) {
        if (alphabet_arr.find((item) => item === skip_arr[i])) {
            alphabet_arr.splice(alphabet_arr.findIndex((item) => item === skip_arr[i]), 1);
        }
    }
    alphabet_arr.push(...alphabet_arr);
    alphabet_arr.push(...alphabet_arr);
    alphabet_arr.push(...alphabet_arr);
    alphabet_arr.push(...alphabet_arr);
    alphabet_arr.push(...alphabet_arr);
    alphabet_arr.push(...alphabet_arr);
    console.log(alphabet_arr);
    for (let i = 0; i < s_arr.length; i++) {
        let idx = alphabet_arr.findIndex((alphabet) => alphabet === s_arr[i]);
        answer.push(alphabet_arr.slice(idx + 1, idx + 1 + index)[alphabet_arr.slice(idx + 1, idx + 1 + index).length - 1]);
    }
    console.log(answer.join(''));
    return answer.join('');
}