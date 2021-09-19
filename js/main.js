"use strict"

const smoothScroll = () => {
	const navLinks = document.querySelectorAll('.nav__link[data-goto]');
	
	for (let i=0; i<navLinks.length; i++) {
		let navLink = navLinks[i];
		navLink.addEventListener("click", function(e) {
			const navLink = e.target;
			if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
				const goToSection = document.querySelector(navLink.dataset.goto);
				const goToSectionPosition = goToSection.getBoundingClientRect().top;
				
				window.scrollTo( {
					top: goToSectionPosition,
					behavior: "smooth"
				})
			}
			
	})		
	}
}

const burgerMenu = () => {

	const hamburger = document.querySelector('.hamburger'),
	nav = document.querySelector('.nav'),
	navItems = document.querySelectorAll('.nav__item'),
	body = document.querySelector('body');



	hamburger.addEventListener("click", function(e) {
			hamburger.classList.toggle("hamburger_active");
			nav.classList.toggle("nav_active");
	})


	for (let i=0; i<navItems.length; i++) {
		let navItem = navItems[i];
		navItem.addEventListener("click", function(e) {
			hamburger.classList.remove("hamburger_active");
			nav.classList.remove("nav_active");
	})		
	}
			

			

		// 	body.addEventListener("click", function(e) {
		// 		hamburger.classList.remove("hamburger_active");
		// 		nav.classList.remove("nav_active");
		// 		console.log('body');		
		// })

};


hljs.initHighlightingOnLoad();
smoothScroll();
burgerMenu();


