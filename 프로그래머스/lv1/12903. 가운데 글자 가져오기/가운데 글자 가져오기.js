function solution(s) {
	let arr = [...s];
	let new_arr = [];
	if (s.length % 2 === 0) {
		new_arr.push(arr[s.length / 2 - 1]);
		new_arr.push(arr[s.length / 2]);
		return new_arr.join('');
	} else {
		return arr.splice(Math.floor(s.length / 2), 1).join('');
	}
}