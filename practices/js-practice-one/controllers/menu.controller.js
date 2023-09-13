class MenuController {
  constructor(model) {
    this.model = model;
  }

  get modelMenu() {
    return this.model.menuList;
  }
}

export { MenuController };