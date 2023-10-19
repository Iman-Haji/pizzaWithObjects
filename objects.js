class Pizza {
  constructor(name, toppings, size, basePrice) {
    this.name = name;
    this.pizzaToppings = pizzaToppings;
    this.size = size;
    this.basePrice = basePrice;
  }
  deletePizzaToppings(pizzaToppings) {
    for (let item of this.pizzaToppings) {
      if (item === toppings) {
        let i = this.pizzaToppings;
        console.log(i)
      }
    }
  }


  setSize(size) {
    this.size = size;
  }
  toppingsForPizza(pizzaToppings) {
    this.pizzaToppings = pizzaToppings;
  }

  returnPizzaToppings() {
    return this.pizzaToppings;
  }

  returnPizzaPrice() {
    return this.basePrice;

  }
  returnCustomerName() {
    return this.name;
  }
};



//priceForExtraTopping = 1;
//freeToppingsAmount = 4;



// Write code which models a pizza as a class.
//Pizza has at least following properties: name, toppings, base price for a small pizza. Pizza has also a functions, which calculates it’s price.

//class Pizza {
//  constructor(name, toppings, basePrice) {
//    this.name = name;
//    this.toppings = toppings;
//    this.basePrice = basePrice;
//  }
//}



/*
class Pizza {
  name = "";
  toppings = [];
  basePrice = 5;
  size = 2;
  constructor(name, toppings, size, basePrice) {
    this.name = name;
    this.toppings = toppings;
    this.size = size;
    this.basePrice = basePrice;
    this.calculatePrice = function () {
      const extraToppings = this.toppings.length - freeToppingsAmount;
      if (extraToppings <= 0) {
        return (this.calculatePrice = this.basePrice);
      } else {
        return (this.calculatePrice = this.basePrice + extraToppings * priceForExtraTopping);
      }
    }
  }
}

class Pizzaa {
  constructor(name, toppings, basePrice) {
    this.name = name;
    this.toppings = toppings;
    this.basePrice = basePrice;
  }

  calculatePrice() {
    let totalPrice = this.basePrice;

    // Add additional cost for each topping
    for (let i = 0; i < this.toppings.length; i++) {
      totalPrice += this.toppings[i].price;
    }

    return totalPrice;
  }
}



class Pizza {
  name = pizzaName;
  topping = [];
  basePrice = 0; // In cents
  size = 2;

  getPrice() {
    return basePrice;

    return this.basePrice;
  }
}

*/

//CONSTRUCTOR CAN BE USED. WE CAN MAKE THE PIZZAS USING CONST

//const margherita = new Pizza ();
//const pepperoniPizza = new Pizza ();
//margherita.name = ('magherita', {
//  name: 
//}, 10.30)

//const margherita = new Pizza ("Margherita Pizza",[ {
//pizzaName: "Cheese", price: 1.99
//console.log(margherita);
