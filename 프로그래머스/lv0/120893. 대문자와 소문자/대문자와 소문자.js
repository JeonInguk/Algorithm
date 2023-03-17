function solution(my_string) {
  let my_array = [...my_string];
  let new_array = [];
  for (let i = 0; i < my_string.length; i++) {
    if (my_array[i] === my_array[i].toUpperCase()) {
      new_array.push(my_array[i].toLowerCase());
    }
    if (my_array[i] === my_array[i].toLowerCase()) {
      new_array.push(my_array[i].toUpperCase());
    }
  }
  return new_array.join("");
}