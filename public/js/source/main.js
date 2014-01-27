(function(){

  'use strict';
  $(document).ready(init);

  function init(){
    $('#play').click(randArray);
    $('#grid').on('click', '.box', reveal);
    $('#reset').click(clear);
  }

  var total = 0;
  var trys = 0;
  var score = 0;
  var revealed = [];
  var randLtrs;
  var ltrs = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  function rand(){
    return Math.floor(Math.random() * ltrs.length);
  }

  function displayLtrs(picks){
    var str = picks.join(' ');
    $('#letters').text(str);
  }

  function randArray(){
    randLtrs = [];
    //debugger;
    for(var i = 10; i>0; i--){
      var ltr = ltrs.splice(rand(),1);
      randLtrs.push(ltr[0]);
    }
    randLtrs = randLtrs.concat(randLtrs);
    shuffleLtrs(randLtrs);
    displayLtrs(randLtrs);
    console.log(randLtrs);
  }

  function reveal(){
    if ($(this).hasClass('showing')){return;}
    if (revealed.length >= 2){return;}

    $(this).addClass('showing').text(randLtrs[$(this).index()]);
    revealed.push(this);
    if (revealed.length === 1){return;}
    if ($(revealed[0]).text() === $(revealed[1]).text()){
      score ++;
      $('#score').text(score);
      revealed = [];
      total ++;
      winDisplay();
      return;
    }
    trys ++;
    $('#trys').text(trys);
    setTimeout(function(){
      $(revealed[0]).removeClass('showing').text('');
      $(revealed[1]).removeClass('showing').text('');
      revealed = [];
    },2000);
  }

  function shuffleLtrs(dupLtrs) {
    for(var i = dupLtrs.length -1; i>0; i--) {
      var j = rand();
      var temp = dupLtrs[i];
      dupLtrs[i] = dupLtrs[j];
      dupLtrs[j] = temp;
    }
    return dupLtrs;
  }

  function clear(){
    ltrs = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    randArray();
    revealed = [];
    $('.box').each(function(idx, el){
      $(el).text('').removeClass('showing');
    });
  }

  function winDisplay(){
    if (total === 9){
      $('.box').each(function(idx,el){
        console.log('hi');
        $(el).text(randLtrs[$(el).index()]);
      });
    }
  }

})();
