function solution(x) {
	let arr = x.toString().split('');
	let count = 0;
	arr.map((item) => {
		count += item * 1;
	});
	if (x % count === 0) {
		return true;
	} else {
		return false;
	}
}