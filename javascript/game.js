$(document).ready(function(){
	$("img").click(function playerSelect(){
		var nPC = $("img").css("border", "none");
		var charSelect = $(this).css("border", "5px solid orange");
		console.log("An orange border gently wraps itself around the image.");
		var areYouSure = confirm("Is this your desired parent? You cannot change parent candidates halfway through the game.");
		if(areYouSure === false){
			$("img").css("border", "none");
		};
		alert("Okay!" + /*Candidate name*/ + "is your chosen fighter. The battle will begin when the bell rings, I mean, er, the OK button clicks. Good luck, and may the best parent win and live to tell the tale!");
		console.log("The player has now selected his/her fighter.");
		$("p").remove();
		$("h3").remove();

		// charSelect.css("float", "left top");
		// nPC.css("float", "right");
		// $("#game-message").append("Now you must choose an opponent to fight, and continue to fight until your candidate either dies or becomes the last man standing.");
		// $("#game-message").css("width", 1);
	});//End player select feature
	// $("img").click(function);
	$("img").click(function opponentSelect(){
		charSelect = $(this).css("border", "5px solid green");
		console.log("A green frame delicately embraces the illustration.")	
		var areYouSure = confirm(confirm("Will this be next opponent? You may halt a battle and retreat, but neither you nor any of your opponents may recover health at any point in the game."));
		if(areYourSure == false){
			$("img").css("border", "none");
		};
		alert("Okay!" + /*Opponent name*/ + "is now your current opponent.");
		console.log("The player has now selected his/her opponent.");
	});
});