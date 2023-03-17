function solution(M, N) {
  let answer = 0;
  if (M === N) {
    answer += M - 1;
    answer += M * (M - 1);
  } else if (M > N) {
    answer += N - 1;
    answer += (M - 1) * N;
  } else if (M < N) {
    answer += M - 1;
    answer += (N - 1) * M;
  }
  return answer;
}