function solution(letter) {
	let arr = [];
	morse = {
		'.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
		'--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
		'--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
		'...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
		'-.--': 'y', '--..': 'z'
	};
	letter.split(' ').map((item) => {
		arr.push(morse[item]);
	});
	return arr.join('');
}