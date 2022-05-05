////customer////
function Customer(firstName, lastName, order) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.order = order;
}




//////pizza builder/////
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = this.getPrice(toppings, size);
  this.sizeArray = this.getSizeArray();
}

Pizza.prototype.getPrice = function() {
  let basePrice = [5, 10, 18, 23, 30];//[slice, small, medium, large, xlarge]
  const totalPrice = basePrice[this.sizeArray];
  return totalPrice
}

Pizza.prototype.getSizeArray = function() {
  let sizeOption = ["Slice o'Pie", "Small", "Medium", "Large", "Xtra-Large"]
  return sizeOption.indexOf(this.size)
}








///////UI logic/////

ß
$("#new-order").submit(function(event) {
  event.preventDefault();
  let newSize = $("#size").val();
  let cheeze = $("input:radio[name=topping]:checked").val();
  let topping = $("input:checkbox[name=topping]:checked");
  let newTopping = [];
})