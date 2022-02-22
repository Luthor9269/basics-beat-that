var gameMode = `name1`;
var player1 = ``;
var player2 = ``;
var player1DiceRoll = [];
var player2DiceRoll = [];
var player1Number = [];
var player2Number = [];

var main = function (input) {
  var myOutputValue = ``;
  if (gameMode == `name1`) {
    myOutputValue = `Please key in your name player2`;
    player1 = input;
    gameMode = `name2`;
  } else if (gameMode == `name2`) {
    myOutputValue = `${player1} please roll the dice by pressing the submit button`;
    player2 = input;
    gameMode = `game1`;
  }

  if (gameMode == `game1`) {
    myOutputValue = calGamePlay();
  }
  if (gameMode == `game2`) {
    var player2Dice = calDiceRoll();
    player2DiceRoll.push(player2Dice);
    var player2Dice2 = calDiceRoll();
    player2DiceRoll.push(player2Dice2);
    myOutputValue = `${player2} you rolled ${player2Dice} and ${player2Dice2} . Please select the placement of the dice. <br> 0: Place first dice infront. <br> 1: Place second dice infront`;
    gameMode = `choosing2`;
  }

  if (gameMode == `choosing1` && input == 0) {
    player1Number.push(
      Number(String(player1DiceRoll[0]) + String(player1DiceRoll[1]))
    );
    console.log(player1Number);
    gameMode = `game2`;
    myOutputValue = `${player1} your number is ${player1DiceRoll[0]}${player1DiceRoll[1]} <br> ${player2} please press submit to roll the dice `;
  } else if (gameMode == `choosing1` && input == 1) {
    gameMode = `game2`;
    player1Number.push(
      Number(String(player1DiceRoll[1]) + String(player1DiceRoll[0]))
    );
    gameMode = `game2`;
    myOutputValue = `${player1} your number is ${player1DiceRoll[1]}${player1DiceRoll[0]} <br> ${player2} press submit to roll the dice `;
  }

  if (gameMode == `choosing2` && input == 0) {
    player2Number.push(
      Number(String(player2DiceRoll[0]) + String(player2DiceRoll[1]))
    );
    console.log(player2Number);
    myOutputValue = `${player2} your number is ${player2DiceRoll[0]}${player2DiceRoll[1]} <br> Press submit to check the winner`;
    gameMode = `calculating`;
  } else if (gameMode == `choosing2` && input == 1) {
    player1Number.push(
      Number(String(player2DiceRoll[1]) + String(player2DiceRoll[0]))
    );
    console.log(player2Number);
    myOutputValue = `${player2} your number is ${player2DiceRoll[1]}${player2DiceRoll[0]} <br> Press submit to check the winner`;
    gameMode = `calculating`;
  }
  if (gameMode == `calculating`) {
    if (player1Number > player2Number) {
      myOutputValue = `${player1} got ${player1Number[0]} and ${player2} got ${player2Number[0]} <br> ${player1} won! Key in player 1 name`;
    } else if (player1Number < player2Number) {
      myOutputValue = `${player1} got ${player1Number[0]} and ${player2} got ${player2Number[0]} <br> ${player2} won! Key in player1 name`;
    }
    player1 = ``;
    player2 = ``;
    player1DiceRoll = [];
    player2DiceRoll = [];
    player1Number = [];
    player2Number = [];
    gameMode = `name1`;
  }
  return myOutputValue;
};

var calDiceRoll = function () {
  var dice = Math.ceil(Math.random() * 6);
  return dice;
};

var calGamePlay = function () {
  var dice1 = calDiceRoll();
  console.log(dice1);
  player1DiceRoll.push(dice1);
  var dice2 = calDiceRoll();
  console.log(dice2);
  player1DiceRoll.push(dice2);
  myOutputValue = `${player1} you rolled ${dice1} and ${dice2} . Please select the placement of the dice. <br>Key in <br> 0: Place first dice infront. <br> 1: Place second dice infront`;
  gameMode = `choosing1`;
  return myOutputValue;
};

var resetGV = function () {
  player1 = ``;
  player2 = ``;
  player1DiceRoll = [];
  player2DiceRoll = [];
  player1Number = [];
  player2Number = [];
};

//hasWon == true
//hasWon = !true
