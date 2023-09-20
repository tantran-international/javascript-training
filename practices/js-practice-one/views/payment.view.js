import Observer from "./observer.js";

class PaymentView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.totalPayment = document.querySelector('.total-amount');
    // Display total amount of price to payment view
    this.totalPayment.innerText = controller.paymentModel.totalPayment;

    // Add Event for checkout button
    this.checkoutButton = document.querySelector('.btn-checkout');
    this.checkoutButton.addEventListener('click', this.controller);

    // PaymentModel tracking
    this.controller.paymentModel.addObserver(this);
  }

  update(data) {
    this.totalPayment.innerText = data;
  }
}

export { PaymentView };
