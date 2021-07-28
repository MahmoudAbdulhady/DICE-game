//Image1 Randon Number Selector
var randomNumber1 = Math.floor(Math.random()*6)+1; // 1-6
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; //dice1-dice6
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src" , randomDiceImage1);

//Image2 Randon Number Selector
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img") [1];
image2.setAttribute("src" , randomDiceImage2);

// If player 1 Wins !
if (randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Won 🤙";
}
// if player 2 Wins !
else if (randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 Won 🤙";
}
// If Both Dice were equal Then its a draw !
else
{
  document.querySelector("h1").innerHTML = "ITS A DRAW TRY AGAIN 😪";
}
