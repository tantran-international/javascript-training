import Observable from './observable.js';

class MenuModel extends Observable {
  constructor() {
    super();
    this.menuList = [
      { id: 0, name: 'Banh Beo', amount: 10, price: 1000 },
      { id: 1, name: 'Banh Loc', amount: 10, price: 2000 },
      { id: 2, name: 'Banh Nam', amount: 10, price: 3000 }
    ];
  }

  getItem(menuId) {
    for (let index = 0; index < this.menuList.length; index++) {
      const element = this.menuList[index];
      if (element.id == menuId) {
        return element;
      }
    }
  }

  decrease(menuId) {
    for (let index = 0; index < this.menuList.length; index++) {
      const element = this.menuList[index];
      // console.log(element);
      if (element.id == menuId) {
        if (element.amount > 0) {
          element.amount--;
        }
      }
    }
    this.notify(this.menuList);
  }

}

export { MenuModel };
