import Observable from './observable';

class CartModel extends Observable {
  constructor() {
    super();
    this.cartList = [];
  }
}

export { CartModel };
