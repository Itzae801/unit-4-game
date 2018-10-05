var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// Setters
// Getters

// $(".crystal").attr('class');

var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'./assets/images/blackcrystal.jpg', 
			'./assets/images/bluecrystal.jpg', 
			'./assets/images/pinkcrystal.png', 
			'./assets/images/greencrystal.jpg', 
            ];
            
           
		
	random_result = Math.floor(Math.random() * 69 ) + 30; 


	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

	$("#previous").html("Total Score: " + previous);

}


resetAndStart();


// Event Delegation
$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("You lost: " + lost);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$("#win").html("You win: " + win);

		previous = 0;

		resetAndStart();

	}

});


