import { Cards } from './Cards.js';
import { CardStack } from './CardStack.js';
import { playerHand, selectedCard, removeSelectedCard } from './Duraki.js';

const sleep = ms => new Promise(r => setTimeout(r, ms));

export class Player {
    static object = new Player()

    constructor() {
        this.playerCards = [];
        this.playersTurn = true;
    }

    playACard(cardsId) {
        // 1. gets removed from inventory
        
        // removes specified element from array
        this.playerCards = this.playerCards.filter((e) => { return e !== cardsId })
        playerHand.removeChild(document.querySelector(`hand-card#${cardsId}`));
    }

    async forceTakeCard() {
        let deltCardName = CardStack.object.dealACard();

            if (deltCardName == undefined) {
                console.log('Player: No more cards in the deck!');
                return; // no more cards to pull
            }

            // 2. add it to the card array
            this.playerCards.push(deltCardName);

            // Creates Card element:  card > img
            let card = document.createElement('hand-card');
            card.id = deltCardName;

            // Gives functionality to the card
            card.addEventListener('click', ()=> {
                // If has chhildren 😡😡😠 remove them
                if (selectedCard.hasChildNodes()) {
                    removeSelectedCard();
                }
                
                selectedCard.id = card.id; // changes id to current card
                let image = document.createElement('img'); // creates element
                image.src = Cards[card.id]['IMAGE']; // assigns src value
                selectedCard.appendChild(image); // 😋😋😋😍
            });

            let cardsImage = document.createElement('img'); // creates element
            cardsImage.src = Cards[deltCardName]['IMAGE']; // assigns src value
            card.appendChild(cardsImage); // adds child
            
            // adds element to the hand
            playerHand.appendChild(card);
            this.calculateHandCardRotation();
            await sleep(100);
    }

    async takeCards() {
        while (this.playerCards.length < 6) {
            // 1. gets pulled cards name
            let deltCardName = CardStack.object.dealACard();

            if (deltCardName == undefined) {
                console.log('Player: No more cards in the deck!');
                return; // no more cards to pull
            }

            // 2. add it to the card array
            this.playerCards.push(deltCardName);

            // Creates Card element:  card > img
            let card = document.createElement('hand-card');
            card.id = deltCardName;

            // Gives functionality to the card
            card.addEventListener('click', ()=> {
                // If has chhildren 😡😡😠 remove them
                if (selectedCard.hasChildNodes()) {
                    removeSelectedCard();
                }
                
                selectedCard.id = card.id; // changes id to current card
                let image = document.createElement('img'); // creates element
                image.src = Cards[card.id]['IMAGE']; // assigns src value
                selectedCard.appendChild(image); // 😋😋😋😍
            });

            let cardsImage = document.createElement('img'); // creates element
            cardsImage.src = Cards[deltCardName]['IMAGE']; // assigns src value
            card.appendChild(cardsImage); // adds child
            
            // adds element to the hand
            playerHand.appendChild(card);

            // rotate hand cards
            this.calculateHandCardRotation();
            await sleep(100);
        }
    }

    calculateHandCardRotation() {
        console.log('Calculating hand card rotation...');
        let handCards = document.querySelectorAll('hand-card');
        let handSize = handCards.length;
        let maxDegrees = 10; // This controls the maximum rotation of hand cards
        let minDegrees = -maxDegrees;
        let evenHand = handSize % 2 == 0;
        let maxArchYPosition = 20; // This controls the arch of hand cards
        let archYPosition = -(maxArchYPosition / 2);

        for(let i = 0; i < handSize; i++) { // Super complex calculations for card rotation and positioning
            if (evenHand && i != handSize / 2) { 
                minDegrees += (maxDegrees * 2) / handSize;
                archYPosition += maxArchYPosition / handSize;
            } else if (!evenHand) {
                archYPosition += maxArchYPosition / (handSize + 1);
                minDegrees += (maxDegrees * 2) / (handSize + 1);
            }
            
            handCards[i].style.transform = `rotateZ(${minDegrees}deg) translateY(${archYPosition**2 - 6}px) scale(100)`;
            console.log(`card rotation: ${minDegrees}deg, position: ${archYPosition**2 - 6}px`);
        }
    }
}