/* Objectives:
1. Create a pizza object constructor with properties for toppings and size
2. Create a prototype method for the cost of the pizza depending on the selections chosen.
3. Allow users to choose toppings and size of the pizza.

*/

function Pizza(toppings, size) {
  this.toppings=toppings;
  this.size=size;
}


let largePizza = {size: "large", cost: 11.00};
let largerPizza = {size: "larger", cost: 14.00};

let pizzaOrder = new Pizza(["artichoke hearts", "tofu", "cheez whizz", "hot cheetos"], ["large", "larger"]);



Pizza.prototype.cost = function () {
  this.size += 1;
  return this.currentId;
}

Pizza.prototype.order = function () {
  return this.toppings + this.size;
}

// Business Logic




// UI Logic
$(document).ready(function() {

  event.preventDefault();

});
