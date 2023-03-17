function solution(my_string, num1, num2) {
  let my_array = [...my_string];
  my_array.splice(num1, 1, [...my_string][num2]);
  my_array.splice(num2, 1, [...my_string][num1]);
  return my_array.join("");
}