function solution(polynomial) {
	let arr = polynomial.split(' ');
	let unknown_num = 0;
	let essence_num = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].split('').length === 1 && arr[i].includes('x')) {
			unknown_num += 1;
		} else if (arr[i].length === 2 && arr[i].includes('x')) {
			unknown_num += 1 * arr[i].split('')[0];
		} else if (arr[i].length === 3 && arr[i].includes('x')) {
			unknown_num += 1 * (arr[i].split('')[0] + arr[i].split('')[1]);
		} else if (1 * arr[i] && Number(arr[i])) {
			essence_num += 1 * arr[i];
		}
	}
	console.log(arr);
	if (unknown_num > 1 && essence_num > 0) {
		return `${unknown_num}x + ${essence_num}`;
	} else if (unknown_num === 1 && essence_num > 0) {
		return `x + ${essence_num}`;
	} else if (unknown_num > 1 && essence_num === 0) {
		return `${unknown_num}x`;
	} else if (unknown_num === 1 && essence_num === 0) {
		return `x`;
	} else if (unknown_num === 0 && essence_num > 0) {
		return `${essence_num}`;
	}
}