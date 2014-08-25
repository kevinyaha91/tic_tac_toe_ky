var app = angular.module('ttt', []);
app.controller('tttCtrl', function($scope){
$scope.board = ['', '', '', '', '', '', '', '', ''];

});









/*  Matthias way
var app = angular.module('ttt', []);
app.controller('tttCtrl', ['$scope', function($scope){
	$scope.game_board = [
	['', '', ''],
	['', '', ''],
	['', '', ''],
	];

	$scope.takeOverAFieldOnTheGameBoard = function(x, y, symbol){
		$scope.game_board[x][y] = symbol;

	};



	$scope.takeOverAFieldOnTheGameBoard(0,0,'x');
	console.log($scope.game_board);
}])

*/

