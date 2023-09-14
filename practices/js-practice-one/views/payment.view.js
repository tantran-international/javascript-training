import Observer from "./observer.js";

class PaymentView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.totalPayment = document.querySelector('.total-amount');
    // display total amount of price to payment view
    this.totalPayment.innerText = controller.model.totalPayment;
  }

  update() {}
}

export { PaymentView };