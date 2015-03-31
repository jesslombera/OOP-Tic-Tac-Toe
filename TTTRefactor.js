$(function() {

// Global variable to keep track of the next player
//var i = 0;

// Constructor of Player
function Player(choose) {
  	this.mark = choose;
  }; 

// Constructor of Board
function Board() {
	this.playerX = new Player('X');
	this.playerO = new Player('O');
	this.$board = $('.box');
	this.$reset = $('#reset');
	this.currentPlayer = this.playerX;
	this.counter = 1;


	}



// Prototype for toggling players
Board.prototype.nextPlayer = function() {
	
	if (this.counter % 2 === 0) {
		this.currentPlayer = this.playerX;
	} else {
		this.currentPlayer = this.playerO;
	}
		this.counter += 1;

		
	};

Board.prototype.checkWinner = function() {
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
    for(var j = 0; j < combos.length; j++) {
    	var players = [this.playerX,this.playerO];
    
    for (var p = 0; p < players.length; p++) {
    	if  (document.getElementById('box' + combos[j][0]).innerHTML == players[p] && 
          	document.getElementById('box' + combos[j][1]).innerHTML == players[p] && 
          	document.getElementById('box' + combos[j][2]).innerHTML == players[p]	
    	) {
    		alert(players[p] + ' WON!');

    	}
    }	

    }


};


Board.prototype.init = function() {
	var _this = this;


	this.$board.click(function(event) {
		console.log("I clicked");
	
		var $box = $(event.target);
		console.log($box);
		$box.html(_this.currentPlayer.mark).off('click');
		
    _this.nextPlayer();
	});

	var _this = this;
	this.$reset.click(function(event) {
	console.log(_this.$board);
	_this.$board.html("&nbsp");

});



};









 var board = new Board();
 board.init();
 

});












