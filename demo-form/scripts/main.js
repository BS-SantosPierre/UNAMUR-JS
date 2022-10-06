console.log(document.forms[0].name.value);

console.log(document.forms["info-plus"].city.value);


const infoForm = document.forms[0];

infoForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(infoForm);

	infoForm.reset();
});

const btn = document.getElementById('btn');


const x = setTimeout(() => {
	console.log("Hello Tout le monde");
}, 2000);

// clearTimeout(x);

const y = setInterval(() => {
	console.log("Hello");
}, 1000);

btn.addEventListener('click', (event) => {
	clearTimeout(x);
	clearInterval(y);
});
