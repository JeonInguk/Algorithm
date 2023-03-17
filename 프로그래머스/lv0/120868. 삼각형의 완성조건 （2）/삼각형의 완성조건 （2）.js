function solution(sides) {
  let arr = [];
  sides.sort((a, b) => b - a);
  for (let i = sides[0]; i > sides[0] - sides[1]; i--) {
    arr.push(i);
  }
  for (let i = sides[0] + 1; i < sides[0] + sides[1]; i++) {
    arr.push(i);
  }
  return arr.length
}