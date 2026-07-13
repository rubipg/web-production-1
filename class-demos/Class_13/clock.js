window.addEventListener("load", ()=>{
	let dateElement = document.querySelector('#date')

// Date.now() get the time since epoch (Jan 1 1970) in ms
	let date = new Date()
	let currentTime = Date.now ()
	console.log(currentTime)

// when we click the webpage
	document.body.addEventListener("click", ()=>{
		console.log(Date.now())
		let newTime = Date.now()
		// print out the time string (this is a string without calculation using .getHours, .getMinutes, .getSeconds)
		let stringTime = newTime.toLocaleTimeString()
		console.log(stringTime)
	})

// added movement based off time using css
	let movement = document.querySelector("#move")
// setting a starting number
	let starting = 50 
// converting to px string for css formatting 
	movement.style.top = starting + "px"


// 1st param: annonymous function that is the action 
// 2nd param (100): time in ms
	setInterval(()=>{
		// changing the starting position by 1
		starting = starting + 1
		// if the starting var is > 100, reset it back to original position 
		if(starting > 100){
			starting = 50
		}
		movement.style.top = starting + "px"

	},100)
})