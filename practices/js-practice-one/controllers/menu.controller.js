class MenuController {
	constructor(menuModel, cartModel) {
		// Pass parameter "model" to property name to access model's properties in constructor() method
		// MenuView can access model.menuList via this"controller".model.menuList
		console.log(menuModel, cartModel);
		this.menuModel = menuModel;
		this.cartModel = cartModel;
	}

	handleEvent(e) {
		console.log(e.target.getAttribute("menuId"));
		// e -> event la cua button nao????
		e.stopPropagation();
		const menuId = e.target.getAttribute("menuId");
		switch (menuId) {
			case "0":
				console.log("add banh beo");
				const item = this.menuModel.getItem(menuId);
				this.menuModel.decrease(menuId);
				this.cartModel.addItem(item);
				break;
			case "1":
				console.log("add banh loc");
				break;
			case "2":
				console.log("add banh nam");
				break;

			default:
				break;
		}
	}

	addtoCart(amount) {}
	// get modelMenuTable() {
	//   return this.model.menuList;
	// }
}

export { MenuController };
