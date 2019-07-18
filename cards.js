class Card {
  constructor(icon, value) {
    this.icn = icon
    this.val = value
    //with Material icons: 
    // this.el = `<div class="card"><i class="material-icons">${this.icn}</i></div>`
    // with font awesome icons: 
    this.el = `<div class="card"><i class="fas fa-${this.icn}"></i></div>`
  }

  get icon() {
    return this.icn
  }
}

class Deck {
  constructor() {
    this.pack = []
  }

  createPack() {
    //with Material icons: 
    // const icons = ["card_travel", "flight", "train", "directions_car","map", "directions_boat", "directions_walk", "directions_bike", "motorcycle"]

    //with font awesome icons: 
    const icons = ["suitcase", "passport", "map", "car", "hotel", "biking", "train", "plane", "walking"]

    icons.forEach((icn, i) => {
        this.pack.push(new Card(icn, i), new Card(icn, i))
    })
    console.log(this.pack)
    }
    populate(el) {
      const html = this.pack.map(card => card.el).join('')
      el.innerHTML = html
    }

    shuffle() {
      var j, x, i;
      for (i = this.pack.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = this.pack[i];
          this.pack[i] = this.pack[j];
          this.pack[j] = x;
    }
  } 
    //to get the matching pair
  // get deck() {
  //     return this.pack
  //   }
}

var deck = new Deck()
deck.createPack()
var cards = document.querySelector(".cards")
deck.shuffle()
deck.populate(cards)

//to get the matching pairs
// console.log(deck.deck[0].icon, deck.deck[1].icon, deck.deck[2].icon, deck.deck[3].icon)