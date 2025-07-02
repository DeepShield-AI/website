window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
	// Check for click events on the navbar burger icon

	var options = {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	// Initialize all div with carousel class
	var carousels = bulmaCarousel.attach(".carousel", options);

	bulmaSlider.attach();
});

// 添加滚动动画效果
document.addEventListener("DOMContentLoaded", function () {
	// 导航栏滚动效果
	const navbarLinks = document.querySelectorAll(".navbar-item");

	navbarLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href");
			const targetElement = document.querySelector(targetId);

			window.scrollTo({
				top: targetElement.offsetTop - 80,
				behavior: "smooth",
			});
		});
	});

	// 卡片动画效果
	const cards = document.querySelectorAll(".intro-section, .attribute-card, .feature-card");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = "1";
					entry.target.style.transform = "translateY(0)";
				}
			});
		},
		{ threshold: 0.1 }
	);

	cards.forEach((card) => {
		card.style.opacity = "0";
		card.style.transform = "translateY(20px)";
		card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
		observer.observe(card);
	});
});
