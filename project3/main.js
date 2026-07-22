//my variables
let poseImage;
let word; 
let fabricCover;

let contraction;
let release;
let spiral;
let fall;
let recovery;
let suspension;


let originalLocation;

// wait until the page loads
window.addEventListener("load",()=>{
	// find the pose image in html
	poseImage=document.querySelector("#poseImage");
	// find the word in html
	word=document.querySelector("#word");
	
	fabricCover=document.querySelector("#fabricCover")
	originalLocation = parseInt(window.getComputedStyle(fabricCover).left)

	// shows the correct pose immediatly 
	updatePose();
	// shows the correct word
	updateWord();
	// check the hour every second
	setInterval(updatePose, 1000);
	setInterval(updateWord, 1000);
	setInterval(updateFabricCover, 1000) // how often you are moving pixels

	contraction = document.querySelector("#contraction");
	release = document.querySelector("#release");
	spiral = document.querySelector("#spiral");
	fall = document.querySelector("#fall");
	recovery = document.querySelector("#recovery");
	suspension = document.querySelector("#suspension");
})


//my functions
function updatePose(){
	// get the current date and time 
	let today= new Date();
	// get the current hour (0-23)
	let hour=today.getHours();
	// all the if statments convert the 24-hour time to 12-hour time
	if(hour== 0){
		hour= 12;
	}
	if(hour==13){ 
		hour= 1;
	} 

	if(hour==14){
		hour=2; 
	}

	if(hour==15){
	 	hour=3; 
	 }

	 if(hour==16){
	 	 hour=4; 
	 } 

	 if(hour==17){
	 	 hour=5; 
	 } 

	 if(hour==18){
	 	 hour=6; 
	 } 

	 if(hour==19){
	 	hour=7;
	 } 

	 if(hour==20){ 
	 	hour=8; 
	 }

	 if(hour==21){
	 	 hour=9;
	 } 

	 if(hour==22){
	 	 hour=10;
	 }

	 if(hour==23){
	 	 hour=11;
	 }

	poseImage.src="Img/pose" + hour + ".jpg";

}

function hideWords(){
	contraction.classList.remove("showWord");
    release.classList.remove("showWord");
    spiral.classList.remove("showWord");
    fall.classList.remove("showWord");
    recovery.classList.remove("showWord");
    suspension.classList.remove("showWord");
}

function updateWord(){
	// get the current date and time 
	let today= new Date();
	// get the seconds 
	let second= today.getSeconds ();
	if(second == 0){
		hideWords ();
		contraction.classList.add("showWord");
	}

	if(second == 10){
		hideWords();
		suspension.classList.add("showWord");
	}

	if(second == 20){
		hideWords();
		recovery.classList.add("showWord");
	}

	if(second == 30){
		hideWords();
		release.classList.add("showWord");
	}

	if(second == 40){
		hideWords();
		spiral.classList.add("showWord");
	}

	if(second == 50){
		hideWords();
		fall.classList.add("showWord");
	}

}

function updateFabricCover(){
	let num = parseInt(window.getComputedStyle(fabricCover).left)
	console.log(num)

	let now = new Date();
	if(now.getSeconds() == 0){ // can change depending on when you want to reset
		fabricCover.style.left = originalLocation + "px"
	} else {
		num = num + 5.5 // how many pixels it is moving
		fabricCover.style.left = num + "px"
	}
}	




