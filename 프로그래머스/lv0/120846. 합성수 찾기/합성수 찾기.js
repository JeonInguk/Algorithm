function solution(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	let filtered_arr = arr.filter((item) => {
		for (let i = 2; i < item; i++) {
			if (item % i === 0) {
				return true;
			}
		}
	});
	return filtered_arr.length;
}