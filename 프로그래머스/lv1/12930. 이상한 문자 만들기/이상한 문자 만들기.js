function solution(s) {
  let arr = s.split(' ');
  let new_arr = [];
  arr.map((item) => {
    let split_arr = item.split('');
    let temporary_arr = [];
    for (let i = 0; i < split_arr.length; i++) {
      if (i % 2 === 0) {
        temporary_arr.push(split_arr[i].toUpperCase());
      } else {
        temporary_arr.push(split_arr[i].toLowerCase());
      }
    }
    new_arr.push(temporary_arr.join(''));
  });
  return new_arr.join(' ');
}