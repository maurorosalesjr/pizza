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
  this.cheeze = cheeze
  console.log(this.size); 
  console.log(this.cheeze);
}

Pizza.prototype.toppingsCost = function() {
  let cost = 0;
  const costMap = {
    "Pineapple" : 1,
    "Onion" : 1,
    "Garlic" : 1,
    "Spinach" : 1,
    "Bell Pepper" : 1,
    "Shroomiez" : 1,
    "Pepped'roni" : 1,
    "Facon" : 1,
    "Chicki Nuggiez" : 1,
    "Zausage" : 1,
    "Hyam" : 1,
  }
  for(let i=0; i < topppings.length; i++) {
    let topping = topping[i];
    let toppingCost = costMap[topping];
    cost += toppingCost;
  }return cost;
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
  } return costOfCheeze
}

function add (crustPrice, toppingsCost, costOfCheeze) {
  return crustPrice + toppingsCost + costOfCheeze
}




$(document).ready(function() {
  $("#name").submit(function(event) {
    event.preventDefault();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let crustPrice = parseInt(Pizza.crustPrice);
    console.log(crustPrice)
    let toppingsCost = parseInt(Pizza.toppingsCost);
    let costOfCheeze = parseInt(Pizza.cheezeCost);
    let customer = new Customer(firstName, lastName);
    let toppings = add(crustPrice, toppingsCost, costOfCheeze);
    let size = $("#size").val();

    let cheeze = $("input:radio[name='cheeze']").val();
    let pizza = new Pizza(toppings, size, cheeze);
    console.log(toppings);
    //let topping =[]
    //$('input[id="topping"]:checked').each(function() {
      //topping.push(topping); 
      //});
    console.log(toppingsCost)
    $("#custName").text(customer.firstName + " " + customer.lastName)
    $("#waitTime").text(customer.waitTime);
    $("#orderNum").text(customer.orderNumber);
    $("#orderRecap").text(`1 ${size} pizza`);
    $("#finalPrice").text(pizza);
    $(".confrim-order").hide();
  })

})