var p1 = prompt("What say you Player 1? Rock, paper, or sissor?");
var p2 = prompt("What say you Player 2? Rock, paper, or sissor?");

document.write("Player 1 chooses: " + p1 + ". ");
document.write("Player 2 chooses: " + p2 + ".");

function rps(p1, p2){
    if(p1 === p2){
        document.write("<h2>You have tied! Try again!</h2>");
    }else if(p1 === "rock" && p2 === "paper"){
        document.write("<h2>Player 2 wins!</h2>");
    }else if(p1 === "rock" && p2 === "sissor"){
        document.write("<h2>Player 1 wins!</h2>");
    }else if(p1 === "sissor" && p2 === "rock"){
        document.write("<h2>Player 2 wins!</h2>");
    }else if(p1 === "sissor" && p2 === "paper"){
        document.write("<h2>Player 1 wins!</h2>");
    }else if(p1 === "paper" && p2 === "rock"){
        document.write("<h2>Player 1 wins!</h2>");
    }else if(p1 === "paper" && p2 === "sissor"){
        document.write("<h2>Player 2 wins!</h2>");
    }
};

rps(p1, p2)