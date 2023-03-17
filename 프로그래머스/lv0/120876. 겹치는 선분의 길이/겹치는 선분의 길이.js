function solution(lines) {
  let answer = 0;
  const first_line = [];
  const second_line = [];
  const third_line = [];
  const cross_line = [];
  for (let i = 0; i < lines[0][1] - lines[0][0]; i++) {
    first_line.push([lines[0][0] + i, lines[0][0] + i + 1]);
  }
  for (let i = 0; i < lines[1][1] - lines[1][0]; i++) {
    second_line.push([lines[1][0] + i, lines[1][0] + i + 1]);
  }
  for (let i = 0; i < lines[2][1] - lines[2][0]; i++) {
    third_line.push([lines[2][0] + i, lines[2][0] + i + 1]);
  }
  first_line.map((item1) => {
    second_line.map((item2) => {
      if (item1[0] === item2[0] && item1[1] === item2[1]) {
        cross_line.push(item1);
      }
    });
  });
  first_line.map((item1) => {
    third_line.map((item2) => {
      if (item1[0] === item2[0] && item1[1] === item2[1]) {
        cross_line.push(item1);
      }
    });
  });
  second_line.map((item1) => {
    third_line.map((item2) => {
      if (item1[0] === item2[0] && item1[1] === item2[1]) {
        cross_line.push(item1);
      }
    });
  });
  cross_line.sort();
  for (let i = 0; i < cross_line.length - 1; i++) {
    if (
      cross_line[i][0] === cross_line[i + 1][0] &&
      cross_line[i][1] === cross_line[i + 1][1]
    ) {
      cross_line.splice(i, 1);
      i--;
    }
  }
  return cross_line.length;
}