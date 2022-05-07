
  this.order = order;
  this.cost = 0;
  this.orderNumber = 0;
  
}

Customer.prototype.orderPreview = function () {
  let output = "";
  for(let i=0; i<this.order.length; i++) {
    if(this.order[i]) {
      output += "1 - " + this.order[i].size + " pizza with " + this.order[i].toppings + ": $" + this.order[i].price.toFixed(2);
    }
  } return output
  
}





  this.price = this.getPrice(size, toppings);
  this.sizeArray = this.getSizeArray();
}

Pizza.prototype.getPrice = function() {
  add(this.size, this.toppings) {
    return this.size + this.toppings;
  };
}





  this.orderTotal = this.calculateTotal();
}



Surfcity.prototype.removeFromOrder = function(removeItem) {
  this.orderItems.splice(removeItem, 1, "");
  for(let i=0; i<this.orderItems.length; i++) {
    if(this.orderItems[i]) {
      break;
    } else if(i === this.orderItems.length-1) {
      $("#order").slideDown();
    }
  }
}



Surfcity.prototype.calculateTotal = function () {
  let output = 0;
  for(let i=0; i<this.orderItems.length; i++) {
    if(this.orderItems[i]) {
      output += this.orderItems[i].price;
    }
  } return output;
  
} 




///////UI logic/////

$(function(){
let surfCity = new Surfcity();

$("#new-order").submit(function(event) {
  event.preventDefault();
  let newSize = $("#size").val();
  let cheeze = $("input:radio[name=topping]:checked").val();
  let topping = $("input:checkbox[name=topping]:checked");
  let newTopping = [];
  let pizza;
  let orderNumber = surfCity.orderNumber;

  newTopping.push(cheeze);
  topping.each(function(){
    newTopping.push($(this).val());
  })
  pizza = new Pizza(size, topping);
  surfCity.addToOrder(pizza);

  

  $("#orders").slideDown();
  $("#subtotal").append(subtotal);
  $("#finalPrice").text("$" + surfCity.calculateTotal().toFixed(2));
  $("#newOrder").trigger("reset")
});

$("#name").submit(function(event) {
  event.preventDefault();
  let firstName = $("#firstName").val();
  let lastName = $("#lastName").val();
  let customer = new Customer(firstName, lastName, surfCity.orderItems);
  let orderPreview = "";

  for(let i=0; i<customer.order.length; i++) {
    orderPreview += "1 " + customer.order[i].size + " pizza with " + customer.order[i].toppings + "<br>";
  }

  customer.cost = surfCity.calculateTotal().toFixed(2);
  customer.orderNumber = pizzeria.orderNumber;
  pizzeria.newOrder()

  $("#subtotal").html("");
  $("#order").slideUp();
  $("#custName").text(customer.firstName + " " + customer.lastName);
  $("#waitTime").text("");
  $("#orderNum").text(customer.orderNumber);
  $("#orderRecap").html(customer.orderPreview);
  $("#finalPrice").text(customer.cost);

  
})





})
