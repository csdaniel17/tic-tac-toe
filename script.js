//debugger
$(function () {
  var turnCount = 0;

  //when you click a square (button)
  $("button").click(function () {
    var text = $(this).text();
    //don't change non-blank squares
    if (text === "O" || text === "X") {
      text = $(this).text();
    //first time change to "X"
    } else if (turnCount % 2 === 0 && text === "") {
      text = $(this).text("X");
      turnCount++;
    //second time change to "O"
    } else if (turnCount % 2 === 1 && text === "") {
      text = $(this).text("O");
      turnCount++;
    }
  });

});
