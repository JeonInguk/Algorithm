function solution(my_string) {
  let answer = [...my_string].filter(
    (string) =>
      string !== "a" &&
      string !== "i" &&
      string !== "o" &&
      string !== "e" &&
      string !== "u"
  );
  return answer.join("");
}

