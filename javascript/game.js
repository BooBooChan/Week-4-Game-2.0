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
		var player = $(this).addClass("player");

		//Now, make sure that the player character can't be reselected.

		var classy = $("img").attr("class");
		if (classy !== "player"){
			$("img").addClass("opponent");
		};//End if(classy) conditional

	});//End player select feature
	// $("img").click(function);
	if(playerSelect = true){
		$(".opponent").click(function opponentSelect(){
			if($("img").attr("class") === "opponent"){
				var charSelect = $(this).css("border", "5px solid green");
				console.log("A green frame delicately embraces the illustration.")	
				var areYouSure = confirm(confirm("Will this be next opponent? You may halt a battle and retreat, but neither you nor any of your opponents may recover health at any point in the game."));
				if(areYourSure == false){
					$("img").css("border", "none");
				};
				alert("Okay!" + /*Opponent name*/ + "is now your current opponent.");
				console.log("The player has now selected his/her opponent.");
			};//End if($("img")) statement	
		});	//End opponentSelect()	
	};//End if($(".player")) conditional

	/*Redeclaring jQuery events does not create 2 new function, it just redefines the same event. That's why the code thought the selected player was also the selected opponent. Place event in separate functions, not vice versa.*/





});//End document.ready() jQuery thingy.