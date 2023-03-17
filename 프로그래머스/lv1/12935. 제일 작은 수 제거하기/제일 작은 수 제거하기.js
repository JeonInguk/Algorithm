function solution(arr) {
	let array = [...arr];
	let counted_arr = arr.sort((a, b) => a - b);
	let num = array.findIndex((item) => item === counted_arr[0]);
	array.splice(num, 1);
	if (arr.length === 1) {
		return [-1];
	} else {
		return array;
	}
}