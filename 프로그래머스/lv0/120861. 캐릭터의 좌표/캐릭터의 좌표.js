function solution(keyinput, board) {
  let arr = [0, 0];
  keyinput.map((item) => {
    if (arr[0] >= Math.trunc(board[0] / 2)) {
      arr.splice(0, 1, Math.trunc(board[0] / 2));
    } else if (arr[0] <= -Math.trunc(board[0] / 2)) {
      arr.splice(0, 1, -Math.trunc(board[0] / 2));
    }
    if (arr[1] >= Math.trunc(board[1] / 2)) {
      arr.splice(1, 1, Math.trunc(board[1] / 2));
    } else if (arr[1] <= -Math.trunc(board[1] / 2)) {
      arr.splice(1, 1, -Math.trunc(board[1] / 2));
    }
    if (item === "up") {
      arr.splice(1, 1, arr[1] + 1);
    } else if (item === "down") {
      arr.splice(1, 1, arr[1] - 1);
    } else if (item === "left") {
      arr.splice(0, 1, arr[0] - 1);
    } else if (item === "right") {
      arr.splice(0, 1, arr[0] + 1);
    }
  });
  if (arr[0] >= Math.trunc(board[0] / 2)) {
    arr.splice(0, 1, Math.trunc(board[0] / 2));
  } else if (arr[0] <= -Math.trunc(board[0] / 2)) {
    arr.splice(0, 1, -Math.trunc(board[0] / 2));
  }
  if (arr[1] >= Math.trunc(board[1] / 2)) {
    arr.splice(1, 1, Math.trunc(board[1] / 2));
  } else if (arr[1] <= -Math.trunc(board[1] / 2)) {
    arr.splice(1, 1, -Math.trunc(board[1] / 2));
  }
  return arr;
}