(function(){

  'use strict';
  $(document).ready(init);

  function init(){
    $('#play').click(randArray);
  }

  var ltrs = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  function rand(){
    return Math.floor(Math.random() * 26);
  }

  function addGrid(randLtrs){
    for(var i = 20; i>0; i--){
      var $box = $('<div class="box">').text(randLtrs[i]);
      $('#grid').append($box);
    }
  }

  function randArray(){
    var randLtrs = [];
    for(var i = 20; i>=0; i--){
      randLtrs.push(ltrs[rand()]);
    }
    addGrid(randLtrs);
    console.log(randLtrs);
  }

})();
