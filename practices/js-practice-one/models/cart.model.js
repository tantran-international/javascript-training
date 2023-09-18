import Observable from './observable.js';

class CartModel extends Observable {
  constructor() {
    super();
    this.cartList = [];
  }

  addItem(item) {
    this.cartList.push(item);
    this.notify(this.cartList);
  }
}

export { CartModel };
