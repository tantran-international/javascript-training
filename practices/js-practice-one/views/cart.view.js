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

		if (data.lenght !== 0) {
			this.cartList = document.querySelector(".table-cart");
			// remove toan bo child table-cart
			this.cartList.innerHTML = "";
			this.generateTableBody(this.cartList, data);
			this.generateTableHead(this.cartList);
	
		}
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
		for (const element of data) {
			let row = table.insertRow();
			for (const key in element) {
				if (key == "name" || key == "amount") {
					let cell = row.insertCell();
					let text = document.createTextNode(element[key]);
					cell.appendChild(text);
				}
			}
		}
	}

	update(data) {
		// console.log(this.cartList);

		this.render(data);
	}
}

export { CartView };
