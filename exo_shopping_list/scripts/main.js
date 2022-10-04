(() => {
	// Initialisation des datas
	const products = [
		{
			name: 'Chaise',
			unitPrice: 25
		},
		{
			name: 'Meuble',
			unitPrice: 50.12
		},
		{
			name: 'TV',
			unitPrice: 100.98
		}
	];

	const productsCart = [];

	// Séléctionne mes parents
	const productList = document.getElementById('products');
	const cart = document.getElementById('cart');
	const total = document.getElementById('total');

	updatePrice();

	// Afficher ma liste de produit
	for (const product of products) {
		const li = document.createElement('li');
		li.innerHTML = `${product.name} - ${product.unitPrice}€ `;
		const btn = document.createElement('button');
		btn.innerHTML = "Ajouter au panier";

		btn.addEventListener('click', () => {
			const cartProduct = productsCart.find((p) => p.name === product.name);
			if (cartProduct) {
				cartProduct.qty++;
			} else {
				productsCart.push({ ...product, qty: 1 });
			}
			updatePrice();
			updateCart();
		});

		li.appendChild(btn);
		productList.appendChild(li);
	}

	function updateCart() {
		// Supprimer tout les élément de ma liste
		cart.replaceChildren();
		// cart.innerHTML = '';

		// while (cart.firstChild) {
		// 	cart.removeChild(cart.firstChild);
		// }
		for (const product of productsCart) {
			const li = document.createElement('li');
			li.innerHTML = `${product.name} - ${product.unitPrice} ${product.qty}x`;

			const btnAdd = document.createElement('button');
			btnAdd.innerHTML = "+";
			btnAdd.addEventListener('click', () => {
				product.qty++;
				updatePrice();
				updateCart();
			});

			const btnMinus = document.createElement('button');
			btnMinus.innerHTML = "-";
			btnMinus.addEventListener('click', () => {
				if (product.qty === 1) {
					const productIndex = productsCart.findIndex((p) => p.name === product.name);
					productsCart.splice(productIndex, 1);
				} else {
					product.qty--;
				}
				updatePrice();
				updateCart();
			});

			li.appendChild(btnAdd);
			li.appendChild(btnMinus);

			cart.appendChild(li);
		}
	}

	function calculateTotal() {
		const total = productsCart.reduce((acc, product) => {
			return acc + (product.unitPrice * product.qty);
		}, 0);
		return total.toLocaleString('fr-BE', { style: 'currency', currency: 'EUR' });
	}

	function updatePrice() {
		total.innerHTML = `Total ${calculateTotal()}`;
	}
})();
