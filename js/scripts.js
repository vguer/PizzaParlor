/* Objectives:
1. Create a pizza object constructor with properties for toppings and size
2. Create a prototype method for the cost of the pizza depending on the selections chosen.
3. Allow users to choose toppings and size of the pizza.

*/

// business logic for pizza objects
function Pizza(size, toppings) {
  this.size=size;
  this.toppings=toppings;
}

// User Interface
let orderTotal;

//User Interface Logic

Pizza.prototype.cost = function(size) { 
if (size === "1") {
  this.cost = " $11";
} else if (size === "2") {
  this.cost = " $15";
}}

//console.log(size)

// UI Logic


$(document).ready(function() {
  $("form#orderform").submit(function(event) {
    event.preventDefault();
    const size = $("input[name='size']:checked").val();
    console.log(size);
    orderTotal = new Pizza(size, ["toppings"])
    $('#ordertotal').text(orderTotal.cost) 
  });
});


