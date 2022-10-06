// const data = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {

// 	})
// 	.finally(() => {
// 		console.log("J'ai fini");
// 	});

// console.log(data);

const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Hello tout le monde");
	}, 2000);

	// reject("Error");
});

async function fetchPokemon() {
	// Async / Await
	try {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
		const data = await response.json();

		console.log(data);
	} catch (error) {

	} finally {

	}
}
fetchPokemon();

const customFetch = (name) => {
	return new Promise((resolve, reject) => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((response) => {
				if (response.ok) {
					resolve(response);
				} else {
					reject({ message: 'Not Found', status: 404 });
				}
			})
	})
};

(async () => {
	try {
		const response = await customFetch("jkfhdqjk");
		console.log(response);
	} catch (error) {
		console.log(error, "ERROR");
	}
})();

//Openweather api key => e0ceeda39c4e4968fbfe7f7904f73b1c
