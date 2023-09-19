import Observable from './observable.js';

class CartModel extends Observable {
  constructor() {
    super();
    this.cartList = [];
  }

  addItem(menuItem, menuId) {
    console.log(this.cartList);

    if (this.cartList.length === 0) {
      this.cartList.push(menuItem);
    } else {
      for (let index = 0; index < this.cartList.length; index++) {
        const element = this.cartList[index];
        if (menuId != element.id) {
          console.log(index);
          this.cartList.push(menuItem);
        }
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
