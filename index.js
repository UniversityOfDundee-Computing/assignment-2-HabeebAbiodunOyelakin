

// // $("#menu-bar").addClass('toggle')
// // window.onload =reLoad()

// // function reLoad(){
// //     document.getElementById("menu_bar").classList.toggle('inviscible')
// // }

// let menu = document.getElementById('menu-bar');
    // let header_menu = document.querySelector('.header-menu');

    $('#menu-bar').addEventListener('click' , () => {
        $('#menu-bar').classList.toggle('fa-times');
        header_menu.classList.toggle('nav-toggle');
    });

console.log("hello");