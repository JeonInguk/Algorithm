function solution(age) {
  let ansewr = [];
  let alphabet_array = [..."abcdefghijklmnopqrstuvwxyz"];
  [...age.toString()].map((idx) => {
    ansewr.push(alphabet_array[idx]);
  });
  return ansewr.join("");
}