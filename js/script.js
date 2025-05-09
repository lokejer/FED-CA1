function animateNumber(el, target) {
	let current = 0
	const speed = 40
	const increment = target / speed

	const update = () => {
		current += increment
		if (current >= target) {
			el.textContent = target.toFixed(1)
		} else {
			el.textContent = current.toFixed(1)
			requestAnimationFrame(update)
		}
	}

	update()
}

const observer = new IntersectionObserver(
	(entries, obs) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const numbers = entry.target.querySelectorAll(".number")
				numbers.forEach((num) => {
					const target = parseFloat(num.dataset.target)
					animateNumber(num, target)
				})
				obs.unobserve(entry.target)
			}
		})
	},
	{ threshold: 0.5 }
)

const statSection = document.querySelector(".yearly-garbage-statistic")
observer.observe(statSection)
