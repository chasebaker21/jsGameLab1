startGame();

let grantHealth = 10;
let userHealth = 40;
let grantDeaths = 0;
let userDeaths = 0;
let userWins = 0;

while(userHealth > 0 && grantDeaths < 3) {
// damage to each player either 1 or 2
grantHealth -= Math.floor((Math.random() * 2) + 1);
userHealth -= Math.floor((Math.random() * 2) + 1);
// log out damage + health
console.log("Grant the Mighty Chicken has " + grantHealth + " health left.");
console.log(userName + " has " + userHealth + " health left.");



if (grantHealth <= 0) {
    grantDeaths++;
    userWins++;
    grantHealth = 10;
    // console.log("Grant's total deaths: " + grantDeaths);
    // console.log(userName + "'s wins: " + userWins);
} else if (userHealth <= 0) {
    userDeaths++;
    break;
}
    
}

function gameOver() {
    // when game is over display winner
    if (grantDeaths === 3 && userHealth <= 0) { 
        console.log("You both died");          

    } else if(grantDeaths === 3) {
        console.log("Congratulations " + userName + " you won!");
        
    } else {
        console.log("Sorry Grant has won the game.");
        return;
    }
}
/**
 * startGame is used for the beginning prompts
 * @todo make console end if user decides not to play.
 * exit() is not what I want to do but I am unsure what else to do.
 */
function startGame() {
  startUp = prompt("Do you want to play?", "Yes or No");
  
    if(startUp == "Yes")  {
        userName = prompt("What is your name?");
    } else if (startUp == "No"){
        alert("No? Are you afraid you will loose?");
        exit(true);
        
    } else {
      alert("Invalid, Yes or No response only.");
      startGame();
      return;
    }
}


// calls function for the results of the game
gameOver();
console.log("Grant's Deaths: " + grantDeaths);
console.log(userName + "'s Health: " + userHealth);
console.log(userName + "'s Wins: " + userWins);