function solution(babbling) {
  let answer = 0;
  let babbling_array1 = ["aya", "ye", "woo", "ma"];
  let babbling_array2 = ["aya", "ye", "woo", "ma"];
  babbling_array1.map((item1) => {
    babbling_array1.map((item2) => {
      babbling_array2.push(item1 + item2);
      babbling_array1.map((item3) => {
        babbling_array2.push(item1 + item2 + item3);
        babbling_array1.map((item4) => {
          babbling_array2.push(item1 + item2 + item3 + item4);
        });
      });
    });
  });
  for (let i = 0; i < babbling.length; i++) {
    if (babbling_array2.includes(babbling[i])) {
      answer += 1;
    }
  }
  return answer;
}