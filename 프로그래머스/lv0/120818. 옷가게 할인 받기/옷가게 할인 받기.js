function solution(price) {
  if (100000 > price) {
    return price;
  } else if (100000 <= price && price < 300000) {
    return Math.trunc(price - (price * 5) / 100);
  } else if (300000 <= price && price < 500000) {
    return Math.trunc(price - (price * 10) / 100);
  } else if (500000 <= price) {
    return Math.trunc(price - (price * 20) / 100);
  }
}