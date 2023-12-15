// This code added functionality to the navbar
$('#menu-bar').click(function addToggle() {
    $('#menu-bar').toggleClass('fa-times');
    $('.header-menu').toggleClass('nav-toggle');
    $('.site-header').toggleClass('site-header-reduce')
})

//This code shrinks the header on scrolling 50px downward
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.site-header').addClass('small');
    } else {
        $('.site-header').removeClass('small');
    }
});

//This code added functionality to the Order now button in homepage menu section
$('.order-btn').click(function goToOrderPage() {
    window.location.href = 'order_page.html';
})

//These line of codes fetch data from mealDB API. I have used it the order page of the website. It allows the user 
//to search for any sort of meal they would like to order. 
const searchMeal = async (e) => {
    e.preventDefault();

    // Select Elements
    const inputval = document.querySelector(".inputval");
    const foodName = document.querySelector(".foodname");
    const info = document.querySelector(".info");
    const foodImg = document.querySelector(".food-img");
    const ingredientsOutput = document.querySelector(".ingredients");

    const showMealInfo = (meal) => {
        const {
            strMeal,
            strMealThumb,
            strInstructions
        } = meal;
        foodName.textContent = strMeal;
        foodImg.style.backgroundImage = `url(${strMealThumb})`;
        info.textContent = strInstructions;

        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients.push(
                    `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
                );
            } else {
                break;
            }
        }

        const html = `
        <span>${ingredients
          .map((ing) => `<li class="ing">${ing}</li>`)
          .join("")}</span>
        `;

        ingredientsOutput.innerHTML = html;
    };

    const showAlert = () => {
        alert("Meal not found :");
    };

    // Fetch Data
    const fetchMealData = async (val) => {
        try {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
            );

            if (!res.ok) {
                throw new Error('Network response was not ok.');
            }

            const {
                meals
            } = await res.json();
            return meals;
        } catch (error) {
            error('Error fetching data:', error);
        }
    };

    // Get the user value
    const val = inputval.value.trim();

    if (val) {
        const meals = await fetchMealData(val);

        if (!meals) {
            showAlert();
            return;
        }

        meals.forEach(showMealInfo);
    }
};

const form = document.querySelector(".input-container");
form.addEventListener("submit", searchMeal);

const magnifier = document.querySelector(".magnifier");
magnifier.addEventListener("click", searchMeal);