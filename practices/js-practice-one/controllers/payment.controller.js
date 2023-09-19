class PaymentController {
  constructor(paymentModel, cartModel) {
    this.paymentModel = paymentModel;
    this.cartModel = cartModel;
  }

  handleEvent(e) {
    e.stopPropagation();
    const cartItem = this.cartModel.cartList;
    switch (e.type) {
      case 'click':
        this.sumCart(cartItem);
        break;
    
      default:
        break;
    }
  }

  get paymentCost() {
    return this.paymentModel.totalPayment;
  }

  sumCart(cartItem) {
    let total = 0;
    for (let index = 0; index < cartItem.length; index++) {
      const element = cartItem[index];
      total += (element.price * element.amount);
    }
    this.paymentModel.totalPayment = `${total} vnd`;

    this.paymentModel.notify(this.paymentModel);
  }

}

export { PaymentController };
