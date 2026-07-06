// to write comments
// if you use the hotkeys command + / it will automatically switch based on file type
// order is important

// semi-colons (;) are optional in js
// function name = alert ()
// parameter = 'this is a javascript alert!'
// text that is wrapped in '' or "" is called a string
// something is wrong when the color is wrong and there is weird syntax 
alert('this is a javascript alert!')
// this will not work because it is reading apostrophne in i've as code syntax instead of a character 
// alert('i've changed this text)


// this does not show up on the webpage
// you need to open the inspector click console at the top to see the message
// function name = log
// parameter = 'this is a console message'
// log belongs to the console, the period mean it belongs to the console
// log does not exist outside of the console
console.log('this is a console message')

// The console is a tool for us to locate the error

// in order for js to manipulate the HTML, the HTML file needs to be fully loaded.
// we detect when the page has loaded using 
// addEventListener () = function
//"load" = parameter #1, which event we are looking for 
// we are waiting for the WINDOW to finish LOAD the HTMl 
// ()=>{} is parameter #2, the action/ function execure when the page has fully loaded
window.addEventListener("load",()=>{
	// all of our code that changes the HTML/CC will live inside these {}
	console.log('page has loaded, js connected')

	// to change something in js we need to grab the specific element we are changing 
	// document = HTML document
	// getElementById () = function to retrieve an element name
	// 'big-paragraph' = name of the id, without #
	// .textContent = html inside of the <p> to change
	// .textContent does not accept html tags in the text, you would need to use ".innerHTML" 
	document.getElementById('big-paragraph').textContent = 'changed with js'

	//querySelector for class needs the CSS selector with the . 
	// querySelector () = function to retrieve an element using CSS selector syntax. it retrieves the first item that matches the CSS selector
	document.querySelector('.red-paragraph').innerHTML = '<em> chnaged again </em>'


	//querySelector for ids needs the CSS selector with the #
	// to grab the style we use .style
	// to change a specific style property we use the CSS property name without hypen (-)
	// converting this css rule to js
	// #big-paragrpah {background-color : blue}

	document.querySelector('#big-paragraph').style.backgroundColor = 'lightblue'

	// grab the #another id and add a class to it
	// add() = function name
	// 'red-paragraph' = parameter of the class name you want to add
	document.querySelector('#another').classList.add('red-paragraph')

	// creating a variable so we don't have to write document.getElementById over and over 
	let sp = document.getElementById('special')
	sp.textContent = 'this is a very special paragraph'
	sp.style.fontSize = '50px'
	sp.style.color = '#f00699'

	//remove elements
	let another = document.querySelector ('#another')
	another.remove()

	// add HTML elements after the page has loaded
	// 1. use the createElement () function to decide which tag is being created 
		// creasteElement() = function name 
		// 'hi' = parameter, with the name of the tag
	let newElement = document.createElement('h1')

	// 2. make any changes to the element as needed
	newElement.textContent = 'this was added with js'

	// 3. add the element to the page
		// we can add to the body
	document.body.appendChild(newElement)
		// we can add to a parent container 

	document.querySelector('#container').appendChild(newElement)
})

// window.onload =() => {} the is the shorthand 



















