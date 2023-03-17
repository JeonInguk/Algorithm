function solution(numbers) {
	let str_arr = [...numbers];
	let num;
	for (let i = 0; i <= numbers.length; i++) {
		if (str_arr[i] === 'z' && str_arr[i + 3] === 'o') {
			str_arr.splice(i, 4, 0);
		} else if (str_arr[i] === 'o' && str_arr[i + 2] === 'e') {
			str_arr.splice(i, 3, 1);
		} else if (str_arr[i] === 't' && str_arr[i + 2] === 'o') {
			str_arr.splice(i, 3, 2);
		} else if (str_arr[i] === 't' && str_arr[i + 4] === 'e') {
			str_arr.splice(i, 5, 3);
		} else if (str_arr[i] === 'f' && str_arr[i + 3] === 'r') {
			str_arr.splice(i, 4, 4);
		} else if (str_arr[i] === 'f' && str_arr[i + 3] === 'e') {
			str_arr.splice(i, 4, 5);
		} else if (str_arr[i] === 's' && str_arr[i + 2] === 'x') {
			str_arr.splice(i, 3, 6);
		} else if (str_arr[i] === 's' && str_arr[i + 4] === 'n') {
			str_arr.splice(i, 5, 7);
		} else if (str_arr[i] === 'e' && str_arr[i + 4] === 't') {
			str_arr.splice(i, 5, 8);
		} else if (str_arr[i] === 'n' && str_arr[i + 3] === 'e') {
			str_arr.splice(i, 4, 9);
		}
	}
	return 1 * str_arr.join('');
}