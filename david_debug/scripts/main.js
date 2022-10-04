"use strict";
//selectionner mon bouton
const list = document.querySelector('#list');
const input = document.querySelector('#ItemNameInput');
const btn_add_item = document.querySelector('#btn_add_item');
const div_prix_ttl = document.getElementById('div_prix_ttl');
const tab_item = [];
let prix_ttl = 0;
// n executeras que la derniere itteration de btn.onclick
btn_add_item.addEventListener('click', () => {
	if (input.value.trim() !== "") {
		tab_item.push(input.value.trim());
		input.value = "";
		show_basket();
	}
});

function del_item(item_id) {
	tab_item.splice(item_id, 1);
	console.log("effacement de l index " + item_id);
	show_basket();
}
function show_basket() {
	let i = 0;
	//on efface tout les tr pour les rajouter le tr avec l iteation additionel
	while (list.firstChild) {
		list.removeChild(list.firstChild)
	}
	for (const item of tab_item) {
		console.log("I vaut : " + i);
		const item_tr = document.createElement('tr');
		const item_td_name = document.createElement('td');
		const item_td_price = document.createElement('td');
		const item_td_del_btn = document.createElement('button');
		item_td_name.innerHTML = item;
		item_td_price.innerHTML = 10;
		item_td_del_btn.innerHTML = 'Effacer';
		item_td_del_btn.addEventListener('click', () => { del_item(i) });
		item_tr.appendChild(item_td_name);
		item_tr.appendChild(item_td_price);
		item_tr.appendChild(item_td_del_btn);
		list.appendChild(item_tr);
		i++;
	}
}
