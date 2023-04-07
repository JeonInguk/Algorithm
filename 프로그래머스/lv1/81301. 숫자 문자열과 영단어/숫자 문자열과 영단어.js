function solution(s) {
    let number_arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    while (isNaN(s)) {
        for (let i = 0; i < number_arr.length; i++) {
            s = s.replace(number_arr[i], number[i]);
        }
    }
    return Number(s);;
}