document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector('.navbar');
    let menuBtn = document.querySelector('#menu-btn');
    let cartbar = document.querySelector('.cart-items-container'); // Define cartbar here
    let searchbar = document.querySelector('.search-form'); // Define searchbar here

    menuBtn.onclick = () => {
        navbar.classList.toggle('active');
        cartbar.classList.remove('active'); // Use cartbar variable here
        searchbar.classList.remove('active'); // Use searchbar variable here
    };

    let cartBtn = document.querySelector('#cart-btn');

    cartBtn.onclick = () => {
        cartbar.classList.toggle('active');
        navbar.classList.remove('active');
        searchbar.classList.remove('active');
    };

    let searchBtn = document.querySelector('#search-btn');

    searchBtn.onclick = () => {
        searchbar.classList.toggle('active');
        navbar.classList.remove('active');
        cartbar.classList.remove('active');
    };

    window.onscroll = () => {
        navbar.classList.remove('active');
        cartbar.classList.remove('active');
        searchbar.classList.remove('active');
    };
});
