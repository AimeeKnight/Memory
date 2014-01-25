(function(){

  'use strict';
  $(document).ready(init);

  function init(){
    $('#play').click(randArray);
    $('#grid').on('click', '.box', reveal);
    $('#clear').click(randArray);
  }

  var trys = 0;
  var score = 0;
  var revealed = [];
  var randLtrs;
  var ltrs = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  function rand(){
    return Math.floor(Math.random() * ltrs.length);
  }

  function addGrid(){
    var str = ltrs.join(' ');
    $('#letters').text(str);
  }

  function randArray(){
    randLtrs = [];
    for(var i = 10; i>0; i--){
      var ltr = ltrs.splice(rand(),1);
      randLtrs.push(ltr[0]);
    }
    randLtrs = randLtrs.concat(randLtrs);
    shuffleLtrs(randLtrs);
    addGrid();
    console.log(randLtrs);
  }

  function reveal(){
    if ($(this).hasClass('showing')){return;}
    if (revealed.length >= 2){return;}

    $(this).addClass('showing').text(randLtrs[$(this).index()]);
    revealed.push(this);
    if (revealed.length === 1){return;}
    if ($(revealed[0]).text() === $(revealed[1]).text()){
      $('#score').text(score + 1);
      revealed = [];
      return;
    }
    $('#trys').text(trys + 1);
    setTimeout(function(){
      $(revealed[0]).removeClass('showing').text('');
      $(revealed[1]).removeClass('showing').text('');
      revealed = [];
    },3000);
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

})();
