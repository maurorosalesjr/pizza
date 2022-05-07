////customer////
function Customer(firstName, lastName, order) {
  this.firstName = firstName;
  this.lastName = lastName;
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
  this.orderNumber = 1;

}

Surfcity.prototype.addToOrder = function(addItem) {
  addItem.id = this.itemNumber;
  this.itemNumber++;
  this.orderItems.push(addItem);
}

Surfcity.prototype.newOrder = function () {
  this.orderItems.push(this.orderItems);
  this.orderItems = [];
  this.orderNumber++;
}



$(document).ready(function() {
  $("#name").submit(function(event) {
    event.preventDefault();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let customer = new Customer(firstName, lastName)
    $("#custName").text(customer.firstName + " " + customer.lastName)
  })




  $("#new-order").submit(function(event) {
    event.preventDefault();

  })
})