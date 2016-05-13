//debugger
/*var winningCombos = [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"],
  ["A1", "B1", "C1"],
  ["A2", "B2", "C2"],
  ["A3", "B3", "C3"],
  ["A1", "B2", "C3"],
  ["A3", "B2", "C1"],
];
*/

//array to show winning combos
var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

//function that given:
 //1. a player - "X" or "O"
 //2. a winning combo - an array of squares
 //3. the board - an array of all moves
function playerOccupiesSquares(player, squares, board) {
  //checks: if the player occupies all 3 squares of combo
  //loop through squares
  for (var i = 0; i < squares.length; i++) {
    var boardIndex = squares[i];
    var value = board[boardIndex];
    //does one player occupy all three
    if (value !== player) {
      //if false: return false
      return false;
    }
  }
   //if true: return true
   return true;
}

//function that returns an array consisting of the current moves on the board
function getCurrentBoard() {
  var buttons = $(".button");
  var moves = [];
  for (var i = 0; i < buttons.length; i++) {
    var button = $(buttons[i]);
    moves.push(button.text());
  }
  return moves
}

//function that looks at the board and returns winner
function checkWinner(board) {
  //loop through combos
  for (var i = 0; i < winningCombos.length; i++) {
    //save current combo
    var combo = winningCombos[i];
    //for each player use playerOccupiesSquares function to check if they won
    if (playerOccupiesSquares("o", combo, board)) {
      //if it's true then return player "O" as winner
      return "o";
    }
    if (playerOccupiesSquares("x", combo, board)) {
      //if it's true then return player "X" as winner
      return "x";
    }
  }
  //if go through all combos and there is no winner, return null - winner is "O", "X", or nobody
  return null;
}

var turnCount = 0;

$(function () {
  $("#play-again").hide();
  $("#winner").hide();
  //when you click a square (button)
  $(".button").click(function () {
    var text = $(this).text();
    //don't change non-blank squares
    if (text === "o" || text === "x") {
      text = $(this).text();
    //first time change to "X"
    } else if (turnCount % 2 === 0) {
      text = $(this).text("x");
      turnCount++;
      var board = getCurrentBoard();
      var winner = checkWinner(board);
      if (winner) {
        $(".button").off();
        $("#winner").text("the winner is: " + winner).show();
        $("#play-again").show();
      } else if (turnCount >= 9) {
        $("#winner").text("oh shoot - game over").show();
        $("#play-again").show();
      }
    //second time change to "O"
    } else if (turnCount % 2 === 1) {
      text = $(this).text("o");
      turnCount++;
      var board = getCurrentBoard();
      var winner = checkWinner(board);
      if (winner) {
        $(".button").off();
        $("#winner").text("the winner is: " + winner).show();
        $("#play-again").show();
      } else if (turnCount >= 9) {
        $("#winner").text("oh shoot - game over").show();
        $("#play-again").show();
      }
    }
  });
  $("#play-again").click(function () {
    location.reload();
  });
});
