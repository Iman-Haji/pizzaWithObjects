// Write code which models a pizza as a class.
//Pizza has at least following properties: name, toppings, base price for a small pizza. Pizza has also a functions, which calculates it’s price.

//class Pizza {
//  constructor(name, toppings, basePrice) {
//    this.name = name;
//    this.toppings = toppings;
//    this.basePrice = basePrice;
//  }
//}

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
//CONSTRUCTOR CAN BE USED. WE CAN MAKE THE PIZZAS USING CONST

//const margherita = new Pizza ();
//const pepperoniPizza = new Pizza ();
//margherita.name = ('magherita', {
//  name: 
//}, 10.30)



//const margherita = new Pizza ("Margherita Pizza",[ {
//pizzaName: "Cheese", price: 1.99
//}]);
//
//console.log(margherita);
//


class Pizza {
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
