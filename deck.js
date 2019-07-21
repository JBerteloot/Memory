class Deck {
  constructor() {
    this.pile = []
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
      for (i = this.pile.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = this.pile[i];
          this.pile[i] = this.pile[j];
          this.pile[j] = x;
    }
  } 

    get pack() {
        return this.pile
      }
}