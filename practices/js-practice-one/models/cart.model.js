import Observable from './observable.js';

class CartModel extends Observable {
  constructor() {
    super();
    this.cartList = [];
  }
}

export { CartModel };
