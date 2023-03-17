function solution(s) {
    let p_num = 0;
    let y_num = 0;
    let arr = [...s.toUpperCase()];
    arr.map((str) => {
        if (str === 'P') {
            p_num += 1;
        } else if (str === 'Y') {
            y_num += 1;
        }
    });
    if (p_num === 0 && y_num === 0 || p_num === y_num) {
        return true;
    } else {
        return false;
    }
}