function solution(A, B) {
	let arr1 = [...A];
	let right_arr = [A];
	for (let i = 0; i < A.length - 1; i++) {
		arr1.unshift(arr1[A.length - 1]);
		arr1.splice(A.length, 1);
		right_arr.push(arr1.join(''));
	}
	let right_num = right_arr.findIndex((str) => str === B);
	return right_num;
}