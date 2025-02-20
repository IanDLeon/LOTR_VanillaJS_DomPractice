console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============
const middleEarth = document.createElement('section')
middleEarth.setAttribute('id', 'middle-earth')

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	//document.createElement('section').setAttribute('id', 'middle-earth')

	// 2. use a for loop to iterate over the lands array that does the following:
	for(let i = 0; i < lands.length; i++){
		const article = document.createElement('article')
		article.setAttribute('id', `${lands[i]}`)
		const h1 = document.createElement('h1')
		h1.innerText = `${lands[i]}`
		article.appendChild(h1)
		console.log('article')
		middleEarth.appendChild(article)

	}
	document.body.appendChild(middleEarth)
	//   2a. creates an article tag (there should be one for each land when the loop is done)

	//   2b. gives each land article an `id` tag of the corresponding land name

	//   2c. includes an h1 with the name of the land inside each land article

	//   2d. appends each land to the middle-earth section

	// 3. append the section to the body of the DOM.
}
makeMiddleEarth()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')


	// display an `unordered list` of hobbits in the shire
	const theShire = document.getElementById('The-Shire')
	const ulHobbit =document.createElement('ul')
	ulHobbit.className = `hobbits`
	ulHobbit.id = `hobbitsid`

	for(let i=0; i<hobbits.length; i++){
		const hobLi = document.createElement('li')
		hobLi.textContent = hobbits[i]
		hobLi.id = `${hobbits[i]}`
		hobLi.className= "hobbit"
		ulHobbit.appendChild(hobLi)
		//theShire.setAttribute('li', `${hobbits[i]}`)
	}
	theShire.appendChild(ulHobbit)

	// give each hobbit a class of `hobbit`

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')
	const ulHobbit =document.querySelector('ul')
	const frodo = ulHobbit.children[0]

	// create a div with an id of `'the-ring'`
	const theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')
	theRing.className = 'magic-imbued-jewelry'
	frodo.appendChild(theRing)

	// give the div a class of `'magic-imbued-jewelry'`

	// add the ring as a child of `Frodo`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const mordor = document.getElementById("Mordor")
	let ulBaddis=document.createElement("ul")
	ulBaddis.id="ulmordor"
	for(let i=0; i<baddies.length;i++){
		let liBaddie = document.createElement('li')
		//liBaddie.classList.add("baddy")
		liBaddie.textContent=baddies[i];
		ulBaddis.appendChild(liBaddie)
	}
mordor.appendChild(ulBaddis)


	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const aside = document.createElement('aside');
	let buddyList = document.createElement('ul');
	//buddyList.id = 'buddyListId'
	for(let i=0;i<buddies.length; i++){
		//bud = buddies[i]
		buddy = document.createElement('li');
		buddy.id = `${buddies[i]}`
		buddy.className = "buddies"
		buddy.textContent = buddies[i];
		buddyList.appendChild(buddy);
		aside.appendChild(buddyList);
	}
	let riv = document.getElementById("Rivendell")
	riv.appendChild(aside)
	

	// put an `unordered list` of the `'buddies'` in the aside

	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
let riv = document.getElementById("Rivendell")

function leaveTheShire() {
	console.log('6: leaveTheShire')
	let hobbits = document.getElementById(`hobbitsid`)
	riv.appendChild(hobbits);
	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	let strider = riv.querySelectorAll('li')[3];
	strider.textContent = 'Aragorn';
	// change the `'Strider'` text to `'Aragorn'`
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	let theFellowShip = document.createElement('div');
	theFellowShip.setAttribute('id', 'the-fellowship');
	riv.appendChild(theFellowShip)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	const allPeople = document.createElement('ul')
	theFellowShip.appendChild(allPeople)
	const allHobbits = document.querySelectorAll(".hobbit")
	const allBuddies = document.querySelectorAll(".buddies")
	
	for(let i=0; i<allHobbits.length;i++){
		//const hobbit = document.createElement('li')
		//hobbit.classList.add('fellowShipMember')
		//hobbit.textContent = hobbits[i]
		allPeople.appendChild(allHobbits[i]);
	}
	for(let j=0; j<allBuddies.length; j++){
		//const buddy = document.createElement('li')
		//buddy.id = `${buddies[j]}`
		//buddy.textContent = buddies[j]
		allPeople.appendChild(allBuddies[j]);
}
alert('They have joined the party')
	// after each character is added make an alert that they // have joined your party
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	//const theFellowShip = document.getElementById('.')
	//let gandalf = theFellowShip[5];
	//console.log(theFellowShip);
	let Gand = document.getElementById('Gandalf the Grey')
	Gand.textContent= 'Gandalf the White'
	
//console.log(gandalf)
	
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
	Gand.style.border = '3px solid gray';
	Gand.style.backgroundColor = 'white';
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('the horn of gondor has been blown')
	alert('Boromir s been killed by the Uruk-hai!')
	let Bor = document.getElementById('Boromir')
	Bor.remove()
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	let frod = document.getElementById('Frodo Baggins')
	let sam = document.getElementById('Samwise "Sam" Gamgee')
	//let more = document.createElement('ul')
	//Mordor.appendChild(more)
	let mor = document.getElementById('Mordor')
	let m = document.getElementById("ulmordor")
	m.appendChild(frod)
	m.appendChild(sam)
	mor.appendChild(m)
	// add a div with an id of `'mount-doom'` to `Mordor`
	let MountDoom = document.createElement("div");
	MountDoom.setAttribute("id", "mount-doom")
	mor.append(MountDoom)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	let gollumDiv = document.createElement("div");
	gollumDiv.setAttribute("id", "gollum");
	let mordor = document.getElementById('Mordor')
	mordor.append(gollumDiv);
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	let theRing = document.getElementById('the-ring');
	gollumDiv.append(theRing); 
	// Move Gollum into Mount Doom
	let MountDoom = document.getElementById('mount-doom');
	MountDoom.append(gollumDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	let gollum = document.getElementById("gollum");
	gollum.remove();
	// Move all the `hobbits` back to `the shire`
	let thehobbits = document.querySelectorAll(".hobbit");
	let theShire = document.getElementById('The-Shire');
	let hobbitsUl = document.querySelector(".hobbits")
	console.log(thehobbits)
	console.log(hobbitsUl)
	thehobbits.forEach(hobbit => {
		hobbitsUl.appendChild(hobbit)
	});
theShire.appendChild(hobbitsUl)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
