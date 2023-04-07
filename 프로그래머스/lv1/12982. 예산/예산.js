function solution(d, budget) {
    const sorted_arr = d.sort((a, b) => a - b);
    let budget_sum = 0;
    let i = 0;
    while (budget_sum <= budget) {
        budget_sum += sorted_arr[i];
        i++;
    }
    return i - 1;
}