let moves = 0;
const cells = document.querySelectorAll("td");
let currentPlayer = "X";
document.getElementById("whoMoves").innerHTML = currentPlayer + " to move!";

function chooseCell() {
  for(let i = 0; i < cells.length; ++i) {
      cells[i].addEventListener("click", cellPressed);
      function cellPressed() {
        ++moves;
        cells[i].textContent = currentPlayer;
        cells[i].removeEventListener("click", cellPressed);
        whoIsNext(currentPlayer);
        checkStatus(currentPlayer);
      }
  }
}

function checkEqual(x, y, z) {
  return(x.textContent == y.textContent && y.textContent == z.textContent && x.textContent != "");
}

function checkStatus(player) {
  if (checkEqual(cells[0], cells[1], cells[2]) || checkEqual(cells[0], cells[3], cells[6]) || checkEqual(cells[0], cells[4], cells[8])
   || checkEqual(cells[3], cells[4], cells[5]) || checkEqual(cells[6], cells[7], cells[8]) || checkEqual(cells[1], cells[4], cells[7])
   || checkEqual(cells[2], cells[5], cells[8]) || checkEqual(cells[2], cells[4], cells[6])) {
     final("We have a winner and this is " +  whoIsNext(player) + "! Congratulations!!!", "");
     disableUnclickedButtons();
  } else if (moves == 9) {
    final("The game is over and it's a draw! Both of you are very good at playing this game!", "");
  }
}

function final(mess, noMove) {
  document.getElementById("finalMessage").innerHTML = mess;
  document.getElementById("whoMoves").innerHTML = noMove;
}

function disableUnclickedButtons() {
  for (var i = 0; i < cells.length; ++i) {
    if (cells[i].textContent == "") {
      cells[i].removeEventListener("click", cellPressed);
    }
  }
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

chooseCell();

//let xPlay = document.getElementById("xPlayer").textContent;
//alert(xPlay);
//alert(xPlayer.value);
//let oPlay = document.getElementById("oPlayer").value;

//document.getElementById("whoMoves").innerHTML = oPlay + " to move!";
//document.getElementById("whoMoves").innerHTML = xPlay + " to move!";
