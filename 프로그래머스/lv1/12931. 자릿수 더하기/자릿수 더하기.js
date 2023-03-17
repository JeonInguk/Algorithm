function solution(n) {
	return n.toString().split('').reduce((sum, value) => (sum += 1 * value), 0);
}