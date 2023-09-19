import Observable from './observable.js';

class PaymentModel extends Observable {
  constructor() {
    super();
    this.totalPayment = '';
  }

  sumCart(cartItem) {
    // Calculating total price from price and quantity in Cart Item's array
    let total = 0;
    for (let index = 0; index < cartItem.length; index++) {
      const element = cartItem[index];
      total += (element.price * element.amount);
    }
    // Change the value of totalPayment
    this.totalPayment = `${total} vnd`;
    // Notify View to get data from model to update (hey view, this model has changed!!!)
    this.notify(this.totalPayment);
  }
}

export { PaymentModel };
