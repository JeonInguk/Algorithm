function solution(cipher, code) {
  let cipher_array = [...cipher];
  let answer = [];
  for (let i = 1; i < cipher.length / code + 1; i++) {
    answer.push(cipher_array[code * i - 1]);
  }
  return answer.join("");
}