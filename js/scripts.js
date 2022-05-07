////customer////
function Customer(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}


Customer.prototype.waitTime = function() {
  let waitTime = Math.floor(Math.random() * (55 - 19) + 19);
  return waitTime;
}

Customer.prototype.orderNumber = function() {
  let orderNumber = Math.floor(Math.random() * (9999 - 1000) - 1000);
  return orderNumber;
}
//////pizza builder/////
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  
}






////surf city////

function Surfcity() {
  this.orderItems = [];
  this.itemNumber = 0;
  
}

Surfcity.prototype.addToOrder = function(addItem) {
  addItem.id = this.itemNumber;
  this.itemNumber++;
  this.orderItems.push(addItem);
}

Surfcity.prototype.newOrder = function () {
  this.orderItems.push(this.orderItems);
  this.orderItems = [];
  
}




$(document).ready(function() {
  $("#name").submit(function(event) {
    event.preventDefault();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let customer = new Customer(firstName, lastName)
    $("#custName").text(customer.firstName + " " + customer.lastName)
    $("#waitTime").text(customer.waitTime);
    $("#orderNum").text(customer.orderNumber);
  })




  $("#new-order").submit(function(event) {
    event.preventDefault();
    

  })
})