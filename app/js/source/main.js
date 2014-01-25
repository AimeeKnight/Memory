(function(){

  'use strict';
  $(document).ready(init);

  function init(){
    $('#play').click(randArray);
    $('#grid').on('mousedown', '.box', match);
  }

  var randLtrs;
  var ltrs = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  function rand(){
    return Math.floor(Math.random() * ltrs.length);
  }

  function addGrid(){
    for(var i = 20; i>0; i--){
      var $box = $('<div class="box">');
      $('#grid').append($box);
    }
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

  function match(){
    var $this = $(this);
    var idx = $this.index();
    var thisVal = randLtrs[idx];
    $this.text(thisVal);
    $this.mouseup(function(){
      $this.text('');
    });
  }

  function shuffleLtrs(dupLtrs) {
    for (var i = dupLtrs.length -1; i>0; i--) {
      var j = rand();
      var temp = dupLtrs[i];
      dupLtrs[i] = dupLtrs[j];
      dupLtrs[j] = temp;
    }
    return dupLtrs;
  }
})();
