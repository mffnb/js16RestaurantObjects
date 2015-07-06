
// Part I
// Define a constructor for the following object. Add parameters to the constructor for the given properties and add them as instance variables.
// FoodItem
// string name
// number calories
// boolean vegan
// boolean glutenFree
// boolean citrusFree
// Define a toString method on the constructor's prototype. It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. toString should not have any side effects.
// Instantiate three different FoodItems and store each in a separate variable. Call toString on each instance and print the result to the console.
// Part II
// Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.
// Drink
// string name
// string description
// number price
// Array of FoodItem ingredients
// Plate
// string name
// string description
// number price
// Array of FoodItem ingredients
// Order
// Array of Plate plates
// Menu
// Array of Plate plates
// Restaurant
// string name
// string description
// Menu menu
// Customer
// string dietaryPreference
// Define a toString method on each constructor's prototype. This method should return a string representation of the object, formatted as you choose. 
// toString should not have any side effects.  You may want to reuse the toString method of the contained objects. (e.g. the Menu object should call 
// toString on each of its plates to reuse that functionality instead of having to duplicate the code for each plate).
// 
// Add the following methods to the Plate object to determine if all the food items within it fit a specific dietary restriction.
// boolean isVegan
// boolean isGlutenFree
// boolean isCitrusFree
// Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink.
// Instantiate a Menu that contains each of the instantiated Plates and Drinks.
// Instantiate a Restaurant that contains the instantiated Menu.
// Call the Restaurant's toString method to have it print out all its information.


/// Restaurant
	// -name
	// --menu

	// Menu
	// -menu item
	// -- Plates
	// -- Drinks




$(document).on('ready', function() {

var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}
var Drink = function (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
var Plate = function (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
var Order = function (plates) {
    this.plates = plates;
}
var Menu = function (plates) {
    this.plates = plates;
}
var Restaurant = function (name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;
}
var Customer = function (dietaryPreference) {
    this.dietaryPreference = dietaryPreference;
}

// PART ONE
FoodItem.prototype.toString = function () {
    var output = 'Name : ' + this.name + '\nCalories : ' + this.calories + '\nVegan : ' + this.vegan + '\nGluten Free : ' + this.glutenFree + '\nCitrus Free????? : ' + this.citrusFree;
    //    console.log(output);
    return output;
}


// PART TWO
Drink.prototype.toString = function () {
    var output = 'Name : ' + this.name + '\nDescription : ' + this.description + '\nPrice : ' + this.price + '\nIngredients : ' + this.ingredients;
    //    console.log(output);
    return output;
}
Plate.prototype.toString = function () {
    var output = 'Name : ' + this.name + '\nDescription : ' + this.description + '\nPrice : ' + this.price + '\nIngredients : ' + this.ingredients;
    //    console.log(output);
    return output;
}

Plate.prototype.isVegan = function () {
    return this.foodItem.vegan;
}

Plate.prototype.isGlutenFree = function () {
    return and(pluck(this.ingredients, 'glutenFree'));
}

Plate.prototype.isCitrusFree = function () {
    console.log("CITRUS? : " + this.foodItem.citrusFree);
    return this.foodItem.citrusFree;
}

Order.prototype.toString = function () {
    var output = '\nPlates : ' + this.plates;
    //    console.log(output);
    return output;
}
Menu.prototype.toString = function () {
    //    var output = '\nMenu : ' + this.plates.map;
    this.plate.map(
        function (plate) {
            return plate.toString();
        });
}
Restaurant.prototype.toString = function () {
    var output = 'Name : ' + this.name + '\nDescription : ' + this.description + '\nMenu : ' + this.menu;
    //    console.log(output);
    return output;
}
Customer.prototype.toString = function () {
    var output = '\nDietary Preference : ' + this.dietaryPreference;
    //    console.log(output);
    return output;
}

var tortilla = new FoodItem('Tortilla', '150', true, false, true);
var lettuce = new FoodItem('lettuce', '20', true, true, true);
var chicken = new FoodItem('Chicken', '800', false, true, true);
var sriracha = new FoodItem('Sriracha', '900', true, false, true);

var apple = new FoodItem('Apple', '150', true, true, false);
var ribeye = new FoodItem('Ribeye', '1500', false, true, true);

var bigBurrito = new Plate('Burrito', 'Delicious', '3.50', [tortilla, lettuce, chicken, sriracha]);
//var guacPlate = new Plate('Guac', 'Delicious', '5.50', ['Avocados', 'Salsa', 'Lime', 'Cilantro']);
//var margarita = new Plate('Ballin Blue Marg', 'Delicious', '.50', ['Tequila', 'Lime Juice', 'Margarita Mix', 'TripleSec']);

var rioMenu = new Menu(bigBurrito);
var rioGrande = new Restaurant(rioMenu);
console.log(rioGrande.toString());
  
});