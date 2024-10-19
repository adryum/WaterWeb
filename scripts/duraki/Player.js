import { CardStack } from './CardStack.js';

export class Player {
    constructor() {
        this.playerCards = [];
        this.playersTurn = true;
    }

    playACard(cardsId) {
        // 1. Check if it is a viable card to play

        // 2. Play the card
        let playedCard = this.playerCards[cardsId];
        this.playerCards = this.playerCards.splice(cardsId);
        return playedCard;
    }

    takeCards() {
        while (this.playerCards.length < 6) {
            this.playerCards.push(CardStack.object.cardStack)
        }
    } 
}