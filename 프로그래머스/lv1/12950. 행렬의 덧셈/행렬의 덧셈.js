function solution(arr1, arr2) {
	let arr = [];
	for (let i = 0; i < arr1.length; i++) {
		arr.push([]);
	}
	for (let t = 0; t < arr.length; t++) {
		for (let i = 0; i < arr1[0].length; i++) {
			arr[t].push(arr1[t][i] + arr2[t][i]);
		}
	}
	return arr;
}