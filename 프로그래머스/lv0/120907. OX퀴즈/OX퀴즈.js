function solution(quiz) {
	let answer = [...quiz].fill(0);
	for (let i = 0; i < quiz.length; i++) {
		let arr = quiz[i].split(' ');
		if (arr[1] === '+') {
			if (1 * arr[0] + 1 * arr[2] === 1 * arr[4]) {
				answer.splice(i, 1, "O");
			} else {
				answer.splice(i, 1, "X");
			}
		}
		if (arr[1] === '-') {
			if (1 * arr[0] - 1 * arr[2] === 1 * arr[4]) {
				answer.splice(i, 1, "O");
			} else {
				answer.splice(i, 1, "X");
			}
		}
	}
	return answer;
}