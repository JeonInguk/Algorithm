function solution(n) {
	let nomal_num = [];
	let village_num = [];
	for (let i = 1; i <= 100; i++) {
		nomal_num.push(i);
	}

	for (let i = 1; i <= 300; i++) {
		if (i % 3 === 0 || i.toString().includes('3')) {
			continue;
		}
		village_num.push(i);
	}
	return village_num[n - 1];
}