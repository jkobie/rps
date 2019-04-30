describe('rpslsGame', function() {
  //Draw case
  it('returns "Draw!" if both players enter the same choice', function() {
    expect(rpslsGame("rock", "rock")).to.equal("Draw!");
  });

  //Rock Wins cases
  it('[Rock] Player 1 wins if he or she enters "rock" and Player 2 enters "scissors"', function() {
    expect(rpslsGame("rock", "scissors")).to.equal("Player 1 Wins!");
  });

  it('[Rock] Player 1 wins if he or she enters "rock" and Player 2 enters "lizard"', function() {
    expect(rpslsGame("rock", "lizard")).to.equal("Player 1 Wins!");
  });

  it('[Rock] Player 2 wins if he or she enters "rock" and Player 1 enters "scissors"', function() {
    expect(rpslsGame("scissors", "rock")).to.equal("Player 2 Wins!");
  });

  it('[Rock] Player 2 wins if he or she enters "rock" and Player 1 enters "lizard"', function() {
    expect(rpslsGame("lizard", "rock")).to.equal("Player 2 Wins!");
  });

  //Paper Wins cases
  it('[Paper] Player 1 wins if he or she enters "paper" and Player 2 enters "rock"', function() {
    expect(rpslsGame("paper", "rock")).to.equal("Player 1 Wins!");
  });

  it('[Paper] Player 1 wins if he or she enters "paper" and Player 2 enters "spock"', function() {
    expect(rpslsGame("paper", "spock")).to.equal("Player 1 Wins!");
  });

  it('[Paper] Player 2 wins if he or she enters "paper" and Player 1 enters "rock"', function() {
    expect(rpslsGame("rock", "paper")).to.equal("Player 2 Wins!");
  });

  it('[Paper] Player 2 wins if he or she enters "paper" and Player 1 enters "spock"', function() {
    expect(rpslsGame("spock", "paper")).to.equal("Player 2 Wins!");
  });

  //Scissors Wins cases
  it('[Scissors] Player 1 wins if he or she enters "scissors" and Player 2 enters "paper"', function() {
    expect(rpslsGame("scissors", "paper")).to.equal("Player 1 Wins!");
  });

  it('[Scissors] Player 1 wins if he or she enters "scissors" and Player 2 enters "lizard"', function() {
    expect(rpslsGame("scissors", "lizard")).to.equal("Player 1 Wins!");
  });

  it('[Scissors] Player 2 wins if he or she enters "scissors" and Player 1 enters "paper"', function() {
    expect(rpslsGame("paper", "scissors")).to.equal("Player 2 Wins!");
  });

  it('[Scissors] Player 2 wins if he or she enters "scissors" and Player 1 enters "lizard"', function() {
    expect(rpslsGame("lizard", "scissors")).to.equal("Player 2 Wins!");
  });

  //Lizard Wins cases
  it('[Lizard] Player 1 wins if he or she enters "lizard" and Player 2 enters "paper"', function() {
    expect(rpslsGame("lizard", "paper")).to.equal("Player 1 Wins!");
  });

  it('[Lizard] Player 1 wins if he or she enters "lizard" and Player 2 enters "spock"', function() {
    expect(rpslsGame("lizard", "spock")).to.equal("Player 1 Wins!");
  });

  it('[Lizard] Player 2 wins if he or she enters "lizard" and Player 1 enters "paper"', function() {
    expect(rpslsGame("paper", "lizard")).to.equal("Player 2 Wins!");
  });

  it('[Lizard] Player 2 wins if he or she enters "lizard" and Player 1 enters "spock"', function() {
    expect(rpslsGame("spock", "lizard")).to.equal("Player 2 Wins!");
  });

  //Spock Wins cases
  it('[Spock] Player 1 wins if he or she enters "spock" and Player 2 enters "rock"', function() {
    expect(rpslsGame("spock", "rock")).to.equal("Player 1 Wins!");
  });

  it('[Spock] Player 1 wins if he or she enters "spock" and Player 2 enters "scissors"', function() {
    expect(rpslsGame("spock", "scissors")).to.equal("Player 1 Wins!");
  });

  it('[Spock] Player 2 wins if he or she enters "spock" and Player 1 enters "rock"', function() {
    expect(rpslsGame("rock", "spock")).to.equal("Player 2 Wins!");
  });

  it('[Spock] Player 2 wins if he or she enters "spock" and Player 1 enters "scissors"', function() {
    expect(rpslsGame("scissors", "spock")).to.equal("Player 2 Wins!");
  });
});
