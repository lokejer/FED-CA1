const cards = document.querySelectorAll("#annual-stats .card")
let currentIndex = 0

setInterval(() => {
	const card = cards[currentIndex]

	card.classList.add("hover-effect")
	setTimeout(() => {
		card.classList.remove("hover-effect")
	}, 1000) // how long the effect lasts

	// move to next card
	currentIndex = (currentIndex + 1) % cards.length
}, 1500) // time between each card activation