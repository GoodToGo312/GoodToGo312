var correct = true;
function checkButton(){
var MealName = document.getElementById("JBMealName").value;
var price = document.getElementById("JBPrice").value;
var calories = document.getElementById("JBCalories").value;
var description = document.getElementById("JBDescription").value;

if(correct){
if(!MealName || /\d/.test(MealName)){
alert("Please enter an appropriate meal name");
correct = false;
}
if(isNaN(price)|| !price || !price.trim()){
alert("Please enter an appropriate price");
correct = false;
}
if(isNaN(calories)|| !calories || !calories.trim()){
alert("Please enter an appropriate number of calories");
correct = false;
}
if(!description || !description.trim()){
alert("Please enter an appropriate description");
correct = false;
}
if(!correct){
window.location.reload(); // Reload the page if input is incorrect
return; // Exit the function
}
}
if(correct){ 
alert("Meal added successfully!");
var meal = {
name: MealName,
price: parseFloat(price),
calories: parseInt(calories),
description: description
};



var meals = JSON.parse(localStorage.getItem('meals')) || [];
meals.push(meal);
localStorage.setItem('meals', JSON.stringify(meals));
document.getElementById("JBMealName").value = '';
document.getElementById("JBPrice").value = '';
document.getElementById("JBCalories").value = '';
document.getElementById("JBDescription").value = '';
displayMeals();
}}


function displayMeals() {
if(correct){
var meals = JSON.parse(localStorage.getItem('meals')) || [];
var dashboard = document.getElementById("ownerDashboard");

meals.forEach(function (meal, index) {
var mealElement = document.createElement("div");
mealElement.classList.add("parentsDiv2"); 
mealElement.innerHTML =
 "<div class='childDiv'>" +
"<img src='images/default.jpg' alt='Im' class='image'><br>" +
 "<span><strong>" + meal.name + "</strong></span><br><br>" +
"<span>" + meal.description + "</span><br><br>" +
 "<span>" + meal.calories + " Calories</span><br>" +
"<span>" + meal.price + " SR</span>" +
 "</div>";
 dashboard.appendChild(mealElement);
 });}
 else
 alert("Failed to add the meal, try again");
}
window.onload = displayMeals;

function displayOffers() {
var offers = JSON.parse(localStorage.getItem('offers')) || [];
var offersList = document.getElementById("JBoffers-list");

   

offers.forEach(function (offer, index) {
var offerItem = document.createElement("li");
offerItem.id = "JBoffer" + (index + 1);

offerItem.innerHTML =
"<img src='" + offer.image + "' alt='picture of food offer' class='JBofferImg'>" +
"<input type='checkbox' name='offer' class='JBcheckBox' id='JBoffer" + (index + 1) + "_checkbox'>" +
"<label for='JBoffer" + (index + 1) + "_checkbox'><br><strong>" + offer.name + "</strong><br><br>" + offer.description + "</label>" +
"<button type='button' onclick='deleteOffer(\"JBoffer" + (index + 1) + "_checkbox\")'>delete</button>";

offersList.appendChild(offerItem);
 });
}
function addOffer() {
var correct = true;
var offerName = document.getElementById("JBoffer").value;
var offerDescription = document.getElementById("JBofferDe").value;
var offerImage = "default_offer_image.png"; // Default image, you can change it if needed
    
if(correct){
if(!offerName || /\d/.test(offerName)){
alert("Please enter an appropriate offer name");
correct = false;
}
if(!offerDescription){
alert("Please enter an appropriate offer description");
correct = false;
}
if(!correct){
window.location.reload(); // Reload the page if input is incorrect
return; // Exit the function
}
}
    
    if(correct){
        alert("Offer added successfully!");
        var newOffer = {
            name: offerName,
            description: offerDescription,
            image: offerImage
        };
        
        var offers = JSON.parse(localStorage.getItem('offers')) || [];
        offers.push(newOffer);
        localStorage.setItem('offers', JSON.stringify(offers));
        
        document.getElementById("JBoffer").value = '';
        document.getElementById("JBofferDe").value = '';
        
        displayOffers();
    }
}

function displayOffers() {
var offers = JSON.parse(localStorage.getItem('offers')) || [];
var offersList = document.getElementById("JBoffers-list");
    
offers.forEach(function (offer, index) {
var offerItem = document.createElement("li");
offerItem.id = "JBoffer" + (index + 1);
        
offerItem.innerHTML =
 "<img src='" + offer.image + "' alt='picture of food offer' class='JBofferImg'>" +
 "<input type='checkbox' name='offer' class='JBcheckBox' id='JBoffer" + (index + 1) + "_checkbox'>" +
 "<label for='JBoffer" + (index + 1) + "_checkbox'><br><strong>" + offer.name + "</strong><br><br>" + offer.description + "</label>" +
 "<button type='button' onclick='deleteOffer(\"JBoffer" + (index + 1) + "\")'>delete</button>";
        
offersList.appendChild(offerItem);
});
}


function deleteOffer(offerId) {
var offerCheckboxId = offerId + "_checkbox";
var offerCheckbox = document.getElementById(offerCheckboxId);
if (!offerCheckbox || !offerCheckbox.checked) {
alert("Please select the offer to delete.");
} else {
var confirmation = confirm("Are you sure you want to delete this offer?");
if (confirmation) {
var offerElement = document.getElementById(offerId);
offerElement.remove();
var offerIndex = parseInt(offerId.replace("JBoffer", "")) - 1;
var offers = JSON.parse(localStorage.getItem('offers')) || [];
offers.splice(offerIndex, 1);
localStorage.setItem('offers', JSON.stringify(offers));
        }
    }
}

//localStorage.clear();