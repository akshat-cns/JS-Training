const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// We are setting the computer to be "Rock" by default

function takeUserInput(){
    return new Promise((resolve) => readline.question('Please choose your option: \n \
        1) Rock \n \
        2) Paper\n \
        3) Scissor\n  ', (inputt) => {
            resolve(inputt);
    }))
}

async function execute() {
    let points = 0
    while(points < 5){
    const userInput = await takeUserInput();
    if (userInput=="1") {
        console.log("It's a draw!")
    }
    else if (userInput=="2") {
        console.log("You won this round!!")
        points++;
    }
    else {
        console.log("You lost this round.") 
    }
    }
    console.log("Game over\n You have reached five points !!")
    readline.close();
}

execute();