function solution(id_pw, db) {
  let arr = [];
  db.map((item) => {
    if (item[0] === id_pw[0] && item[1] === id_pw[1]) {
      arr.push(`login`);
    } else if (item[0] === id_pw[0] && item[1] !== id_pw[1]) {
      arr.push(`wrong pw`);
    } else if (item[0] !== id_pw[0]) {
      arr.push(`fail`);
    }
  });
  if (arr.includes("login")) {
    return "login";
  } else if (arr.includes("wrong pw")) {
    return "wrong pw";
  } else if (arr.includes("fail")) {
    return "fail";
  }
}