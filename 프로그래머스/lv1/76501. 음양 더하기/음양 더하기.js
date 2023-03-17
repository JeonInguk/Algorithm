function solution(absolutes, signs) {
	let count = 0;
	for (let i = 0; i < absolutes.length; i++) {
		if (signs[i] === true) {
			count += absolutes[i];
		} else {
			count -= absolutes[i];
		}
	}
	return count;
}