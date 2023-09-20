import Observer from "./observer.js";

class CartView extends Observer {
	constructor(controller) {
		super();
		this.controller = controller;
		this.controller.cartModel.addObserver(this);

		this.render(this.controller.cartModel.cartList);
	}

	render(data) {
		// this.cartList = document.querySelector('.table-cart');
		// this.generateTableBody(this.cartList, data);
		// this.generateTableHead(this.cartList);

		// if (this.cartList.length != 0) {
		//   this.cartList.removeChild(this.cartList.firstElementChild);
		//   this.cartList.removeChild(this.cartList.lastElementChild);
		//   console.log(this.cartList.lastElementChild);
		//   this.generateTableBody(this.cartList, data);
		//   this.generateTableHead(this.cartList);
		// }
		// console.log(this.cartList);

		// this.cartList = document.querySelector('.table-cart');
		// // Remove all children of table

		// if (data.length !== 0) {
		//   this.cartList.removeChild(this.cartList.firstChild);
		// }

		// // Render Table Header
		// this.generateTableHead(this.cartList);
		// console.log(data);
		// console.log(data.length);
		this.cartList = document.querySelector(".table-cart");
		console.log(data.length);
		// remove toan bo child table-cart
		this.cartList.innerHTML = "";
		this.generateTableBody(this.cartList, data);
		this.generateTableHead(this.cartList);
		// this.generateQuantityColumn(this.cartList, data);

	}

	generateTableHead(table) {
		const thead = table.createTHead();
		const row = thead.insertRow();
		const th = document.createElement("th");
		th.innerText = "Cart";
		row.appendChild(th);
		th.setAttribute("colspan", 3);
	}

	generateTableBody(table, data) {
		for (let index = 0; index < data.length; index++) {
			const element = data[index];
			const row = table.insertRow();
			const cell = row.insertCell();
			const sequence = document.createTextNode(index + 1);
			cell.appendChild(sequence);
			for (const key in element) {
				if (key == "name" || key == "amount") {
					const cell = row.insertCell();
					const text = document.createTextNode(element[key]);
					cell.appendChild(text);
				}
			}
		}
	}

	update(data) {
		this.render(data);
	}
}

export { CartView };
