function solution(array, height) {
  const answer = array.filter((h) => height < h).length;
  return answer;
}