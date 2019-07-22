class Card {
  constructor(icon, value) {
    this.icn = icon
    this.val = value
    //with Material icons: 
    // this.el = `<div class="front-card"><i class="material-icons">${this.icn}</i></div>`
    // with font awesome icons: 
    this.el = 
    `<div class="card card-${this.val}" value="${this.val}">
      <div class="card-back">
        <img src="back.jpeg"/>
      </div>
      <div class="card-front"><i class="fas fa-${this.icn}"></i></div>
    </div>`
  }

  get icon() {
    return this.icn
  }
}