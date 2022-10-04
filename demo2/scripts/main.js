
function person(name) {
	function sayHi() {
		console.log("Hello " + name);
	}

	function howAreYou() {
		console.log("Fine! Thx " + name);
	}

	return {
		sayHi,
		howAreYou
	}
}


const john = person("John");
john.sayHi();
john.howAreYou();

const jane = person("Jane");


function incrementFontSize(size) {
	return () => {
		const body = document.querySelector('body');
		body.style.fontSize = `${size}px`;
	}
}

const btn1 = document.getElementById('btn-12').addEventListener('click', incrementFontSize(12));

const btn2 = document.getElementById('btn-14').addEventListener('click', () => {
	incrementFontSize(14);
});

const btn3 = document.getElementById('btn-16').addEventListener('click', incrementFontSize(16));
