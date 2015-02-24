
	$(document).ready(function (){
			var turn = 1;
	$('td').on('click', function(){
		if (turn % 2 === 0){
			$(this).text('O');
		}else{
			$(this).text('X');
		}
			turn++;
			$(this).off('click');
			checkwin();
		})	
})
	
wins=[ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

function checkwin() {
	for(var i=0; i < wins.length; i++) {
		var cell1 = $('#' + wins[i][0]).text();
		var cell2 = $('#' + wins[i][1]).text();
		var cell3 = $('#' + wins[i][2]).text();

		if (cell1 === cell2 && cell2 === cell3 && cell1 != "") {
	 		alert("You win!");
		}
	}
}
