// Task 1

var product = {
	name: "Chicken feet",
	price: 149.99,
    
};


console.log(product.price);


// Task 2 


var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
];

for (var i = 0; i < animals.length; i++) {
    console.log(animals[i].colour);
}
  

var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];


var minAge = 20;
var maxAge = 50;

var ageFilter = people.filter(function(limit) {
    return limit.age >= minAge && limit.age <= maxAge;
});

ageFilter.forEach(function (name)
{
    console.log('name:' + name.firstName + " " + name.lastName)   
})




var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];


var specialFilter = dinnerOptions.filter (function(special){
    return special.onSpecial === true;
})

specialFilter.forEach(function (dish)
{
    console.log('The dish name is: ' + dish.name)
})



var products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];


var listContainer = document.querySelector(".priceList ul");

for (var i = 0; i < products.length; i++) {

    var item = products[i];

listContainer.innerHTML = listContainer.innerHTML + "<li>" + item.name + "  "+ "-" + "  " + item.price + "</li>";

}





