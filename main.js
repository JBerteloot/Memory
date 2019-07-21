var deck = new Deck()
deck.createPack()
var cards = document.querySelector(".cards")
deck.shuffle()
deck.populate(cards)

var numOfFlippedCards = 0;
var firstCardFlippedValue = -1;
var turns = 20;
var flippedCards = 0;

$('#newGame').on('click', function(e) {
  $('.welcome').hide();
  $('.game').show();
});

$('.card').on('click', function(e) {
  $(this).find('.card-back').hide();
  $(this).find('.card-front').show();
  if (numOfFlippedCards == 0) {
    numOfFlippedCards++;
    firstCardFlippedValue = $(this).attr('value');
  } else {
    if (firstCardFlippedValue == $(this).attr('value')) {
      // you made it
      // disable cards TODO
      // increment flippedCards variable
      flippedCards += 2;
      setTimeout(function(e){
        if (flippedCards == deck.pile.length) {
          $('.game').hide();
          $('.youWin').show();
        };
      },1000)
    } else {
      // try again
      var currentCard = $(this);
      setTimeout(function (e) {
        // hide the current card
        currentCard.find('.card-back').show();
        currentCard.find('.card-front').hide();
        // hide the previous card
        console.log($('.card-'+firstCardFlippedValue));
        $('.card-'+firstCardFlippedValue).find('.card-back').show();
        $('.card-'+firstCardFlippedValue).find('.card-front').hide();
      }, 1000);
    }
    turns--;
    numOfFlippedCards = 0;
  }

  setTimeout(function (e) {
    if (turns == 0) {
      $('.game').hide();
      $('.gameOver').show();
    }
  },1000);
});
