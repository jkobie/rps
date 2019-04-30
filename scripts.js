var choices = ["rock", "scissors", "lizard", "paper", "spock"];

function mod(a, b) {
  var c = a % b;
  if(c < 0) {
    return c + b;
  } else {
    return c;
  }
}

function computerChoice() {
  var rand = Math.floor(Math.random() * 5);
  return choices[rand];
}

var rpslsGame = function(player1, player2) {
  //Draw
  if(player1 == player2) {
    return "Draw!";
  }

  var player1Index = choices.indexOf(player1);
  var player2Index = choices.indexOf(player2);

  if(mod((player1Index - player2Index), choices.length) > choices.length/2) {
    return "Player 1 Wins!";
  } else {
    return "Player 2 Wins!";
  }
};

$(document).ready(function() {
  $("form button[type=submit]").click(function() {
    $("button[type=submit]", $(this).parents("form")).removeAttr("clicked");
    $(this).attr("clicked", "true");
  });

  $("form").submit(function(event) {
    var player1 = $("button[type=submit][clicked=true]").val();
    var computer = computerChoice();
    var result = rpslsGame(player1, computer);

    if(result == "Draw!") {
      $("h1#result").text(result);
    } else if(result == "Player 2 Wins!") {
      $("h1#result").text("Computer Wins!");
    } else {
      $("h1#result").text("You Win!");
    }

    $("h4").empty();
    $("h4#player-choice").append("You chose: " + "<i class='fa fa-hand-" + player1 + "-o'></i> " + player1);
    $("h4#computer-choice").append("The computer chose: " + "<i class='fa fa-hand-" + computer + "-o'></i> " + computer);

    event.preventDefault();
  });
});
