import Observer from "./observer.js";

class PaymentView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.totalPayment = document.querySelector('.total-amount');
    // Display total amount of price to payment view
    this.totalPayment.innerText = controller.paymentCost;

    // Add Event
    this.checkoutButton = document.querySelector('.btn-checkout');
    this.checkoutButton.addEventListener('click', this.controller);

    this.controller.paymentModel.addObserver(this);
  }

  update(model) {
    this.totalPayment.innerText = model.totalPayment;
  }
}

export { PaymentView };
