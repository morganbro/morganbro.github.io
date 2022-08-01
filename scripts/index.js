console.log("Shouldn't be any errors here. Enjoy a dad-joke instead! \n \n" + "What do you call a mouse that swears? \n" + "A cursor.")



if (document.body.classList.contains('project-page')) {
	window.addEventListener('scroll', function (e) {
		// will not work on IE < 9
		var scrolled = window.pageYOffset;
		// will not work on IE < 8
		const item = document.querySelector('.parallax');
		item.style.top = - (scrolled * -0.4) + 'px';
		item.style.transform = "scale(" + (scrolled * -0.0005 + 1) + ")";
		item.style.opacity = (scrolled * -0.001 + 1);
	});
}