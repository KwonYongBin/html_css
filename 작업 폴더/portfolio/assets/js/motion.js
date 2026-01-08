window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method

	let scrollTop = document.documentElement.scrollTop || window.scrollY;

	//info
	document.querySelector(".paraScroll span").innerText = parseInt(scrollTop);
})
