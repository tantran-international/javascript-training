/*  Function declarations */
function getData(brand = null, type = null) {
  console.log(`I have a car brand: ${brand}, type: ${type}`);
}

getData('Honda', 'SUV');

getData();

getData('Yamaha');


const z = myFunction(4, 3);
document.write(z);

function myFunction(q, w) {
  return q * w;
}


/* arrow function */
const sum1 = (a, b) => a + b ** 2;
console.log(sum1(5, 5));
// display: 30

const double = (x) => {
  console.log('double is', x);
  return x * 2;
};

const result = double(4);
console.log({result});

/* object */
const car = {type: 'Suzuki', model: 'Swift', color: 'white'};
console.log('The car model is: ', car.type, car.model);

function People(hair, eye) {
  this.hair = hair;
  this.eye = eye;
}

const myPeople = new People('Black', 'Blue');
console.log(myPeople.hair, myPeople.eye);


/* object method */
const myHouse = {
  address: 'Ho chi Minh city',
  color: 'blue',
  purpose: function(description) {
    console.log(`My house is now ${description}`);
  },
};
myHouse.purpose('for rent');

