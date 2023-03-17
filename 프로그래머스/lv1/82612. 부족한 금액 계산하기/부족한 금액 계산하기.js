function solution(price, money, count) {
	let counted_mony = 0;
	for (let i = 1; i <= count; i++) {
		counted_mony += price * i;
	}
	if (money >= counted_mony) {
		return 0;
	} else {
		return counted_mony - money;
	}
}