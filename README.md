# Surf City Zzza

#### By Mauro Rosales

#### Website to order pizza from

## Technologies Used

* macbook air
* chrome
* vscode
* Aseprite

## Description

user inputs their name, for the loyalty program. Then chooses the size of their pizza, as well as the toppings they like. The site will give you an order number, simulated wait time, an order recap and the price of your order

## Setup/Installation Requirements

* fork the git repo
* clone the repo
* click and drag index.html to the browser of your choice




## Known Bugs

* no known bugs
* 

## License

for further information, email me at mauro.rosales247@gmail.com



## Tests
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
Pizza.prototype.getPrice = function() {
  let basePrice = [5, 10, 18, 23, 30];//[slice, small, medium, large, xlarge]
  const totalPrice = basePrice[this.sizeArray];
  return totalPrice
}

Pizza.prototype.getSizeArray = function() {
  let sizeOption = ["Slice o'Pie", "Small", "Medium", "Large", "Xtra-Large"]
  return sizeOption.indexOf(this.size)
}
Expected Output:Price([pepped'roni], large) -> $23

Describe: surfCity()
Test: create surf city function to add items to order
code:
function surfCity() {
  this.orderItems = [];
  this.itemNumber = 0;
  this.orderNumber = 1;

}

surfCity.prototype.addToOrder = function() {
  addItem.id = this.itemNumber;
  this.itemNumber++;
  this.orderItems.push(addItem);
}

Expected Outcome:([pepped'roni], large) -> ([pepped'roni, shroomies], large)

Describe removeFromOrder()
test: to remove items from order
Code:
Surfcity.prototype.removeFromOrder = function(removeItem) {
  this.orderItems.splice(removeItem, 1, "");
}

Expected outcome:([pepped'roni, shroomies], large) -> ([shroomies], large)

Describe: newOrder()
Test:create new orders and push items to proper arrays
code:
Surfcity.prototype.newOrder = function () {
  this.orderItems.push(this.orderItems);
  this.orderItems = [];
  this.orderNumber++;
}

Expected Outcome: newOrder: addItem pushes to order

Describe: UI Logic
Test: should link UI items to functions and html, take name from sign in section to thank you area
code:
$(document).ready(function() {
  $("#name").submit(function(event) {
    event.preventDefault();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let customer = new Customer(firstName, lastName)
    $("#custName").text(customer.firstName + " " + customer.lastName)
  })
Expected Outcome:website functionality. captures the name of user and places it at the thank you area.

Describe: waitTime();
Test: should give user a wait time for thier pizza. using a random number generator between the numbers of 20 - 55 
Code: 
Customer.prototype.waitTime = function() {
  let waitTime = Math.floor(Math.random() * (55 - 19) + 19);
  return waitTime;
}

...
$("#waitTime").text(customer.waitTime);

Expected Outcome: when user hits submit, the website will create a number between 20 through 55 to simulate a pizzeria rush or slowdown in customers


Describe: orderNumber();
Test: should assign an order number to the customer
Code:Customer.prototype.orderNumber = function() {
  let orderNumber = Math.floor(Math.random() * (9999 - 1000) - 1000);
  return orderNumber;
}

...
$("#orderNum").text(customer.orderNumber);

Expected Output: when customer signs in, website will generate a four digit order number, simulating an actual busy restaraunt

Describe: newOrder();
Test: should recal the size of the pizza in Your Order field.
Code:...
let size = $("#size").val()

...
    $("#orderRecap").text(`1 ${size} pizza with ${this.toppings}`);
Expected Output: when user selects the size, it will be shown in the "Your Order" area


Describe: add toppings
test: should push toppings from order form to your order area if user has selected it
code:

expected outcome: items selected should show up on the your order 



Copyright (c) May 7, 2022 Mauro Rosales jr
