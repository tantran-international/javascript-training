class MenuController {
  constructor(menuModel, cartModel) {
    // Pass parameter "model" to property name to access model's properties in constructor() method
    // MenuView can access model.menuList via this"controller".model.menuList
    this.menuModel = menuModel;
    this.cartModel = cartModel;
  }

  handleEvent(e) {
    e.stopPropagation();
    const menuId = e.target.getAttribute('menuId');
    const menuItem = this.menuModel.getItem(menuId);
    // console.log(menuId);

    switch (menuId) {
      case '0':
        this.menuModel.decrease(menuId);
        this.cartModel.addItem(menuItem, menuId);
        // console.log(menuItem);
        // console.log(this.cartModel);
        break;

      case '1':
        this.menuModel.decrease(menuId);
        this.cartModel.addItem(menuItem, menuId);
        // console.log(menuItem);
        break;

      case '2':
        this.menuModel.decrease(menuId);
        this.cartModel.addItem(menuItem, menuId);
        // console.log(menuItem);
        break;

      default:
        break;
    }
  }

  // addtoCart(amount) {

  // }
  // // get modelMenuTable() {
  // //   return this.model.menuList;
  // // }

}

export { MenuController };