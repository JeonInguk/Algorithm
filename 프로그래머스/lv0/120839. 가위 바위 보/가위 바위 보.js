function solution(rsp) {
  let rsp_array = [...rsp];
  let answer = [];
  rsp_array.map((item) => {
    if (item === "2") {
      answer.push("0");
    } else if (item === "0") {
      answer.push("5");
    } else if (item === "5") {
      answer.push("2");
    }
  });
  return answer.join("");
}