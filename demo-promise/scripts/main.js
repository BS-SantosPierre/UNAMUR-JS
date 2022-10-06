// Promise Async/Await
const URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchPosts() {
	try {
		const response = await fetch(URL); // Pause tant que la requête n'est pas fini
		const data = await response.json();
		// On manipule les datas recu par la requête
		for (const post of data) {
			console.log(post.title);
		}
	} catch (error) {

	}
}
// Arrow function
const fetchPost = async () => {

}

fetchPosts();
