function solution(left, right) {
	let arr = [];
	let count = 0;
	let new_arr = [];
	for (let i = left; i <= right; i++) {
		arr.push(i);
	}
	for (let t = 0; t < arr.length; t++) {
		for (let i = 1; i <= arr[arr.length - 1]; i++) {
			if (arr[t] % i === 0) {
				count += 1;
			}
		}
		new_arr.push(count);
		count = 0;
	}
	for (let i = 0; i < new_arr.length; i++) {
		if (new_arr[i] % 2 === 0) {
			count += arr[i];
		} else {
			count -= arr[i];
		}
	}
	return count;
}