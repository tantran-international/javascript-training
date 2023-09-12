import Observable from './observable';

class PaymentModel extends Observable {
  constructor() {
    super();
    this.totalPayment = '';
  }
}

export { PaymentModel };
