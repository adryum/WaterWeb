import { Cards } from "./Cards.js"
import { fighterCards, createCardWithImage, addFieldFunctionalityToCard } from "./Duraki.js"

export class CardStack {
    static object = new CardStack();

    constructor() {
        this.cardStack = [];
        for (let card in Cards) {
            this.cardStack.push(card);
        }
        this.shuffle();
    }

    placeOnTable(cardAmount) {
        console.log("Placing cards on the table...");

        for(let i = cardAmount; i > 0; i--) {
            let cardId = this.dealACard(); // e.g. DIA3
            let card = createCardWithImage('fighter', cardId, Cards[cardId]['IMAGE']);
            addFieldFunctionalityToCard(card);
            fighterCards.appendChild(card);
        }
    }

    shuffle() {
        let currentIndex = this.cardStack.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [this.cardStack[currentIndex], this.cardStack[randomIndex]] = [
            this.cardStack[randomIndex], this.cardStack[currentIndex]];
        }
    }

    dealACard() {
        let firstElement = this.cardStack[0];
        this.cardStack = this.cardStack.splice(1);
        return firstElement;
    }

    makeNewDeck() {
        object = new CardStack();
    }
}