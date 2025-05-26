const observer = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const bars = entry.target.querySelectorAll(".bar")
				bars.forEach((bar) => bar.classList.add("animate"))
				observer.unobserve(entry.target) // Optional: animate once
			}
		})
	},
	{
		root: null,
		threshold: 0.3, // Trigger when 30% of section is in view
		rootMargin: "0px 0px -100px 0px", // Trigger 100px *after* it appears
	}
)

const chartSection = document.querySelector(".bar-chart")
observer.observe(chartSection)