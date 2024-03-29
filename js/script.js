//Challenge 1: Your age in days

function ageInDays() {
var birthYear = prompt('What year were you born?');
var ageInDayss = (2021 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days.');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement('img');
    image.src = "https://thumbs.gfycat.com/HighSnivelingIberiannase-max-1mb.gif";
    document.getElementById('flex-cat-gen').appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;

    humanChoice = yourChoice.id;
    console.log('Your Choice: '+ humanChoice);

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice: ' + botChoice);

    results = decideWinner(humanChoice, botChoice); 
    console.log(results);
    
    message = finalMessage(results);// {'message': 'You won!', 'color': 'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You Lost!', 'color':'red'};
    }
    else if (yourScore === 0.5) {
        return {'message': 'You Tied!', 'color':'yellow'};
    }
    else {
        return {'message': 'You Won!', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // My technique
    var humanImage = document.createElement('img');
    humanImage.src = imageDatabase[humanImageChoice];
    humanImage.setAttribute('height', '150');
    humanImage.setAttribute('width', '150');
    humanImage.style.boxShadow = "0px 10px 50px rgba(37, 50, 233, 1)";

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(finalMessage['message']);
    h1.setAttribute('id', 'message');
    h1.appendChild(textAnswer);
    h1.style.color = finalMessage['color'];
    h1.style.fontSize = '40px';
    h1.style.padding = '60px';
    h1.style.textAlign = 'center';

    var computerImage = document.createElement('img');
    computerImage.src = imageDatabase[botImageChoice];
    computerImage.setAttribute('height', '150');
    computerImage.setAttribute('width', '150');
    computerImage.style.boxShadow = "0px 10px 50px rgba(243, 38, 24, 1)";

    document.getElementById('flex-box-rps').appendChild(humanImage);
    document.getElementById('flex-box-rps').appendChild(h1);
    document.getElementById('flex-box-rps').appendChild(computerImage);

    //other
    /*var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps').appendChild(humanDiv);
    document.getElementById('flex-box-rps').appendChild(messageDiv);
    document.getElementById('flex-box-rps').appendChild(botDiv);*/

}

// Challenge 4: Change the Color of All Buttons!
var all_buttons = document.getElementsByTagName('button');
//console.log(all_buttons);

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);//copyAllButton[0].classList//copyAllButton[0].classList.remove('btn-primary');copyAllButton[0].classList.add('btn-primary');

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value == 'red') {
        buttonsRed();
    } else if (buttonThingy.value == 'green') {
        buttonsGreen();
    } else if (buttonThingy.value == 'blue') {
        buttonsBlue();
    }else if (buttonThingy.value == 'yellow') {
        buttonsYellow();
    } else if (buttonThingy.value == 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value == 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsBlue() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}

function buttonsYellow() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

function buttonColorReset() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    for(let i=0; i < all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

// Challenge 5: Blackjack
let blackjackGame = {
    'you' : {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer' : {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap' : {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1,11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if(blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
    }


function showCard(card, activePlayer) {
    if(activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {
    // showResult(computeWinner());
    //let winner = computeWinner();
    //showResult(winner);
    if(blackjackGame['turnsOver'] === true) {
        blackjackGame['isStand'] = false;
        let yourImages = document.querySelector(YOU['div']).querySelectorAll('img');
        let dealerImages = document.querySelector(DEALER['div']).querySelectorAll('img');

        for(let i=0; i < yourImages.length; i++){
            yourImages[i].remove();
        }

        for(let i=0; i < dealerImages.length; i++){
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector(YOU['scoreSpan']).textContent = 0;
        document.querySelector(DEALER['scoreSpan']).textContent = 0;

        document.querySelector(YOU['scoreSpan']).style.color = 'white';
        document.querySelector(DEALER['scoreSpan']).style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let's Play!";
        document.querySelector('#blackjack-result').style.color = 'black';

        blackjackGame['turnsOver'] = true;
    }
}

function updateScore(card, activePlayer) {
    if(card === 'A') {
    //If adding 11 keeps me below 21, add 11. Otherwise, add 1.
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];//A:[1,11]. Here, we pick 11.
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];//A:[1,11]. Here, we pick 1.
        }
    } else  {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    //if (DEALER['score'] > 15) {
    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
    //} 
}

// compute winner and return who just won
// update the wins, draws and losses
function computeWinner() {
    let winner;

    if(YOU['score'] <= 21) {
        // condition: higher score than deaaler or when dealer busts but you're 21 or under
        if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            blackjackGame['wins']++;
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;
        } else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
        }

    // condition: when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;
        winner = DEALER;

    // condition: when you AND the dealer busts  
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++; 
    }

    console.log(blackjackGame);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true) {

        if(winner === YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You Won!';
            messageColor = 'green';
            winSound.play();
        } else if(winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You Lost!';
            messageColor = 'red';
            lossSound.play();
        }
        else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You Drew!';
            messageColor = 'black';
        }
    
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color= messageColor;
    }
}




