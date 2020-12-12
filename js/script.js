var firstName = "Mary";
var lastName = "Smith";
var fullName = firstName + " " + lastName;

var nameContainer = document.querySelector("#name");

nameContainer.innerHTML = fullName;

console.log("nameContainer:", nameContainer.innerHTML);

var product1 = "Terrible Product";
var product2 = "Bad Product";
var product3 = "Mediocre Product";

var product1Container = document.querySelector("#productName1");
var product2Container = document.querySelector("#productName2");
var product3Container = document.querySelector("#productName3");

product1Container.innerHTML = product1;
product2Container.innerHTML = product2;
product3Container.innerHTML = product3;
