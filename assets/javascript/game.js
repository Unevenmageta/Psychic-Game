var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerGuess =computerChoices[Math.floor(Math.random() * computerChoices.length)]
var winCounter=0;
var guess=10;
var loseCounter=0;







document.onkeyup = function(event)
{

var userText =document.getElementById("current");


var userGuess = event.key;
userText.append(userGuess+" ");

console.log(userGuess+"Hello");

var guessCounter=document.getElementById("remaining");
 guessCounter.textContent=guess;


 var wins =document.getElementById("wins");
 wins.textContent=winCounter;
 

 var lose=document.getElementById("Loses");
 lose.textContent=loseCounter;


if(userGuess===computerGuess){


    computerGuess =computerChoices[Math.floor(Math.random() * computerChoices.length)];
    winCounter++;
    guess=10;
    alert("You guessed correctly");

    var clear  = document.getElementById("current");
    clear.textContent="";
    


}
else if(guessCounter.textContent<="0"){
    loseCounter++;
    guess=10;
    alert("Game Over"); 
     clear  = document.getElementById("current");
    clear.textContent="";
    
    

    
    
}

else if(userGuess!==computerGuess){
guess--;

}





console.log(computerGuess+" answer");






}













