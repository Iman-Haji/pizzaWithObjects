// Write code which models a pizza as a class.
//Pizza has at least following properties: name, toppings, base price for a small pizza. Pizza has also a functions, which calculates it’s price.

class Pizza {
  constructor(name, toppings, basePrice) {
    this.name = name;
    this.toppings = toppings;
    this.basePrice = basePrice;
  }
}

class Pizza {
  name;
  toppingg = [];
  basePrice = 0; // In cents
  size = 2;

  getPrice() {
    return this.basePrice;

  }
}

//CONSTRUCTOR CAN BE USED. WE CAN MAKE THE PIZZAS USING CONST

const margherita = new Pizza ();


margherita.name = 'magherita'