// ===== DECK MODULE =====
// Handles all card deck operations including creation, shuffling, and suit symbols
const DeckModule = (function() {
    'use strict';
    
    /**
     * Creates a standard 52-card poker deck
     * @returns {Array} Array of card objects with suit, rank, and value properties
     */
    function createDeck() {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const deck = [];
        
        for (let suit of suits) {
            for (let rank of ranks) {
                deck.push({
                    suit: suit,
                    rank: rank,
                    value: ranks.indexOf(rank) + 2
                });
            }
        }
        
        return deck;
    }
    
    /**
     * Shuffles a deck using Fisher-Yates algorithm
     * @param {Array} deck - The deck to shuffle (modified in place)
     */
    function shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
    
    /**
     * Gets the Unicode symbol for a card suit
     * @param {string} suit - The suit name (hearts, diamonds, clubs, spades)
     * @returns {string} The Unicode symbol for the suit
     */
    function getSuitSymbol(suit) {
        const symbols = {
            'hearts': '♥',
            'diamonds': '♦',
            'clubs': '♣',
            'spades': '♠'
        };
        return symbols[suit];
    }
    
    // Public API
    return {
        createDeck: createDeck,
        shuffleDeck: shuffleDeck,
        getSuitSymbol: getSuitSymbol
    };
})();
