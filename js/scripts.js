/* Objectives:
1. Create a pizza object constructor with properties for toppings and size
2. Create a prototype method for the cost of the pizza depending on the selections chosen.
3. Allow users to choose toppings and size of the pizza.

*/

function Pizza(size, toppings) {
  this.size=size;
  this.toppings=toppings;
}

let pizzaOrder = new Pizza(["size"], ["toppings"]);



Pizza.prototype.cost = function(size) { 
if (size === "1") {
  return " $11"
} else if (size === "2") {
  return " $15"
}

//  Pizza.prototype.order = function () {
  //  return this.toppings + this.size;
  // }


//function attachPizzaListeners() {
  //$("form#orderform").submit(function(event) {
    //let pizzaOrder = ("input#orderform").val();


// UI Logic
$(document).ready(function() {
  $("form#orderform").submit(function(event) {
    event.preventDefault();
    let size = $("input[name='size']:checked").val();
  });
    


});
