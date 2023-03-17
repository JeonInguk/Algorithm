function solution(arr, divisor) {
	let new_arr = arr.filter((item) => {
		if (item % divisor === 0) {
			return true;
		} else {
			return false;
		}
	});
	if (new_arr.length === 0) {
		return [-1];
	} else {
		return new_arr.sort((a, b) => a - b);
	}
}