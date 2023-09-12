import Observable from './observable.js';

class PaymentModel extends Observable {
  constructor() {
    super();
    this.totalPayment = '';
  }
}

export { PaymentModel };
