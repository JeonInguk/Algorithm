function solution(balls, share) {
  let molecule = 1;
  let denominator = 1;
  for (let i = balls - share + 1; i <= balls; i++) {
    molecule *= i;
  }
  for (let i = 1; i <= share; i++) {
    denominator *= i;
  }
  return Math.round(Math.round(molecule) / Math.round(denominator));
}