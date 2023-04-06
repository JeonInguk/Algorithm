function solution(s, n) {
    const alphabet_arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65).toLowerCase());
    alphabet_arr.push(...alphabet_arr);
    const s_arr = s.split('');
    console.log(s_arr);
    const answer = [];
    for (let i = 0; i < s_arr.length; i++) {
        if (s_arr[i] === ' ') {
            answer.push(' ');
        } else if (s_arr[i].toLowerCase() === s_arr[i]) {
            let idx = alphabet_arr.findIndex((alphabet) => alphabet === s_arr[i]);
            answer.push(alphabet_arr.slice(idx + 1, idx + 1 + n)[alphabet_arr.slice(idx + 1, idx + 1 + n).length - 1]);
        } else {
            let idx = alphabet_arr.findIndex((alphabet) => alphabet === s_arr[i].toLowerCase());
            answer.push(alphabet_arr.slice(idx + 1, idx + 1 + n)[alphabet_arr.slice(idx + 1, idx + 1 + n).length - 1].toUpperCase());
        }
    }
    return answer.join('');
}