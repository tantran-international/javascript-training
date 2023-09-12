import Observable from './observable';

class MenuModel extends Observable {
  constructor() {
    super();
    this.menuList = [
      { name: 'Banh Beo', amount: 10, price: 1000 },
      { name: 'Banh Loc', amount: 10, price: 2000 },
      { name: 'Banh Nam', amount: 10, price: 3000 }
    ];
  }
}

export { MenuModel };
