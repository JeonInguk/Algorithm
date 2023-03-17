function solution(my_string, letter) {
  const str = my_string.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      str.splice(i, 1);
      i--;
    }
  }
  const joinStr = str.join("");
  return joinStr;
}

console.log(solution("abcdef", "f"));
console.log(solution("BCBdbe", "B"));
