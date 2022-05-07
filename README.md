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
Test: should link UI items to functions and html
code:

Expected Outcome:website functionality
