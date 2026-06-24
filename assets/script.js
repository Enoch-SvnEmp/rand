

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