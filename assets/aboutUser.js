// javascript code for about user html...........

// import already existing functions from script.js file
import { display, voidRead, enterData, disappear, ageCalculator,
    addErrorClass, removeErrorClass, introName } from './script.js';



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



// javascript for main request form
// javascript to take and accept user input 
const submitBtn = document.getElementById('submit-btn'); //id of the submit button

// ID 's that are responsible for acceptance n javascript
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const dateOb = document.getElementById('dateOb');
const Email = document.getElementById('email')

// ID 's that are responsible for display n javascript
const postFullName = document.getElementById('post-intro');
const postAge = document.getElementById('post-age');

// ............................................................................
// creating my own functions and insert them into the event listener (submitBtn)
// ....................................................................................... 
// creating a function to toggle between displaying 'main-post' when the 'submit' is 'clicked'
const mainPost = document.getElementById('main-post')


// a function to remove main-post and all data when the user clicks on the clear button
const clearBtn = document.getElementById('clear-btn');
function clear() {
    mainPost.classList.remove('display');
    firstName.value = '';
    lastName.value = '';
    dateOb.value = '';
    Email.value = '';
    postFullName.innerHTML = '';
    postAge.innerHTML = '';
    removeErrorClass(firstName, lastName, dateOb, Email);
}

// // creating a function to add and remove error class from the input fields



// function to remove the error class from all input fields when the user enters data in any of the input fields


// a function to void read to force a browser reflow (restart the animation) when the user enters data in any of the input fields


// adding a function to let make main-req disappear when the user clicks on the submit button
const mainReq = document.getElementById('input-group');


// adding a function to let make main-req reappear when the user clicks on the clear button
function reappear() {
    mainReq.classList.remove('disappear');
}

// creating a general function to make sure the user entered the required field 
function data_valid(){
    // make sure the user actually entered data
    removeErrorClass(firstName, lastName, dateOb, Email);
    voidRead(firstName, lastName, dateOb, Email);
    if (!firstName.value || !lastName.value || !dateOb.value || !Email.value) {
        
        
        if (!firstName.value && !lastName.value && !dateOb.value && !Email.value) {

            addErrorClass(firstName, lastName, dateOb, Email);

        } else if (!lastName.value && !firstName.value && !Email.value) {
            removeErrorClass(dateOb);
            addErrorClass(firstName, lastName, Email);


        } else if (!dateOb.value  && !firstName.value && !Email.value) {
            removeErrorClass(lastName);
            addErrorClass(dateOb, firstName, Email);

        } else if (!dateOb.value  && !lastName.value && !Email.value) {
            removeErrorClass(firstName);
            addErrorClass(dateOb, lastName, Email);

        } else if (!dateOb.value && !Email.value) {
            removeErrorClass(firstName, lastName);
            addErrorClass(dateOb, Email);

        } else if (!firstName.value && !Email.value) {
            removeErrorClass(lastName, dateOb);
            addErrorClass(firstName, Email);

        } else if (!lastName.value && !firstName.value) {
            removeErrorClass(dateOb, Email);
            addErrorClass(firstName, lastName);

        } else if (!dateOb.value  && !firstName.value) {
            removeErrorClass(lastName);
            removeErrorClass(Email);
            addErrorClass(dateOb, firstName);

        } else if (!dateOb.value  && !lastName.value) {
            removeErrorClass(firstName, Email);
            addErrorClass(dateOb, lastName);

        } else if (!dateOb.value) {
            removeErrorClass(firstName, lastName, Email);
            addErrorClass(dateOb);

        } else if (!firstName.value) {
            removeErrorClass(lastName, dateOb, Email);
            addErrorClass(firstName);

        } else if (!Email.value) {
            removeErrorClass(lastName, firstName, dateOb);
            addErrorClass(Email);

        }  else {
            removeErrorClass(firstName, lastName, dateOb, Email);
            addErrorClass(lastName);

        };
        
        
        // alert('please enter the empty field');
    } else {
        // if the all data required is entered then 'main-post' will be displayed
        removeErrorClass(firstName, lastName, dateOb, Email);
        display(mainPost);
        disappear(mainReq);
    };
};

// .......................................................................................................



// ....................................................................................
// creating a function to introduce users with their input data when they click on the submit button
function greetingIntro() {
    introName(firstName.value, lastName.value, postFullName);
    ageCalculator(dateOb, postAge);
}

// ....................................................................................
// adding functions to the input fields to remove the error class when the user enters data in any of the input fields
// ....................................................................................

enterData(firstName, lastName, dateOb, Email);
// .....................................................................

// ....................................................................................
// adding event listener to the submit button to perform specified functions
// .................................................................................
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // .......................
    data_valid();
    // .......................
    greetingIntro();
    // ........................
});


// ....................................................................................
// adding event listener to the clear button to perform specified functions
// .................................................................................

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clear();
    reappear();
});

// when the user clicks the "Suscribe" button, redirect to the contacts.html page
document.querySelector('.btn-sub').addEventListener('click', function() {
    window.location.href = 'contacts.html';
});
