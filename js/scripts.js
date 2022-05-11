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
function Pizza(toppings, size, cheeze) {
  this.toppings = toppings;
  this.size = size;
  this.cheeze = cheeze;
}

Pizza.prototype.toppingsCost = function() {
  let cost = 0;
  const costMap = {
    "Pineapple" : 0,
    "Onion" : 1,
    "Garlic" : 1,
    "Spinach" : 1,
    "Bell Pepper" : 1,
    "Shroomiez" : 2,
    "Pepped'roni" : 1,
    "Facon" : 1,
    "Chickie Nuggiez" : 2,
    "Zausage" : 1,
    "Hyam" : 2,
  }
  for(let i=0; i < this.toppings.length; i++) {
    let topping = this.toppings[i];
    let toppingCost = costMap[topping];
    cost += toppingCost;
  }
  
  return cost;
}; 

Pizza.prototype.crustPrice = function() {
  let crustPrice = 5;
  if(this.size === "small") {
    crustPrice = 10;
  } else if(this.size === "medium") {
    crustPrice = 15;
  } else if(this.size === "large") {
    crustPrice = 22;
  }else if(this.size === "xtraLarge") {
    crustPrice = 30;
  } else {crustPrice = 5}
  
  return crustPrice;
};



Pizza.prototype.cheezeCost = function () {
  let costOfCheeze = 1;
  if(this.cheeze === "No Cheeze") {
    costOfCheeze = 0;
  } else if (this.cheeze === "Hella Cheeze" ) {
    costOfCheeze = 3;
  }
  
  return costOfCheeze
}

function add (crustPrice, toppingsCost, costOfCheeze) {
  return crustPrice + toppingsCost + costOfCheeze
}




$(document).ready(function() {
  $("#name").submit(function(event) {
    event.preventDefault();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let customer = new Customer(firstName, lastName);
    let newCrust = $("#size").val()
    let newCheeze = $("input[id='cheeze']:checked").val();
    let newToppings =[];
    $('input[name="topping"]:checked').each(function() {
      newToppings.push(this.value); 
      });
    let pizza = new Pizza(newToppings, newCrust, newCheeze);
    let finalcost = add(pizza.crustPrice(), pizza.toppingsCost(), pizza.cheezeCost())
    $("#custName").text(customer.firstName + " " + customer.lastName)
    $("#waitTime").text(customer.waitTime);
    $("#orderNum").text(customer.orderNumber);
    $("#orderRecap").text(`1 ${newCrust} pizza with ${newToppings.join(" ")}`);
    $("#finalPrice").text(finalcost);
    $(".total").show();
  })

})