function solution(n) {
	let str = '수';
	for (let i = 2; i < n + 1; i++) {
		if (i % 2 === 0) {
			str += '박';
		} else {
			str += '수';
		}
	}
	return str;
}