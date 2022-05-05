TESTS:
Describe: customer();
Test: should return a customers first, last name and their order
code:function Customer(firstName, lastName, order) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.order = order;
}
Expected Output:Mauro Rosales pepperoni

Describe: Pizza();
Test: should return pizza size and topping
Code:
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
Expected Outcome:[toppings], size -> pepped'roni, large

Describe: price
Test: should pull the size and topping elements to give a final price
Code:

Expected Output:Price([pepped'roni], large) -> $20
