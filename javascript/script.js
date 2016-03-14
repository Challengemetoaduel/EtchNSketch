$(document).ready(function(){
	createGrid(16);

	$('.button').click(function(){
		var size = prompt("Enter a desired grid size:");
		createGrid(size);
	})

})

var createGrid = function(size){
	$('.container').remove();
	$('.button').after('<div class="container"></div>');

	$('.container').width("960px");
	$('.container').height("960px");

	for(var j=1; j<=size; j++){

		var row_n = "<div id='row_" + j + "'></div>";
		var id = "#row_" + j;
		var columnWidth = 960/size + "px";

		$(".container").append(row_n);
		$(id).css("display", "inline-block");
		$(id).width(columnWidth);

		for(var i=1; i<=size; i++){
			var square = "<div class='square' id='id_" + j + "_" + i + "'></div>";
			var coor = "#id_" + j + "_" + i;

			$(id).append(square);
			$(coor).height(columnWidth);
			$(coor).css("background", "#000");
			$(coor).css("opacity", "0");
		}

	}

	hoverOverSquare();
}

var hoverOverSquare = function(){

	$('.square').mouseenter(function(){
		var value = parseFloat($(this).css("opacity"));    
  		if(value<1){
  			if(value<0.2)
  				value = 0.2;
  			else
  				value += 0.1;           
    		$(this).css("opacity", value);
  		}
	})
}