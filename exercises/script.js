document.querySelector('.puzzle-0').addEventListener('click', function() {
	  window.alert('Hello, World!');
	});

	document.querySelector('.puzzle-1').addEventListener('click', function() {
		window.alert('Hola, Mundo!');		
	});

	document.querySelector('.puzzle-2').addEventListener('click', function() {
		document.querySelector('h1').textContent = "harman but thiccer";
	});

	document.querySelector('.puzzle-3').addEventListener('click', function() {
		document.querySelector('img').src="https://media.giphy.com/media/11J027GnyjrcJi/giphy.gif";
	});

	document.querySelector('.puzzle-4').addEventListener('click', function() {
		document.querySelector('img').style.visibility = "hidden";
	});

	document.querySelector('.puzzle-5').addEventListener('click', function() {
		document.querySelector('img').style.visibility = "visible";
	});

	document.querySelector('.puzzle-6-yellow').addEventListener('click', function() {
		document.querySelector('body').style.background = "yellow";
	});

	document.querySelector('.puzzle-6-pink').addEventListener('click', function() {
		document.querySelector('body').style.background = "pink";
	});

	document.querySelector('.puzzle-6-purple').addEventListener('click', function() {
		document.querySelector('body').style.background = "purple";
	});

	document.querySelector('.puzzle-7').addEventListener('click', function() {
		document.querySelector('body').style.fontFamily = "Comic Sans MS";
		document.querySelector('body').style.color = "red";
	});

	document.querySelector('.puzzle-8').addEventListener('click', function() {
		document.querySelector('a').href="https://theuselessweb.com/";
		document.querySelector('a').textContent = "Explore the Useless Web!";
	});

	// Challenge puzzles

	document.querySelector('.puzzle-9').addEventListener('click', function() {
		document.querySelector('body').style.fontFamily = "Monaco";
	});

	document.querySelector('.puzzle-10').addEventListener('click', function() {
		document.querySelector('audio').play();
	});

	document.querySelector('.puzzle-11').addEventListener('click', function() {
		document.querySelector('.gakko-logo').innerHTML = "<img src=https://cdn-images-1.medium.com/max/1200/1*mf3qnukPzN9oAt3u3Ftgcw.png>";
	});

	document.querySelector('.puzzle-12').addEventListener('click', function() {
		document.querySelector('ol').style.color = "blue";
	});

	document.querySelector('.puzzle-13').addEventListener('click', function() {
		document.querySelector('.ur-mom').innerHTML = "<marquee>Veronica is cool B^)</marquee>"
	});

	document.querySelector('.puzzle-14').addEventListener('click', function() {

	});

	document.querySelector('.puzzle-15').addEventListener('click', function() {
		var color = prompt("What is your favorite color?")
		document.querySelector('body').style.background = color;
	});