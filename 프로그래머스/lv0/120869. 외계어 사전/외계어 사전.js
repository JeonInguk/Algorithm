function solution(spell, dic) {
  let arr = [];
  let new_arr = [];
  let answer = 2;
  let 포함여부 = '포함';
  for (let i = 1; i < spell.length; i++) {
    포함여부 += '포함';
  }
  dic.map((item) => {
    if (item.length === spell.length) {
      for (let i = 0; i < spell.length; i++) {
        if (item.includes(spell[i])) {
          arr.push("포함");
        } else {
          arr.push("불포함");
        }
      }
    }
  });
  while (arr.length) {
    new_arr.push(arr.splice(0, spell.length).join(""));
  }
  for (let i = 0; i <= new_arr.length; i++) {
    if (new_arr.includes(포함여부)) {
      answer = 1;
    }
  }
  return answer;
}