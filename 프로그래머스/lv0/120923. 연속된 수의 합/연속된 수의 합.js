function solution(num, total) {
	let arr = [];
	let new_arr = [];
	let answer = [];
	for (let i = -total; i <= total; i++) {
		arr.push(i);
	}
	for (let i = 0; i <= arr.length - num; i++) {
		let new_arr = [...arr];
		if (new_arr.slice(i, i + num).reduce((sum, value) => (sum += value), 0) === total) {
			answer.push(new_arr.slice(i, i + num));
		}
	}
	if (total === 0) {
		for (let i = -Math.floor(num / 2); i <= Math.floor(num / 2); i++) {
			new_arr.push(i);
		}
		return new_arr;
	} else {
		return answer.flat();
	}
}