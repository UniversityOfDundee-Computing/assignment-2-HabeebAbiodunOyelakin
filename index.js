// This code added functionality to the navbar
$('#menu-bar').click(function addToggle() {
    $('#menu-bar').toggleClass('fa-times');
    $('.header-menu').toggleClass('nav-toggle');
    $('.site-header').toggleClass('site-header-reduce')
})



// function createNode(element) {
//     return document.createElement(element);
//     }

// function append(parent, el) {
//     return parent.appendChild(el);
// }
// const numberOfUsers = 10;
// const ul = document.getElementById('authors');




// const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=$' + numberOfUsers;
// fetch(url)
//     .then((resp) => resp.json())
//     .then(function (data) {
//         let authors = data.results;
//         return authors.map(function (author) {
//             let li = createNode('li'),
//                 img = createNode('img'),
//                 span = createNode('span');
//             img.src = author.picture.medium;
//             span.innerHTML = `${author.name.first} ${author.name.last}`;
//             append(li, img);
//             append(li, span);
//             append(ul, li);
//         })
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


const searchMeal = async (e) => {
    e.preventDefault();
  
    // Select Elements
    const inputval = document.querySelector(".inputval");
    const foodName = document.querySelector(".foodname");
    const info = document.querySelector(".info");
    const foodImg = document.querySelector(".food-img");
    const ingredientsOutput = document.querySelector(".ingredients");
  
    const showMealInfo = (meal) => {
      const { strMeal, strMealThumb, strInstructions } = meal;
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
  
        const { meals } = await res.json();
        return meals;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
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
    } else {
      alert("Please try searching for a meal :)");
    }
  };
  
  const form = document.querySelector(".input-container");
  form.addEventListener("submit", searchMeal);
  
  const magnifier = document.querySelector(".magnifier");
  magnifier.addEventListener("click", searchMeal);
  