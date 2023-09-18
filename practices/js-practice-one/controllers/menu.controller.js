class MenuController {
  constructor(menuModel, cartModel) {
    // Pass parameter "model" to property name to access model's properties in constructor() method
    // MenuView can access model.menuList via this"controller".model.menuList
    this.menuModel = menuModel;
    this.cartModel = cartModel;
  }

  handleEvent(e) {
    e.stopPropagation();
    // console.log(e.target.getAttribute('menuId'));
    const menuId = e.target.getAttribute('menuId');
    const item = this.menuModel.getItem(menuId);

    switch (menuId) {
      case '0':
        this.menuModel.decrease(menuId);
        this.cartModel.addItem(item);
        console.log(item);
        break;

      case '1':
        this.menuModel.decrease(menuId);
        this.cartModel.addItem(item);
        console.log(item);
        break;

      case '2':
        this.menuModel.decrease(menuId);
        this.cartModel.addItem(item);
        console.log(item);
        break;

      default:
        break;
    }
  }

  addtoCart(amount) {

  }
  // get modelMenuTable() {
  //   return this.model.menuList;
  // }

}

export { MenuController };