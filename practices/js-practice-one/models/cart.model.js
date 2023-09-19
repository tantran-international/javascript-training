import Observable from "./observable.js";

class CartModel extends Observable {
	constructor() {
		super();
		this.cartList = [];
	}

	addItem(menuItem, menuId) {

		if (this.cartList.length === 0) {
			this.cartList.push({
				id: menuId,
				name: menuItem.name,
				amount: 1,
				price: menuItem.price,
			});
		} else {
			let isExist = false;
			for (let index = 0; index < this.cartList.length; index++) {
				const element = this.cartList[index];
				if (menuId === element.id) {
					isExist = true;
					element.amount += 1;
					break;
				}
			}

			if (!isExist) {
				this.cartList.push({
					id: menuId,
					name: menuItem.name,
					amount: 1,
					price: menuItem.price,
				});
			}
		}

		this.notify(this.cartList);
	}
}

export { CartModel };

// if (this.cartList.length == 0 || item.id != element.id) {
//   this.cartList.push(item);
//   this.notify(this.cartList);
// }
