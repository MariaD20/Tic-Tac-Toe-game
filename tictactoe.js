let moves = 0;
let currentPlayer = "X";
document.getElementById("whoMoves").innerHTML = currentPlayer + " to move!";
var table = document.getElementById("table");

function generateBoard() {
  for (var i = 0; i < 3; i++) {
    row = table.insertRow(i);
    for (var j = 0; j < 3; j++) {
      cell = row.insertCell(j);
      cell.addEventListener('click', ev => {
        ++moves;
        ev.target.textContent = currentPlayer;
        whoIsNext(currentPlayer);
        checkGameStatus(currentPlayer);
      }, {once:true});
    }
  }
}

const winningCombinations = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[2, 0], [1, 1], [0, 2]],
];

function checkGameStatus(player) {
  for (var i = 0; i < winningCombinations.length; ++i) {
    var flag = 1;
    for (var j = 0, k = 0; j < winningCombinations[i].length - 1; ++j) {
        if (table.rows[winningCombinations[i][j][k]].cells[winningCombinations[i][j][k + 1]].textContent !=
            table.rows[winningCombinations[i][j + 1][k]].cells[winningCombinations[i][j + 1][k + 1]].textContent ||
            table.rows[winningCombinations[i][j][k]].cells[winningCombinations[i][j][k + 1]].textContent == "") {
              flag = 0;
        }
    }
    if (flag == 1) {
      final("We have a winner and this is " +  whoIsNext(player) + "! Congratulations!!!", "");
    } else if (moves == 9) {
      final("The game is over and it's a draw! Both of you are very good at playing this game!", "");
    }
  }
}

function final(message, noMove) {
  document.getElementById("finalMessage").innerHTML = message;
  document.getElementById("whoMoves").innerHTML = noMove;
}

function whoIsNext(player) {
  if (player == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  document.getElementById("whoMoves").innerHTML = currentPlayer + " to move!";
  return currentPlayer;
}

function startAgain() {
  window.location.reload();
}

generateBoard();
