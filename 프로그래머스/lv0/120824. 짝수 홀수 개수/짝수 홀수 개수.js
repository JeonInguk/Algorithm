function solution(num_list) {
  let x = [];
  let y = [];
  const middle = num_list.map((i) => (i % 2 ? x.push(i) : y.push(i)));
  answer = [y.length, x.length];
  return answer;
}