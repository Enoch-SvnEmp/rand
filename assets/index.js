// JavaScript for index.html

// import already existing functions from script.js file
import { isUserLoggedIn, triggerAttention } from './script.js';

// javascript code for media query changes applicable............
// select the Elements
const menuButton = document.getElementById('mobile-menu');
const navLinkslist = document.getElementById('nav-links');
const navActions = document.getElementById('nav-actions');

// listen for a user click
menuButton.addEventListener('click', () => {
    // toggle the 'active' class on the menu list to slide it in/out
    navLinkslist.classList.toggle('active');

    // toggle the 'is-active' class on the button itself to turn the bars into X
    menuButton.classList.toggle('is-active')
    ;
    // toggle the 'active' class on the nav-actions
    navActions.classList.toggle('active');
});
// ....................................................................................



// check if the user is logged in and redirect to aboutUser.html if they are

document.addEventListener('DOMContentLoaded', () => {
    // grab all navigation links and the login button
    const navLinks = document.querySelectorAll('.nav-links a');
    const loginButton = document.querySelector('.btn-log');

    // loop through the navigation links and listen for clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // check if the user is not logged in
            if (!isUserLoggedIn()) {
                e.preventDefault(); // prevent the default link behavior (opening the link or page)

                // if the menu is open, close it when the user clicks on a link
                // toggle the 'active' class on the menu list to slide it in/out
                navLinkslist.classList.remove('active');

                // toggle the 'is-active' class on the button itself to turn the bars into X
                menuButton.classList.remove('is-active');
                
                triggerAttention(loginButton); // trigger the shake animation on the login button
            }   
        });
    });

});

// when the user clicks the "LOG IN" button, redirect to the aboutUser.html page
document.querySelector('.btn-log').addEventListener('click', function() {
    window.location.href = 'aboutUser.html';
});



