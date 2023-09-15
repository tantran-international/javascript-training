import Observable from "./observable.js";

class CartModel extends Observable {
	constructor() {
		super();
		this.cartList = [];
	}

	addItem(item) {
		console.log("addItem", item);
		this.cartList.push(item);
		console.log("this.cartList", this.cartList);
		this.notify(this.cartList);
	}
}

export { CartModel };
