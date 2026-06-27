// JavaScript for index.html
import { isUserLoggedIn, triggerAttention } from './script.js';


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
                triggerAttention(loginButton); // trigger the shake animation on the login button
            }   
        });
    });
});

// when the user clicks the "LOG IN" button, redirect to the aboutUser.html page
document.querySelector('.btn-log').addEventListener('click', function() {
    window.location.href = 'aboutUser.html';
});



