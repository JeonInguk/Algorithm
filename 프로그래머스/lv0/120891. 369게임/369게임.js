function solution(order) {
  let answer = 0;
  let order_string = order.toString();
  [...order_string].map((item) => {
    if (item === "3" || item === "6" || item === "9") {
      answer += 1;
    }
  });
  return answer;
}