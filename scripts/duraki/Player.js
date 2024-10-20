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

    async takeCards() {
        while (this.playerCards.length < 6) {
            // 1. gets pulled cards name
            let deltCardName = CardStack.object.dealACard();
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
            await sleep(100);
        }
    } 
}