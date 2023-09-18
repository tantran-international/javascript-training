import Observer from "./observer.js";

class CartView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.controller.cartModel.addObserver(this);

    this.cartList = document.querySelector('.table-cart');
    this.generateTableHead(this.cartList);
  }

  render(data) {


  }

  generateTableHead(table) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    const th = document.createElement('th');
    th.innerText = 'Menu';
    row.appendChild(th);
    th.setAttribute('colspan', 3);
  }

  generateTableBody(table) {

  }

  // update(data) {
  //   generateTableHead(data);
  // }
}

export { CartView };
