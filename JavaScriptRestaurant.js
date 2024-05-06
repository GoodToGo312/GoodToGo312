
/*document.addEventListener("DOMContentLoaded", function() {
    // Function to sort meals based on selected criteria
    function sortMeals() {
        var selectElement = document.querySelector('.selection');
        var selectedOption = selectElement.options[selectElement.selectedIndex].text;
        var meals = document.querySelectorAll('.childDiv');
        
        if (selectedOption.includes("Price")) {
            meals = Array.from(meals).sort(function(a, b) {
                var priceA = parseFloat(a.querySelector('.price').innerText);
                var priceB = parseFloat(b.querySelector('.price').innerText);
                return selectedOption.includes("Higher") ? priceB - priceA : priceA - priceB;
            });
        } else {
            meals = Array.from(meals).sort(function(a, b) {
                var nameA = a.querySelector('strong').innerText.toLowerCase();
                var nameB = b.querySelector('strong').innerText.toLowerCase();
                return selectedOption.includes("Z") ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB);
            });
        }
        
        var parentDiv = document.querySelector('.parentsDiv2');
        meals.forEach(function(meal) {
            parentDiv.appendChild(meal);
        });
    }
});
    // Add event listener for sorting meals
    var selectElement = document.querySelector('.selection');
    selectElement.addEventListener('change', sortMeals); */



/*
document.addEventListener("DOMContentLoaded", function() {

// Function to sort meals alphabetically by name
function sortMealsByName(order) {
    let mealsContainer = document.querySelector('.parentsDiv2');
    let mealElements = mealsContainer.querySelectorAll('.childDiv');
    let mealsArray = Array.from(mealElements);

    mealsArray.sort((a, b) => {
        let nameA = a.querySelector('strong').textContent.toUpperCase();
        let nameB = b.querySelector('strong').textContent.toUpperCase();
        if (order === ' A to Z') {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });

    mealsArray.forEach(item => mealsContainer.appendChild(item));
}

// Function to sort meals by price
function sortMealsByPrice(order) {
    let mealsContainer = document.querySelector('.parentsDiv2');
    let mealElements = mealsContainer.querySelectorAll('.childDiv');
    let mealsArray = Array.from(mealElements);

    mealsArray.sort((a, b) => {
        let priceA = parseFloat(a.querySelector('.price').textContent);
        let priceB = parseFloat(b.querySelector('.price').textContent);
        if (order === 'Higher to lower') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });

    mealsArray.forEach(item => mealsContainer.appendChild(item));
}

// Event listener for the select element
document.querySelector('.selection').addEventListener('change', function() {
	console.log('Selection changed');
    let sortBy = this.value.split(' ')[2]; // Extracting 'Name' or 'Price'
    let sortOrder = this.value.split(' ')[0]; // Extracting 'Higher' or 'Lower' or 'A' or 'Z'
	
	 console.log('Sort By:', sortBy);
    console.log('Sort Order:', sortOrder);

    if (sortBy === 'Name') {
        sortMealsByName(sortOrder.toLowerCase());
    } else if (sortBy === 'Price') {
        sortMealsByPrice(sortOrder.toLowerCase());
    }
});
});


*/

// Function to add selected items to the cart, store in local storage, and redirect to Cart page

/* when the user clicks the "Add to cart" button, the addToCart function will add selected items to the cart,
 store them in local storage, and then redirect the user to the Cart page*/
 
function addToCart() {
    let cartItems = [];
    let mealCheckboxes = document.querySelectorAll('.meal-checkbox:checked');
    mealCheckboxes.forEach(checkbox => {
        let mealContainer = checkbox.closest('.childDiv');
        let mealName = mealContainer.querySelector('strong').textContent;
        let mealQuantity = parseInt(mealContainer.querySelector('.quantity').textContent);
        let mealPrice = parseFloat(mealContainer.querySelector('.price').textContent);
        let mealImage = mealContainer.querySelector('img').getAttribute('src');
        cartItems.push({ name: mealName, quantity: mealQuantity, price: mealPrice, image: mealImage });
    });
    // Store cartItems in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Redirect user to Cart page
    window.location.href = 'Cart.html';
}




//Function for a quantity
document.addEventListener("DOMContentLoaded", function() {
    // Get all quantity elements
    var quantityElements = document.querySelectorAll('.quantity'); 

    // Iterate over each quantity element
    quantityElements.forEach(function(quantityElement) {
        // Get decrease and increase buttons
        var decreaseButton = quantityElement.querySelector('.quantity-decrease');
        var increaseButton = quantityElement.querySelector('.quantity-increase');
        var quantityDisplay = quantityElement.querySelector('p');

        // Add click event listener to decrease button
        decreaseButton.addEventListener('click', function() {
            // Get current quantity
            var currentQuantity = parseInt(quantityDisplay.textContent);
            // Decrease quantity2 if greater than 0
            if (currentQuantity > 1) {
                quantityDisplay.textContent = currentQuantity - 1;
            }
        });

        // Add click event listener to increase button
        increaseButton.addEventListener('click', function() {
            // Get current quantity
            var currentQuantity = parseInt(quantityDisplay.textContent);
            // Increase quantity
            quantityDisplay.textContent = currentQuantity + 1;
        });
    });
});








