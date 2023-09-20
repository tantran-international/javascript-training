class PaymentController {
  constructor(paymentModel, cartModel) {
    this.paymentModel = paymentModel;
    this.cartModel = cartModel;
  }

  handleEvent(e) {
    e.stopPropagation();
    // Get array of datas from Cart Model
    const cartItem = this.cartModel.cartList;

    // Calculator total price and display to screen when button checkout is clicked
    switch (e.type) {
      case 'click':
        this.paymentModel.sumCart(cartItem);
        break;
    
      default:
        break;
    }
  }
}

export { PaymentController };
