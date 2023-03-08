

var points = 0;
var autoClickLvl = 0;


document.body.onload = onStartFunction;

// SET GAME UPDATE INTERVAL //
setInterval(mainGameLoop, 1000);


function onStartFunction() {
	console.log("On load func" );

};

// MAIN GAME LOOP //
function mainGameLoop() {
	console.log("Update" );

};


function clickMe() {
	points += 1;

	var pointsText = document.getElementById("pointsText");
	
	console.log("Clicked circle: " + points);
	pointsText.innerHTML = points;
	
	
};

function newClicker() {
	
	if (points >= 10){
		autoClickLvl += 1;
		points -= 10;
		
		var pointsText = document.getElementById("pointsText");
		pointsText.innerHTML = points;
		
		addElement();
	}
	else {
		alert("Not enough points!");
	}

	
	
};





function addElement () { 
	// create a new div element 
	const newA = document.createElement("a");
	
	const newDiv = document.createElement("div");
	newDiv.id = "clickMe";
	
	newA.appendChild(newDiv);  
	
	
	// add the newly created element and its content into the DOM 
	const mainContent = document.getElementById("mainContent"); 
	mainContent.appendChild(newA);  
	//document.body.insertBefore(newA, insertTarget); 
  
  
  
  
}