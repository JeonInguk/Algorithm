function solution(s) {
	let arr = [...s].map((item) => item * 1);
	if (s.length === 4 || s.length === 6) {
		if (arr.includes(NaN)) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}