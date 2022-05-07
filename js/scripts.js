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

Pizza.prototype.basePrice = function() {
  let basePrice = 5;
  if(this.size === "small") {
    basePrice += 5;
  } else if(this.size === "medium") {
    basePrice += 10;
  } else if(this.size === "large") {
    basePrice += 17;
  }else if(this.size === "xtraLarge") {
    basePrice += 25;
  }
}




////surf city////






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




  $("#confirmOrder").submit(function(event) {
    event.preventDefault();
    let newSize = $("input:radio[name=size]:checked").val()
    let cheeze = $("input:radio[name=topping]:checked").val();
    let topping = $("input:checkbox[name=topping]:checked");
    let pizza = new Pizza(newSize);
    console.log(newSize)
    $("#orderRecapSub").text(newSize);
    $("#subtotal").text(pizza.basePrice);
  })
})