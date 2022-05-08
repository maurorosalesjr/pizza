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
  let orderNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
  return orderNumber;
}
//////pizza builder/////
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  console.log(this.size); 
}


Pizza.prototype.crustPrice = function() {
  let crustPrice = 5;
  if(this.size === "small") {
    crustPrice += 5;
  } else if(this.size === "medium") {
    crustPrice += 10;
  } else if(this.size === "large") {
    crustPrice += 17;
  }else if(this.size === "xtraLarge") {
    crustPrice += 25;
  } 
  return output;
};








$(document).ready(function() {
  $("#name").submit(function(event) {
    event.preventDefault();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let size = $("#size").val()
  
    let toppings = [];
    toppings = $("input[type='checkbox']:checked").val();
    //let sizePrice = parseInt(crustPrice(this.size));
    let customer = new Customer(firstName, lastName);
    let pizza = new Pizza(toppings, size);
    let finalPrice = parseInt(pizza.toppings + size.crustPrice);
    
    
    $("#custName").text(customer.firstName + " " + customer.lastName)
    $("#waitTime").text(customer.waitTime);
    $("#orderNum").text(customer.orderNumber);
    $("#orderRecap").text(`1 ${size} pizza with ${toppings} items`);
    $("#finalPrice").text(finalPrice);
    $(".confrim-order").hide();
  })

})