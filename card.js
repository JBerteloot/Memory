class Card {
  constructor(icon, value) {
    this.icn = icon
    this.val = value
    //with Material icons: 
    // this.el = `<div class="front-card"><i class="material-icons">${this.icn}</i></div>`
    // with font awesome icons: 
    this.el = 
    // `
    // <div class=flip-card icon="${this.icn}" index="${this.value}">
    //   <div class="flip-card-inner">
    //     <div class="flip-card-front">
    //       <div class="front-card"></div>
    //     </div>
    //     <div class="flip-card-back">
    //       <i class="fas fa-${this.icn}"></i>
    //     </div>
    //   </div>
    // </div>
    // `
    `<div class="card card-${this.val}" value="${this.val}">
      <div class="card-back"></div>
      <div class="card-front"><i class="fas fa-${this.icn}"></i></div>
    </div>`
  }

  get icon() {
    return this.icn
  }
}

//to get the matching pairs
// console.log(deck.deck[0].icon, deck.deck[1].icon, deck.deck[2].icon, deck.deck[3].icon)