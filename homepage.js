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

// Create element
function createNode(element) {
  return document.createElement(element);
}

// Append child to the elemeent
function append(parent, el) {
  return parent.append(el);
}

// This function fetched data from spooncular API
function fetchTrivial() {
  const para = document.querySelector('.jokes');
  const url = 'https://api.spoonacular.com/food/trivia/random?apiKey=f1f952480e664ae9bc75f82b4d011a66';
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let p = createNode('p');
      p.innerHTML = data.text;
      append(para, p);
    });
}

// Calling the function
fetchTrivial();

// Adding event listener to the button
document.querySelector('.jokeload').addEventListener('click', function () {
  location.reload();
})