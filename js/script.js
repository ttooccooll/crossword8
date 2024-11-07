(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "PSA: Turkey does NOT have more of this than other meats.",
					answer: "trp",
					position: 3,
					orientation: "across",
					startx: 7,
					starty: 1
				},
			 	{
					clue: "The pilgrims were grateful that Samoset and Squanto spoke English, but Massosoit probably preferred speaking in this language.",
					answer: "algonquian",
					position: 6,
					orientation: "across",
					startx: 1,
					starty: 2
				},
				{
					clue: "This organization does well with tv ratings on Thanksgiving Day.",
					answer: "nfl",
					position: 7,
					orientation: "across",
					startx: 7,
					starty: 3
				},
				{
					clue: "Storms, famine, and disease did this to the development of Plymouth Colony.",
					answer: "impede",
					position: 11,
					orientation: "across",
					startx: 5,
					starty: 5
				},
				{
					clue: "This vegetable is often times creamed for Thanksgiving.",
					answer: "onion",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 6
				},
				{
					clue: "These were the honored guests at the first Thanksgiving.",
					answer: "wampanoag",
					position: 16,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "The pilgrims believed in a life after death that lasted for this long.",
					answer: "eternity",
					position: 19,
					orientation: "across",
					startx: 1,
					starty: 8
				},
				{
					clue: "The pilgrims of Plymouth Colony fled religious persecution in the UK. Later, folks would flee religious persecution in the colony to this area.",
					answer: "ri",
					position: 20,
					orientation: "across",
					startx: 1,
					starty: 9
				},
				{
					clue: "Edward Winslow is responsible for arguably writing the most important _______ of the first Thanksgiving.",
					answer: "account",
					position: 21,
					orientation: "across",
					startx: 4,
					starty: 9
				},
				{
					clue: "One day, I will do this in person to the Macy's Thanksgiving Day parade.",
					answer: "see",
					position: 22,
					orientation: "across",
					startx: 4,
					starty: 10
				},
				{
					clue: "This creature is written in a native American dictionary as being called the 'white man's fly,' but there is little other evidence that they actually used this term.",
					answer: "bee",
					position: 23,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "This is a safer way to cook your turkey than the deep-frying trend.",
					answer: "roast",
					position: 24,
					orientation: "across",
					startx: 6,
					starty: 11
				},
				{
					clue: "This vessel started it's journey with the Speedwell.",
					answer: "mayflower",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "It's easiest to be thankful when one keeps this at bay.",
					answer: "ego",
					position: 2,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: "The pilgrim's may have measured their oils in this unit.",
					answer: "tun",
					position: 3,
					orientation: "down",
					startx: 7,
					starty: 1
				},
				{
					clue: "The pilgrim's used this tool to catch their turkeys.",
					answer: "rifle",
					position: 4,
					orientation: "down",
					startx: 8,
					starty: 1
				},
				{
					clue: "Massasoit considered William Bradford to be a ___.",
					answer: "pal",
					position: 5,
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					clue: "The Merchant Adventurers were able to do this for the pilgrim's voyage.",
					answer: "finance",
					position: 8,
					orientation: "down",
					startx: 5,
					starty: 4
				},
				{
					clue: "Both Massasoit and William Brandford would probably agree that we should end this.",
					answer: "fed",
					position: 9,
					orientation: "down",
					startx: 10,
					starty: 4
				},
                {
					clue: "This factor has dramatically hurt our knowledge about what happened at the first Thanksgiving.",
					answer: "time",
					position: 10,
					orientation: "down",
					startx: 3,
					starty: 5
				},
				{
					clue: "Make sure to get one of these of your loved ones at Thanksgiving this year.",
					answer: "photo",
					position: 12,
					orientation: "down",
					startx: 7,
					starty: 5
				},
				{
					clue: "Squanto taught the pilgrims how to grow ______ crops.",
					answer: "native",
					position: 14,
					orientation: "down",
					startx: 2,
					starty: 6
				},
				{
					clue: "Many families' Thanksgivings are even more dramatic than some of these musical productions.",
					answer: "opras",
					position: 15,
					orientation: "down",
					startx: 4,
					starty: 6
				},
				{
					clue: "The individuals referenced in 14 down should probably just practice being this.",
					answer: "nicer",
					position: 17,
					orientation: "down",
					startx: 6,
					starty: 7
				},
				{
					clue: "The pilgrims may have qualified if this organization had been around back in the 17th century.",
					answer: "ayuda",
					position: 18,
					orientation: "down",
					startx: 8,
					starty: 7
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

let toggleState = 0;
let usdPrice = null;
let blockHeight = null;
let satFee = null;

async function fetchPrice() {
	try {
		const response = await fetch('https://mempool.space/api/v1/prices');
		const data = await response.json();
		usdPrice = data.USD.toFixed();
	} catch (error) {
		console.error('Error fetching the price:', error);
	}
}

async function fetchBlock() {
	try {
		const response = await fetch('https://blockchain.info/q/getblockcount');
		const data = await response.text();
		blockHeight = parseInt(data).toFixed(0);
	} catch (error) {
		console.error('Error fetching the price:', error);
	}
}

async function fetchFee() {
	try {
		const response = await fetch('https://mempool.space/api/v1/fees/recommended');
		const data = await response.json();
		satFee = data.halfHourFee.toFixed();
		console.log(satFee);
	} catch (error) {
		console.error('Error fetching the price:', error);
	}
}

async function togglePrice() {
	if (!usdPrice) {
		await fetchPrice();
	}
	if (!blockHeight) {
		await fetchBlock();
	}
	if (!satFee) {
		await fetchFee();
	}

	const button = document.querySelector('.onesat');
	switch (toggleState) {
		case 0:
			button.textContent = `${blockHeight}`;
			break;
		case 1:
			button.textContent = `${satFee} sat/vB`;
			break;
		case 2:
			button.textContent = `$${usdPrice}`;
			break;
		case 3:
			button.textContent = '1sat=1sat';
			break;
	}
	toggleState = (toggleState + 1) % 4;
}
