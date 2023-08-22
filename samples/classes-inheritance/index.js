
/* class and inheritance */
class Motobike {
  constructor(brand, cc) {
    this.brand = brand;
    this.cc = cc;
  }
}

class Underbone extends Motobike {
  constructor(brand, cc, name) {
    super(brand, cc);
    this.name = name;
  }
}

const biker1 = new Underbone('Honda', 150, 'Winner');
console.log(biker1);

/* static method */
class Person {
  static popUp() {
    return 'Hello world';
  }
}
console.log(Person.popUp());

/* super method */
class Person2 {
  hello() {
    return 'Hello world';
  }
}

class ChildPerson extends Person2 {
  hello() {
    return super.hello() + ', This method is amazing';
  }
}

const sample = new ChildPerson();
console.log(sample.hello());
