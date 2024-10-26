let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let dispUserScore = document.querySelector("#user-score");
let dispCompScore = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

// Generate user choice
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Generate computer choice
const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const rndIdx = Math.floor(Math.random()*(2+1));
    return options[rndIdx];
}

const playGame = (userChoice) => {
    console.log("User Choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice =",compChoice);
    
    if(userChoice === compChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){ // paper,scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){ // rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

const gameDraw = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#09477c";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        console.log("You Won!!");
        msg.innerText = `You Won!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        dispUserScore.innerText = userScore;
    }
    else{
        console.log("You lose!!");
        msg.innerText = `You Lose!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        dispCompScore.innerText = compScore;
    }

}