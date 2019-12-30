let firstGameInvitation = confirm('Do you want to play a game?');
let minPocket = 0;
let maxPocketDefault = 8;
let pocketIncreaser = 4;
let userNumber;
let attemptCounter;
let attemptQuality = 3;
let randomNumber;
let winnerMessage;
let winnerMessageRepeat;
let userPrize = 0;
let defaultPrize = 100;
let prizeCoeficient = 2;
let nextLevelPrize;
let currentLevelPrize;
let maxPocket;
let confirmGame = true;
let promptInfoPart;
let winnerMessageWording;
let stopGame = false;

if (firstGameInvitation && confirmGame) {
    nextLevelPrize = defaultPrize;
    maxPocket = maxPocketDefault;
    for (let i = 0; ;i++) {
        attemptCounter = attemptQuality;
        currentLevelPrize = nextLevelPrize;
        randomNumber = Math.floor(Math.random() * (maxPocket - minPocket + 1)) + minPocket;
        while (attemptCounter > 0) {
            promptInfoPart = 'Possible prize on current attempt: ' + currentLevelPrize;
            let promptInfo = 'Attempts left: '+attemptCounter+'\n'+'Total prize: '+userPrize+'\n'+promptInfoPart;
            userNumber = parseInt(prompt('Choose a roulette pocket number from 0 to ' + maxPocket + '\n' + promptInfo));
            if (userNumber === randomNumber) {
                winnerMessageWording = 'Congratulation, you won! Your prize is ' + currentLevelPrize;
                winnerMessage = confirm(winnerMessageWording + '$. Do you want to continue?');
                userPrize += currentLevelPrize;
                maxPocket += pocketIncreaser;
                nextLevelPrize = nextLevelPrize * prizeCoeficient;
                if (winnerMessage) {
                    break;
                } else {
                    alert('Thank you for your participation. Your prize is ' + currentLevelPrize + '$');
                    if (confirm('Play again?')) {
                        break;
                    } else {
                        alert('Game is over');
                        stopGame = true;
                    }
                }
            }
            currentLevelPrize = currentLevelPrize / prizeCoeficient;
            attemptCounter --;
            if(stopGame) {
                break;
            }
        }
        if (userNumber !== randomNumber && attemptCounter < 1) {
            userPrize = 0;
            alert('Thak you for you participation. Your prize is ' + userPrize + '$.');
            confirmGame = confirm('Do you want to start a game from the begining?');
            if (!confirmGame) {
                alert('Game is over.');
                break;
            } else {
                userPrize = 0;
                nextLevelPrize = defaultPrize;
                maxPocket = maxPocketDefault;
            }
        }
        if(stopGame) {
            break;
        }
    }
} else {
    alert('You did not become a billionaire but you can.')
}