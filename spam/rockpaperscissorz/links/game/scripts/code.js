let scorePlayer = 0;
let scoreBot = 0;

const setup = () => {
    let rock = document.getElementById("btnrock");
    rock.addEventListener("click",turnTaken);

    let paper = document.getElementById("btnpaper");
    paper.addEventListener("click",turnTaken);

    let scissors = document.getElementById("btnscissors");
    scissors.addEventListener("click",turnTaken);
}

const turnTaken = (event) =>{
    let choice = event.target.getAttribute("id");
    choice = choice.substring(3);

    let choiceBot = getRandomChoiceBot();

    checkWinner(choice, choiceBot);
}

const getRandomChoiceBot = () => {

    let choices = ["rock", "paper", "scissors"];
    let random = Math.random() * 3 ;
    random = Math.floor(random);
    return choices[random];

}

const checkWinner = (player, bot) => {
    if (player === bot) {
        updateScore("tie", player,bot);
    } else if (player === "rock" && bot === "scissors" || player === "scissors" && bot === "paper" || player === "paper" && bot === "rock") {
        updateScore("player",player,bot);
    } else {
        updateScore("bot", player,bot);
    }
}

const updateScore = (winner, choicePlayer,choiceBot) =>{

    let update = document.getElementById("picks");


    if (winner === "player"){
        scorePlayer++;
        update.innerHTML = "you won! " + choicePlayer + " beats " + choiceBot;
    } else if (winner === "bot"){
        scoreBot++;

        update.innerHTML = "bot won! " + choicePlayer + " loses to " + choiceBot;
    } else{
        scoreBot++;
        scorePlayer++;

        update.innerHTML = "it's a tie! " + choicePlayer + " ties " + choiceBot;
    }

    let score = document.getElementById("score");
    score.innerHTML = scorePlayer + "-" + scoreBot;
}
window.addEventListener("load", setup);