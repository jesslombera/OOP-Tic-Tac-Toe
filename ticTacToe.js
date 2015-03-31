//window.addEventListener("load", function() {
  $(function() {
  // Variable used to keep track of the next player
  var i = 0;
  
  $('.board').click(function(event) {
  	var box = event.target;
  	if (box.innerHTML=='') {

        // fill the box text with the next player (either X or O)
        box.innerHTML = nextPlayer();
        
        // change the class of the box because it is now selected
        box.className = 'box selected';

        // call the check winner function
        checkWinner();
        
      }
});
  




  // returns x and o, switching every time
  var nextPlayer = function() {
    // if i is odd, return "o" if it's even return "x"
    // return(i++ % 2 ? 'o' : 'x');  // shorthand version
    if (i++ % 2) {
      return 'O';
    } else {
      return 'X';
    }
  }
  
  // check if any of the players has a winning combination and if so, returns an alert
  var checkWinner = function() {
    
    // defines the different winning combinations
    var combos = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [4, 5, 6],
      [7, 5, 3],
      [7, 8, 9],
      [3, 6, 9],
      [2, 5, 8],
    ];
    
    // repeat for each winning combination
    for (j = 0; j < combos.length; j++) {
      
      // the 2 different player types
      var players = ['X', 'O']
      
      // repeat the checks below for each player type
      for (p = 0; p < players.length; p++) {
        
        // if the winner has the winning combination, announce the winner
        if (
          // check if the player has the winning combination

          document.getElementById('box' + combos[j][0]).innerHTML == players[p] && 
          document.getElementById('box' + combos[j][1]).innerHTML == players[p] && 
          document.getElementById('box' + combos[j][2]).innerHTML == players[p]	
        ) {
          alert(players[p] + ' won!');
        }        
      }
    }
  }
  

  
  	 
    var resetB = function() {
    // repeat for each box
    
          $('.box').html('');
      
      	$('.box').removeClass('selected');
  }
   	$('#reset').click(resetB); 
  });
  









