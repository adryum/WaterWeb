import { CardStack } from "./CardStack.js";
import { Cards } from "./Cards.js";
import { Player } from "./Player.js";

console.log(document.title);

export function removeSelectedCard() {
    selectedCard.id = "none";
    selectedCard.removeChild(selectedCard.lastChild);
    console.log(selectedCard.hasChildNodes());
}

export function createCardWithImage(tagName, id, imgPath) {
    let card = document.createElement(tagName);
    card.id = id;
    let image = document.createElement('img');
    image.src = imgPath;

    card.appendChild(image);
    return card;
}

export function addFieldFunctionalityToCard(cardElement) {
    if (cardElement == undefined) {
        console.error('No card element provided: ' + cardElement);
        return;
    }

    cardElement.addEventListener('click', () => {
        console.log(selectedCard.id)
        if (selectedCard.id != '') { // no id == '' <-- empty 
            let fightersId = cardElement.id; // e.g. DIA3
            let fighterCard = Cards[fightersId]; 
            let defenderCard = Cards[selectedCard.id];
           
            // Adds them to killed card pile
        
            if (
                (fighterCard['TYPE'] == defenderCard['TYPE'] && fighterCard['STRENGTH'] < defenderCard['STRENGTH']) ||
                (defenderCard['TYPE'] == trump['TYPE'] && fighterCard['TYPE'] != trump['TYPE'])
            ) {
                // Card is killed
                // adds dead card bodies to body pile
                deadFighterCards.appendChild(createCardWithImage('fighter', fighterCard, fighterCard['IMAGE']));
                deadDefenderCards.appendChild(createCardWithImage('fighter', defenderCard, defenderCard['IMAGE']));
    
                // removes both cards
                fighterCards.removeChild(document.querySelector(`fighter#${fightersId}`));
                Player.object.playACard(selectedCard.id); // Discards card from his hand
                removeSelectedCard();
    
                console.log('combaat wictory');
            
            } else {
                selectedCard.animate(
                    [
                        {transform: 'rotateZ(0deg)'},
                        {transform: 'rotateZ(5deg)'},
                        {transform: 'rotateZ(-5deg)'},
                        {transform: 'rotateZ(0deg)'}
                    ],
                    {
                        duration: 200,
                        iterations: 1
                    }
                );
            }
        }
    });
}

export let playerHand = document.querySelector('player-hand-cards');
export let selectedCard = document.querySelector('selected-card');
export let fighterCards = document.querySelector('fighter-cards');
let deadFighterCards = document.querySelector('dead-fighter');
let deadDefenderCards = document.querySelector('dead-defender');

let gameStarted = false;
let boardCloseUp = false;
let sentFighterCard = undefined;
let cardsOnField;
let oponentCards;
let cardsOnTheField;
let trump = Cards['KLE4'];

// For visual stuff
let gameTable = document.querySelector('game-table');

// gives events to stuff vvvvv
document.querySelector('card-stack').addEventListener('click', () => {
    console.log('Picking cards...');
    Player.object.takeCards();
});
// document.addEventListener('keydown', event => {
//     if (event.key == 'Escape') {
//         console.log(`key down = ${event.key}`);
//     }
// });

document.addEventListener('keyup', event => {
    switch (event.key.toLocaleUpperCase()) {
        case 'ESCAPE': {
            if (selectedCard.hasChildNodes()) {
                removeSelectedCard()
            }
            break;
        }
        case 'W': {
            boardCloseUp = !boardCloseUp;
            if (boardCloseUp) {
                gameTable.style.transform = 'translate(-50%) rotateX(0deg)';
            } else {
                gameTable.style.transform = 'translate(-50%) rotateX(15deg)';
            }
            break;
        }
    }
    // console.log(`key up = ${event.key}`);
});

document.querySelector('start-game').addEventListener('click', () => {
    if (!gameStarted) {
        gameStarted = true;
    } else {
        gameStarted = false;
    }
    console.log(gameStarted);
});
document.querySelector('pull-cards').addEventListener('click', () => {
    CardStack.object.placeOnTable(5);
});

document.querySelector('force-take-card').addEventListener('click', () => {
    Player.object.forceTakeCard();
});


// console.log(Cards["DIA2"]) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

setInterval(() => {
   
    if (gameStarted) {
        // if () {

        // }
    }
}, 33); // 16.6 = 60 frames