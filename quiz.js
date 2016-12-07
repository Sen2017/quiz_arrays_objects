/*

	Edsen Casintahan
	Arrays and Objects Quiz
	Dec. 7, 2016

*/

var myArray = ["I", "she", 10, true];

console.log(myArray[2]);

function hi (a){
	if (myArray[3] === true){
		console.log(myArray[0] + "think" + myArray[1] + " is a " + myArray[2]);
	}else{
		console.log("you shall not pass!");
	}
}

var batman = {
	man : true,
	utilityBelt : ["Knife", "baseball bat", "Batarang", "vegetables"],
	vehicle : "batmobile",
	sidekick: "Robin"
}

function batman (a){
	if (batman.man === true){
		console.log("batman has " + batman.utilityBelt[3] + " a " + batman.vehicle + " with " + batman.sidekick + " by his side.");
	}else{
		console.log("No, I'm the bat.");
	}
}

batman(batman);