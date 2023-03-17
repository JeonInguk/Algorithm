function solution(chicken) {
  let number_chicken = chicken;
  let ordered_chicken = 0;
  let coupon = Math.trunc(chicken % 10);
  for (let i = 0; i <= 20; i++) {
    number_chicken = Math.trunc(number_chicken / 10);
    ordered_chicken += number_chicken;
    coupon += Math.ceil(number_chicken % 10);
    console.log(coupon);
  }
  if (coupon >= 10) {
    ordered_chicken += Math.trunc(coupon / 10);
    coupon = Math.trunc(coupon % 10) + Math.trunc(coupon / 10);
  }
  if (coupon >= 10) {
    ordered_chicken += Math.trunc(coupon / 10);
    coupon = Math.trunc(coupon % 10) + Math.trunc(coupon / 10);
  }
  return ordered_chicken;
}