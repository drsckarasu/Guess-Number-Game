const BASE_FINAL_PRIZE = 0;
const PRIZE_MAX = 100;
const PRIZE_MID = 50;
const PRIZE_MIN = 25;
const BASE_PRIZE = [PRIZE_MAX, PRIZE_MID, PRIZE_MIN];
const BASE_MAX = 8;
const ATTEMPS = 3;
const PRIZE_INCREMENT = 2;
const MAX_INCREMENT = 4;
let max = BASE_MAX;
let finalPrize = BASE_FINAL_PRIZE;
let prize = BASE_PRIZE;
let isContinue = confirm('Do you want to play a game?');
if (isContinue) {
    while (isContinue) {
        result();
    }
} else {
    alert('You did not become a billionaire, but can.');
}
function getRandom(max) {
    return parseInt(Math.floor(Math.random() * (max + 1)))
}     
function result() {
    let randomNumber = getRandom(max);
    for (let i = 0; i < ATTEMPS; i++) {
        let pocket = +prompt(
            'Choose a roulette number from 0 to ' + max + '\n' +
            'Attemps left: ' + (ATTEMPS-i) + '\n' +
            'Total prize: ' + finalPrize + '$' + '\n' +
            'Possible prize on current attemp: ' + prize[i] + '$');
        if (pocket === randomNumber) {
            finalPrize += prize[i]
            isContinue = confirm(`Congratulation, you won! Your prize is: ${finalPrize} $. Do you want to continue?`);
            if (isContinue) {
                prize = prize.map(x => x * PRIZE_INCREMENT)
                max += MAX_INCREMENT
            } else {
                alert(`Thank you for your participation. Your prize is: ${finalPrize} $`)
                isContinue = confirm('Do you want to play again?')
                if (isContinue) {
                    prize = BASE_PRIZE
                    finalPrize = BASE_FINAL_PRIZE
                    max = BASE_MAX
                } else {
                    alert('You did not become a billionaire, but can.')
                }
            }
            return
        }
    }
    alert(`Thank you for your participation. Your prize is: ${finalPrize} $`)
    isContinue = confirm('Do you want to play again?') 
    if (isContinue) {
        prize = BASE_PRIZE
        finalPrize = BASE_FINAL_PRIZE
        max = BASE_MAX
    } else {
        alert('You did not become a billionaire, but can.')
    }
}