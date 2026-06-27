// this javascript file will contain all the functions that will created and exported to other files for use
// utility functions that can be used in other files


// function to check if a user is logged in
export function isUserLoggedIn() {
    // check if the user is logged in by checking the local storage and return true if the user is logged in, otherwise return false
    return localStorage.getItem('isloggedIn') === 'true';
}


// function to make an element shake (reuseable alert style)
export function triggerAttention(element) {
    element.classList.remove('error');
    void element.offsetWidth; // force a reflow to restart the animation
    element.classList.add('error');
    // remove the error class after the animation is done to allow for future triggers
    setTimeout(() => {
        element.classList.remove('error');
    }, 300);
}










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




